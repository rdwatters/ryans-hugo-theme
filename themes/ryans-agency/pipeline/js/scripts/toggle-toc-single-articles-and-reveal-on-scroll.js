//Only blog posts that have at least 3 headings and meet min word length will include a TOC
//Note that word length is part of templating; see the layouts/components/table-of-contents-single-article.html
//Note that both TOC on single article pages (eg, blog posts) and TOC on documentation pages uses smooth-scrolling (pipeline/js/scripts/smooth-scrolling.js)

(function() {
  var articleToc = $('#toc-single-article');
  var tocToggle = $('#toggle-toc-single-article');
  var tocL = articleToc.length;
  if (tocL == 0) {
    return;
  } else if ($('#TableOfContents a').length < 3) {
    byId('toc-single-article').remove();
  } else {
    // reveal/hide toc for blog posts on scroll
    $(window).scroll(function() {
      var fullHeight = document.body.scrollHeight - document.body.clientHeight,
        heroHeight = $('#hero').height(),
        scrollPosition = window.pageYOffset,
        fromBottom = fullHeight - 300;
      if (scrollPosition < heroHeight || scrollPosition > fromBottom) {
        $('#toc-single-article,#toggle-toc-single-article').removeClass('fadeIn');
      } else if (scrollPosition > heroHeight) {
        $('#toc-single-article,#toggle-toc-single-article').addClass('fadeIn');
      }
    });
    //Open/close single-article TOCs at page bottom-left on blog posts
    $('#toggle-toc-single-article').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('article-toc-open').prev().toggleClass('article-toc-open');
    });
  }
})();