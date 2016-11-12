//this script looks for any images in content that start with "images/". Since all images are kept at the root in the assets folder, any images added in markdown with incomplete src urls (eg, ![My image](images/my-image.jpg)) will otherwise break. This IIFE is run at page load to control for human error when inputing images in a content file.

(function() {
  var allImgs = qsa('img');
  for (var i = 0; i < allImgs.length; i++) {
    var img = allImgs[i];
    var src = img.getAttribute('src');
    if (src.startsWith('images/')) {
      var newsrc = src.replace('images/', '/assets/images/');
      img.setAttribute('src', newsrc);
    }
  }
})();
