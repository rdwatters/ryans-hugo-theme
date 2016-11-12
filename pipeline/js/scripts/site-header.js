(function() {
    //operating system constants and browser sniff
    var thisOs = getOS();
    //simple browser sniff function
    function getOS() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
        if (/android/i.test(userAgent)) {
            return "Android";
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
        return "notMobile";
    }

    var siteHeader = $('#site-header');
    var menuIcon = $('.burger-container');
    var menuLinks = $('.site-menu-link');
    var menuItems = $('.site-menu > li');
    var searchInput = $('#search-input');
    var siteNav = $('.site-navigation');
    var siteMenu = $('.site-menu');
    var siteLogo = $('.site-logo');
    var menuWrapper = $('.site-menu-inner-wrapper');
    var searchResultsWrapper = $('.search-results-wrapper');
    var closeSearch = $('.close-search');
    var searchIconDesktop = $('li.site-menu-item.search-icon');
    var closeIconDesktop = $('#close-search-desktop');
    var searchInputWrapper = $('.search-input-wrapper');
    var menuL = menuItems.length;
    var menuFrac = (menuL - 1) / menuL;
    var iPhone = false;
    if (thisOs === "iOS") {
        iPhone = true;
    }
    var menuPerc = -(menuFrac * 100) + "%";
    if (iPhone) {
        menuPerc = "-40%";
    }

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
        if (window.outerWidth < 960) {
            evt.preventDefault();
            evt.stopPropagation();
            var href = $(this).attr('href');
            menuIcon.toggleClass('menu-open');
            siteNav.toggleClass('menu-open');
            siteHeader.toggleClass('menu-open');
            setTimeout(function() { window.location = href }, 400);
        }
    });

    searchInput.on('focus', function() {
        if (window.outerWidth < 960) {
            searchInput.value = '';
            menuWrapper.velocity({ translateY: menuPerc }, 400);
            var height = -(menuWrapper.height()) + "px";
            console.log(height);
            if (iPhone) {
                height = -(menuWrapper.height() * .4) + "px";
                console.log(height + " is the height on iPhone");
            }
            searchResultsWrapper.velocity({ translateY: height, opacity: 1, height: '70vh' }, 400);
            siteLogo.addClass('hidden');
            closeSearch.velocity('transition.flipYIn');
        }
        // if (localStorage.getItem('search_query')) {
        //     searchInput.value = localStorage.getItem('search_query');
        //     lunrSearch();
            window.setTimeout(function() {
                document.getElementById('search-input').focus();
            }, 400);
        // }
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
        // if (localStorage.getItem('search_query') !== "") {
        //     document.getElementById('search-input').value = localStorage.getItem('search_query');
        //     lunrSearch();
        // }
        $('.site-menu-item').addClass('fadeoutleft');
        $('li.site-menu-item.search-icon,.search-input-wrapper, .search-results-wrapper-desktop, #all-content-wrapper').addClass('open');
        // $('li.site-menu-item.search-icon,.search-input-wrapper,#all-content-wrapper').addClass('open');
        window.setTimeout(function() {
            document.getElementById('search-input').focus();
            // document.querySelector('.search-results-wrapper-desktop').classList.add('open');
        }, 1150);
        $('.search-results-wrapper-desktop').velocity({ opacity: 1 }, 700);
    });

    closeIconDesktop.on('click', function() {
        $('.site-menu-item').removeClass('fadeoutleft');
        $('li.site-menu-item.search-icon,.search-input-wrapper,.search-results-wrapper-desktop, #all-content-wrapper').removeClass('open');
        document.getElementById('search-input').value;
        document.getElementById('search-input').blur();
    });

})();
