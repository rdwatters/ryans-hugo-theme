(function() {
  var allIFrames = document.getElementsByTagName('iframe');
  if (allIFrames.length > 0) {
    for (var i = 0; i < allIFrames.length; i++) {
      var src = allIFrames[i].getAttribute('src');
      if ((src != null) && (src.startsWith('https://www.google.com/maps/embed'))) {
        var iF = allIFrames[i],
          wrap = document.createElement('div');
        wrap.className = "iframe-wrapper";
        iF.parentNode.insertBefore(wrap, iF);
        wrap.appendChild(iF);
      }
    }
  }
})();
