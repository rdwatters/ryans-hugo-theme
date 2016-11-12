var allLinks = document.querySelectorAll('a');
var thisHost = window.location.hostname;
for (var i = 0; i < allLinks.length; i++) {
  var hr = allLinks[i].href;
  if (!hr.includes(thisHost) && !hr.includes('mailto')) {
    allLinks[i].setAttribute('target', '_blank');
  } else if (hr.includes('mailto')) {
    allLinks[i].setAttribute('target', '');
  }
}
