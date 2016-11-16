const gulp = require('gulp');

// Include Plugins
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const imagefull = 1200;
const imagehalf = 600;
const imagethumb = 300;
const imagemin = require('gulp-imagemin');
const imageresize = require('gulp-image-resize');
const minifycss = require('gulp-minify-css');
const cleanCSS = require('gulp-clean-css');
const os = require('os');
const parallel = require('concurrent-transform');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');
const sassfiles = 'scss/**/*.scss';
const sourcemaps = require('gulp-sourcemaps');
const strip = require('gulp-strip-comments');
const uglify = require('gulp-uglify');

gulp.task('sassdoc', () => {
  var options = {
    dest: '../static/sassdocs',
    verbose: true,
    basePath: 'https://github.com/rdwatters/digitalcaporg-redesign/tree/master/pipeline/scss'
  };

  return gulp.src('scss/**/*.scss')
    .pipe(sassdoc(options));
});

gulp.task('sass', () => {
  return gulp.src(sassfiles)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('sourcemaps/'))
    .pipe(gulp.dest('../static/assets/css'))
    .pipe(rename('style-embed.html'))
    .pipe(gulp.dest('../layouts/partials/head'));
});

gulp.task('ie9', () => {
  return gulp.src('./ie9.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('ie9.css'))
    .pipe(gulp.dest('../static/assets/css'));
});

gulp.task('nojsstyle', () => {
  return gulp.src('scss/no-js.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(rename('no-js.min.css'))
    .pipe(gulp.dest('../static/assets/css'))
});

// Concatenate & Minify JS
gulp.task('scripts', () => {
  return gulp.src(['js/utils.js','js/globals.js','js/scripts/*js'])
    .pipe(sourcemaps.init())
    .pipe(strip())
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', function(e) {
      console.log('>>> ERROR', e);
      this.emit('end');
    })
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('../static/assets/js'));
});

gulp.task("image-resize", () => {
  return gulp.src("../source-images/*.{jpg,png,jpeg,gif}")
    .pipe(imagemin())
    .pipe(parallel(
      imageresize({ width: imagefull }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images"))
    .pipe(parallel(
      imageresize({ width: imagehalf }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images/half"))
    .pipe(parallel(
      imageresize({ width: imagethumb }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images/thumbs"));
});

gulp.task('dev', ['sass', 'scripts', 'nojsstyle', 'ie9'], () => {
  gulp.watch(sassfiles, ['sass']);
  gulp.watch('./ie9.scss',['ie9']);
  gulp.watch('scss/no-js.scss', ['nojsstyle']);
  gulp.watch("js/**/*.js", ['scripts']);
});

// Default Task
gulp.task('default', ['dev']);
gulp.task('docs', ['sassdoc']);
gulp.task('images', ['image-resize']);
