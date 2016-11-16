(function() {
  var editBoxes = qsa('.edit-page');
  if (!editBoxes) {
    return;
  } else {
    document.onkeydown = openGhEdit;
  }

  function openGhEdit(e) {
    var evtobj = window.event ? event : e
    if (evtobj.keyCode == 69 && evtobj.ctrlKey) {
      showEditOption();
    }
  }

  function showEditOption() {
    if (document.body.classList.contains('edit-open')) {
      $('.edit-page').velocity('fadeOut');
      document.body.classList.remove('edit-open');
    } else {
      $('.edit-page').velocity('fadeIn');
      document.body.classList.add('edit-open');
    }
  }
})();
