//Smooth scrolling for documentation pages (eg, /docs and /theme-docs) and blog post TOC links
//Requires velocity.js

$('.smooth-links a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  var smoothTarget = $(this).attr('href');
  $(smoothTarget).velocity('scroll', {
    duration: 300,
    offset: -70,
    easing: 'ease-in-out'
  });
  //add hash back to URL for sharing
  window.location.hash = smoothTarget.split('#')[1];
});

$('#scroll-down').on('click', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  var heroHeight = window.innerHeight,
    headerHeight = $('#site-header').height(),
    offset = heroHeight - headerHeight;
  console.log(heroHeight);
  $("html").velocity('scroll', { offset: offset });
});


//WITHOUT jQuery
//// You can uncomment the following for velocity.js smoothscrolling if jQuery is removed from site

// var allSmoothLinks = document.querySelectorAll('.smooth-links a');
// var allSmoothLength = allSmoothLinks.length;
// if (allSmoothLength > 3) {
//   for (var i = 0; i < allSmoothLength; i++) {
//     allSmoothLinks[i].addEventListener('click', smoothVelocityScrolling, false);
//   }
// }

// function smoothVelocityScrolling(evt) {
//   var clickedLink = evt.target.href.split('#')[1];
//   console.log(clickedLink);
//   var targetLink = document.getElementById(clickedLink);
//   Velocity(targetLink, "scroll", { duration: 300, offset: -70 });
// }
