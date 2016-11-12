//test for referesh on documentation scroll page

(function() {
  var isDocs = document.querySelector('body.is-docs') ? true : false;
  if (performance.navigation.type == 1 && isDocs) {
    var testPos = window.pageYOffset,
      testHero = parseInt(window.getComputedStyle(byId('hero')).getPropertyValue("height"));
    if (testPos > testHero) {
      byId('documentation-aside').classList.add('fixed-aside');
    }
  }
})();


(function() {
  var docAside = byId('documentation-aside');
  if (!docAside) {
    return;
  } else {
    $(window).scroll(function() {
      var hero = byId('hero'),
        header = byId('site-header'),
        heroH = parseInt(window.getComputedStyle(hero).getPropertyValue("height")),
        headerH = parseInt(window.getComputedStyle(header).getPropertyValue("height")),
        heroDif = heroH - headerH,
        aside = byId('documentation-aside'),
        pageY = window.pageYOffset;
      if (pageY >= heroDif) {
        aside.classList.add('fixed-aside');
      } else {
        aside.classList.remove('fixed-aside');
      }
    });
  }
})();
