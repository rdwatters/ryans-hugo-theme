(function() {
  checkHash();
  window.addEventListener('popstate', function() {
    checkHash();
  });
  var allMemberLinks = document.querySelectorAll('.team-member-link');
  var allCloseMemberLinks = document.querySelectorAll('.close-team-detail');
  for (var i = 0; i < allMemberLinks.length; i++) {
    allMemberLinks[i].addEventListener('click', openMemberDetails, true);
  }
  for (var i = 0; i < allCloseMemberLinks.length; i++) {
    allCloseMemberLinks[i].addEventListener('click', closeDetailSelected, true);
  }

  function openMemberDetails(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var target = evt.target,
      detailId,
      hash;
    if (target.className === "team-member-list-info") {
      hash = target.parentNode.getAttribute('href');
    } else if (target.className !== "team-member-link") {
      hash = target.parentNode.parentNode.getAttribute('href');
    } else {
      hash = target.getAttribute('href');
    }
    detailId = hash.split('#')[1];
    document.getElementById(detailId).classList.add('team-member-detail-open');
    window.location.hash = hash;
  }

  function closeDetailSelected(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var target = evt.target,
      el;
    if (target.className !== "close-team-detail") {
      el = target.parentNode.parentNode.parentNode;
    } else {
      el = target.parentNode.parentNode;
    }
    closeDetail(el);
    window.location.hash = "";
  }

  function checkHash() {
    var hash = window.location.hash;
    var allDetails = document.querySelectorAll('.team-member-detail');
    if (hash.length > 1) {
      var elId = hash.split('#')[1],
        el = document.getElementById(elId);
      openDetail(el);
    } else {
      for (var i = 0; i < allDetails.length; i++) {
        var theDetail = allDetails[i];
        if (theDetail.classList.contains('team-member-detail-open')) {
          theDetail.classList.remove('team-member-detail-open');
        }
      }
    }
  }

  function openDetail(el) {
    el.classList.add('team-member-detail-open');
  }

  function closeDetail(el) {
    el.classList.remove('team-member-detail-open');
  }
})();
