//specific to /docs - used to toggle the notifications example
$('#show-sample-notification').on('click', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $('#this-is-a-page-level-notification').toggleClass('show-example-notification');
});
$('#docs-description').val('Here is a description of my article.');
