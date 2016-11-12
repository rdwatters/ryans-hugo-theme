$('.navigation-toggle').click(function() {
  $('.navigation-toggle').css('pointer-events', 'none');
  var overlay_navigation = $('.overlay-navigation');
  var top_bar = $('.bar-top');
  var bottom_bar = $('.bar-bottom');
  top_bar.toggleClass('animate-top-bar');
  bottom_bar.toggleClass('animate-bottom-bar');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    overlay_navigation.velocity('transition.slideLeftIn', {
      duration: 300,
      delay: 0,
      begin: function() {
        $('#site-navigation ul li').velocity('transition.perspectiveLeftIn', {
          stagger: 80,
          delay: 0,
          complete: function() {
            $('#site-navigation ul li a').velocity({
              opacity: [1, 0],
            }, {
              delay: 20,
              duration: 100
            });
            $('.navigation-toggle').css('pointer-events', 'auto');
          }
        })
      }
    })

  } else {
    $('.navigation-toggle').css('pointer-events', 'none');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    $('#site-navigation ul li').velocity('transition.perspectiveRightOut', {
      stagger: 80,
      delay: 0,
      complete: function() {
        overlay_navigation.velocity('transition.fadeOut', {
          delay: 0,
          duration: 300,
          complete: function() {
            $('#site-navigation ul li a').velocity({
              opacity: [0, 1],
            }, {
              delay: 20,
              duration: 100
            });
            $('.navigation-toggle').css('pointer-events', 'auto');
          }
        });
      }
    })
  }
});

$(function() {
  if (localStorage.getItem('changedPage') == "true" && performance.navigation.type == 1) {
    localStorage.setItem('changedPage', true);
  } else {
    localStorage.setItem('changedPage', false);
  }
  var $main = $('#all-content-wrapper'),
    /* ----- Do this when a page loads ----- */
    init = function() {
      /* ----- Page-specific functions ----- */
    },

    /* ----- Do this for ajax page loads ----- */
    ajaxLoad = function(html) {
      init();
      console.log("ajax page");
      loadListJs();
      headerCheck();
      if (document.getElementById('toggle-documentation-toc')) {
        document.getElementById('toggle-documentation-toc').addEventListener('click', toggleDocs, false);
      }
      $('.smooth-links a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var smoothTarget = $(this).attr('href');
        $(smoothTarget).velocity('scroll', {
          duration: 300,
          offset: -70,
          easing: 'ease-in-out'
        });
      });
      $('.hero-header').velocity({ opacity: 1, translateX: "12px", duration: 300 });

      /* ----- Here you could maybe add logic to set the HTML title to the new page title ----- */
      /* ----- Used for popState event (back/forward browser buttons) ----- */
      localStorage.setItem('changedPage', true);
    },

    loadPage = function(href) {

      $main.wrapInner('<div class="new-results-div" />');

      /* ----- Set height of $main to ensure the footer doesn't jump up -----  */
      var newResultsHeight = $('.new-results-div').outerHeight();
      $main.height(newResultsHeight);

      $('html').velocity("scroll", {
        duration: 0,
        easing: "ease",
        mobileHA: false
      });
      $.ajax({
        type: 'GET',
        url: href,
        data: {},
        success: function(result) {
          /* ----- Where the new content is added ----- */
          var pageTitle = result.match(/<title>(.*?)<\/title>/);
          // var pageTitle = result.match(/<body>(.*?)<\/body>/);
          var targetHtml = $(result).find('#all-content-wrapper').html();
          $main.html(targetHtml);
          document.title = pageTitle[1];
          init();

          /* ----- Wrap content in div so we can get it's height ----- */
          $main.wrapInner('<div class="new-results-div" />');

          /* ----- Get height of new container inside results container and set $main to it so there's no content jumpage -----  */
          var newResultsHeight = $('.new-results-div').outerHeight();
          $main.height(newResultsHeight);

          /* ----- Bring In New Content ----- */
          $('#all-content-wrapper').velocity({ opacity: 1 }, {
            duration: 400,
            complete: function() {
              /* ----- Removes the temp height from $main ----- */
              $main.css('height', '');
              ajaxLoad();
            }
          });
          /* ------------- Close Menu Overlay ------------------ */
          var overlay_navigation = $('.overlay-navigation');
          $('.navigation-toggle').css('pointer-events', 'none');
          overlay_navigation.toggleClass('overlay-active');
          overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
          $('.navigation-toggle').css('pointer-events', 'none');
          $('#site-navigation ul li').velocity('transition.perspectiveRightOut', {
            stagger: 80,
            delay: 0,
            complete: function() {
              overlay_navigation.velocity('transition.fadeOut', {
                delay: 0,
                duration: 300,
                complete: function() {
                  $('#site-navigation ul li a').velocity({
                    opacity: [0, 1],
                  }, {
                    delay: 0,
                    duration: 50
                  });
                  $('.navigation-toggle').css('pointer-events', 'auto');
                }
              });
            }
          })
        },
        error: function() {
          console.log("error.");
          location.reload();
        }
      });
    };

  /* ----- This runs on the first page load with no ajax ----- */
  init();

  $(window).on("popstate", function(e) {
    console.log("Popstate and changedPage = " + localStorage.getItem('changedPage') + " in localStorage.");
    // -------------------------------------
    //   If there was an AJAX page transition already,
    //   then AJAX page load the requested page from the back or forwards button click.
    //   Variable initially set after the $main variable.
    // -------------------------------------
    if (localStorage.getItem('changedPage') == "true") { loadPage(location.href) };
  });

  $('.site-navigation-link').on('click', function(evt) {
    var href = $(this).attr("href");
    evt.preventDefault();
    evt.stopPropagation();
    history.pushState({}, '', href);
    loadPage(href);
    return false;
  });
});
