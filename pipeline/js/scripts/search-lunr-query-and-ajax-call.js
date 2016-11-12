//NOTE: Does NOT require jQuery
//
(function() {

})();
var searchData;
// Check for separate results div for desktop (may be needed for styling purposes)
var hasSepDesktop = byId('search-results-desktop') ? true : false;
var searchInput = byId('search-input');
searchInput.addEventListener('keyup', function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
  } else {
    lunrSearch();
  }
}, false);
window.index = lunr(function() {
  this.field('id');
  this.field('url');
  this.field('title', { boost: 50 });
  this.field('subtitle');
  this.field('description');
  this.field('tags', { boost: 30 });
  this.field('content', { boost: 10 });
});
var indexPath = "/assets/site-index.json";
var searchReq = new XMLHttpRequest();
searchReq.open('GET', indexPath, true);
searchReq.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    console.log("Site Index Loaded: " + indexPath);
    searchData = JSON.parse(this.response);
    searchData.forEach(function(obj, index) {
      obj['id'] = index;
      window.index.add(obj);
    });
  } else {
    console.log("Failed status for site-index.js. Check /static/js and GitHub wiki for troubleshooting.");
  }
}
searchReq.onerror = function() {
  console.log("Error when attempting to load site-index.json.");
}
searchReq.send();

function lunrSearch() {
  var query = byId("search-input").value;
  var searchResults;
  if (window.outerWidth < 960) {
    searchResults = byId('search-results');
  } else if (hasSepDesktop) {
    searchResults = byId('search-results-desktop');
  }
  localStorage.setItem('search_query', query);
  if (query.length < 3) {
    searchResults.innerHTML = '';
    qs('.search-results-wrapper-desktop').style.height = "0px";
  }
  if (query.length > 2) {
    var matches = window.index.search(query);
    qs('.search-results-wrapper-desktop').style.height = "300px";
    displayResults(matches);
  }
}

function displayResults(results) {
  //grab search results list
  var searchResults,
    tally = byId('search-results-tally');
  if (window.outerWidth < 960) {
    searchResults = byId('search-results');
  } else if (hasSepDesktop) {
    searchResults = byId('search-results-desktop');
  }
  var inputVal = byId('search-input').value;
  if (results.length) {
    tally.style.display = "block";
    if(results.length > 1){
      tally.innerHTML = results.length + " results found for <span class=\"tally\">" + inputVal + "</span>";
    }else {
      tally.innerHTML = results.length + " result found for <span class=\"tally\">" + inputVal + "</span>";
    }
    searchResults.innerHTML = '';
    results.forEach(function(result) {
      var item = window.searchData[result.ref],
        docTest = new RegExp('docsample'),
        resultLink = item.url,
        section = item.section,
        sectionDash = item.section.split(' ').join('-').toLowerCase(),
        sectionDiv = '<div class=\"search-result-site-section\"><i class=\"icon-' + sectionDash + '\"></i>In: ' + section + '</div>',
        appendString = '<li class=\"search-result\"><h4 class=\"search-result-title\"><a data-linktype=\"search-result\"class=\"search-result-link\"href=\"' + resultLink + '\">' + item.title + '</a></h4><p class=\"search-result-description\">' + item.description + '</p>' + sectionDiv + '</li>';
      searchResults.innerHTML += appendString;
    })
    if (hasSepDesktop) {
      var resEl = qs('.search-results-wrapper-desktop'),
        resHeight = byId('search-results-desktop').scrollHeight,
        resWrap = qs('.search-results-wrapper-desktop-inner'),
        //resWrapHeight = 300px according to original styling
        resWrapHeight = resWrap.clientHeight,
        //accounts for white space from styling of search results list on desktop search results
        resWrapCalcHeight = (resWrap.scrollHeight * .7),
        scrollResIcon = byId('scroll-down-icon');
      if (resHeight > resWrapHeight) {
        scrollResIcon.style.display = "block";
        resWrap.onscroll = function() {
          if (resWrap.scrollTop > resWrapCalcHeight) {
            scrollResIcon.style.display = "none";
          } else {
            scrollResIcon.style.display = "block";
          }
        }
      } else {
        scrollResIcon.style.display = "none";
      }
    }
  } else {
    searchResults.innerHTML = '<li class=\"search-result\"><p class=\"search-result-description no-match\">No results found for <span class=\"input-value\">' + inputVal + '</span>.<br>Please check spelling and spacing.</p></li>';
    byId('scroll-down-icon').style.display = "none";
    byId('search-results-tally').style.display = "none";
  }
}
