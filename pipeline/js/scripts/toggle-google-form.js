$('#open-google-form').on('click', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $('#google-form-wrapper').addClass('form-open');
});

$('#close-google-form').on('click', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $('#google-form-wrapper').removeClass('form-open');
});

$('#all-content-wrapper').on('click', function() {
  if ('#google-form-wrapper.form-open') {
    $('#google-form-wrapper').removeClass('form-open');
  }
});
