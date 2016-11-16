(function() {
  // //operating system constants and browser sniff
  // var thisOs = getOS();
  // //simple browser sniff function
  // function getOS() {
  //   var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //   // Windows Phone must come first because its UA also contains "Android"
  //   if (/windows phone/i.test(userAgent)) {
  //     return "Windows Phone";
  //   }
  //   if (/android/i.test(userAgent)) {
  //     return "Android";
  //   }
  //   // iOS detection from: http://stackoverflow.com/a/9039885/177710
  //   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  //     return "iOS";
  //   }
  //   return "notMobile";
  // }

  var siteHeader = $('#site-header'),
    menuIcon = $('.burger-container'),
    menuLinks = $('.site-menu-link'),
    menuItems = $('.site-menu > li'),
    searchInput = $('#search-input'),
    siteNav = $('.site-navigation'),
    siteMenu = $('.site-menu'),
    siteLogo = $('a.mobile-home-link'),
    menuWrapper = $('.site-menu-inner-wrapper'),
    searchResultsWrapper = $('.search-results-wrapper'),
    closeSearch = $('.close-search'),
    searchIconDesktop = $('li.site-menu-item.search-icon'),
    closeIconDesktop = $('#close-search-desktop'),
    searchInputWrapper = $('.search-input-wrapper'),
    menuL = menuItems.length,
    menuFrac = (menuL - 1) / menuL,
    iPhone = false,
    menuPerc = -(menuFrac * 100) + "%";
  // if (thisOs === "iOS") {
  //   menuPerc = "-40%";
  // }

  menuIcon.on('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var myVar = parseInt(menuWrapper.css('transform').split(',')[5]);
    if (!isNaN(myVar)) {
      menuWrapper.velocity({ translateY: "0%" }, 400);
      searchResultsWrapper.velocity({ translateY: "0%", opacity: 0 }, 400);
      closeSearch.velocity('transition.flipYOut');
      siteLogo.removeClass('hidden');
    }
    menuIcon.toggleClass('menu-open');
    siteNav.toggleClass('menu-open');
    siteHeader.toggleClass('menu-open');
  });

  menuLinks.on('click', function(evt) {
    // if (window.outerWidth < 960) {
    evt.preventDefault();
    evt.stopPropagation();
    var href = $(this).attr('href');
    menuIcon.toggleClass('menu-open');
    siteNav.toggleClass('menu-open');
    siteHeader.toggleClass('menu-open');
    setTimeout(function() { window.location = href }, 400);
    // }
  });

  searchInput.on('focus', function() {
    if (window.outerWidth < 960) {
      searchInput.value = '';
      menuWrapper.velocity({ translateY: menuPerc }, 400);
      var height = -(menuWrapper.height()) + "px";
      console.log(height);
      searchResultsWrapper.velocity({ translateY: height, opacity: 1, height: '70vh' }, 400);
      siteLogo.addClass('hidden');
      closeSearch.velocity('transition.flipYIn');
    }
    window.setTimeout(function() {
      document.getElementById('search-input').focus();
    }, 400);
  });

  document.getElementById('all-content-wrapper').addEventListener('click', checkForOpenSearch, false);

  function checkForOpenSearch() {
    if (window.outerWidth > 959 && document.querySelector('.search-results-wrapper-desktop.open')) {
      $('.site-menu-item').removeClass('fadeoutleft');
      $('li.site-menu-item.search-icon,.search-input-wrapper,.search-results-wrapper-desktop,#all-content-wrapper').removeClass('open');
      document.getElementById('search-input').blur();
    }
  }

  closeSearch.on('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    menuWrapper.velocity({ translateY: "0%" }, 400);
    searchResultsWrapper.velocity({ translateY: "0%", opacity: 0, height: '0%' }, 400);
    closeSearch.velocity('transition.flipYOut');
    siteLogo.removeClass('hidden');
    searchInput.value = '';
  });

  searchIconDesktop.on('click', function() {
    $('.site-menu-item').addClass('fadeoutleft');
    $('li.site-menu-item.search-icon,.search-input-wrapper, .search-results-wrapper-desktop, #all-content-wrapper').addClass('open');
    window.setTimeout(function() {
      $('#search-input').focus();
    }, 1150);
    $('.search-results-wrapper-desktop').velocity({ opacity: 1 }, 700);
  });

  closeIconDesktop.on('click', function() {
    $('.site-menu-item').removeClass('fadeoutleft');
    $('li.site-menu-item.search-icon,.search-input-wrapper,.search-results-wrapper-desktop, #all-content-wrapper').removeClass('open');
    document.getElementById('search-input').value;
    document.getElementById('search-input').blur();
  });
  // //tests to see if links clicked in search results are already on the given page and redirects the URL accordingly
  // //

  $('#search-results,#search-results-desktop').on('click', 'a', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("clicky!");
    var loc = window.location.pathname,
      locReg = new RegExp(loc),
      targ = evt.target,
      dest = targ.href;
    console.log("The targ is " + targ);
    if (locReg.test(targ)) {
      if (document.querySelector('.search-results-wrapper-desktop.open')) {
        $('.site-menu-item').removeClass('fadeoutleft');
        $('li.site-menu-item.search-icon,.search-input-wrapper,.search-results-wrapper-desktop, #all-content-wrapper').removeClass('open');
        document.getElementById('search-input').value;
        document.getElementById('search-input').blur();
      } else {
        menuWrapper.velocity({ translateY: "0%" }, 400);
        searchResultsWrapper.velocity({ translateY: "0%", opacity: 0, height: '0%' }, 400);
        closeSearch.velocity('transition.flipYOut');
        siteLogo.removeClass('hidden');
        searchInput.value = '';
        menuIcon.toggleClass('menu-open');
        siteNav.toggleClass('menu-open');
        siteHeader.toggleClass('menu-open');
      }
      window.location = dest;
    } else {
      window.location = targ;
    }
  });

})();
