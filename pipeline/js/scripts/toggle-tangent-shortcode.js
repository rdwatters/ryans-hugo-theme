//slide toggles in-body tangent boxes

$('.tangent-heading').on('click', function() {
  var sib = $(this).next();
  var icon = $(this).find('.icon-next');
  if (sib.hasClass('open')) {
    sib.velocity('slideUp', 400);
    sib.removeClass('open');
    icon.removeClass('open');
  } else {
    sib.velocity('slideDown', 400);
    sib.addClass('open');
    icon.addClass('open');
  }
});