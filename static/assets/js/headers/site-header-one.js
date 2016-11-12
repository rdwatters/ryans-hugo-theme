// // WITHOUT JQUERY
var menuToggles = document.querySelectorAll('#site-navigation-toggle,#close-menu');
//only checking for length since there are two different main menu options
if (menuToggles) {
  for (var i = 0; i < menuToggles.length; i++) {
    menuToggles[i].addEventListener('click', toggleNav, false);
  }
}

function toggleNav(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  var siteMenu = document.getElementById('site-menu');
  siteMenu.classList.toggle('menu-open');
}
