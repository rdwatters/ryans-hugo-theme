//This toggles the documentation toc (sidebar); this is NOT the function/event for the blog post TOC
//
(function() {
  if (document.getElementById('toggle-documentation-toc')) {
    document.getElementById('toggle-documentation-toc').addEventListener('click', toggleDocs, false);
  }

  function toggleDocs(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var docsTocToggle = document.getElementById('toggle-documentation-toc');
    var docsMain = document.getElementById('main-documentation');
    document.querySelector('aside.documentation').classList.toggle('documentation-toc-open');
    docsTocToggle.classList.toggle('documentation-toc-open');
    docsMain.addEventListener('click', closeDocumentationToc, false);

    function closeDocumentationToc() {
      if (document.querySelector('aside.documentation.documentation-toc-open')) {
        document.querySelector('aside.documentation.documentation-toc-open').classList.remove('documentation-toc-open');
        docsTocToggle.classList.remove('documentation-toc-open');
      }
    }
  }
})();
