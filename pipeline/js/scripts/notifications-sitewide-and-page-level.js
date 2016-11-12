$(document).ready(function() {
  $('.notification').each(function(note) {
    var noteId = $(this).attr('id');
    if (localStorage.getItem(noteId) === "true") {
      $(this).remove();
    } else {
      $(this).velocity({ opacity: 1 }, 700);
    }
  });
  $('.dont-show-again,.close-notification').on('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var thisClass = $(this).attr('class'),
      note = $(this).parent(),
      parentId = note.attr('id');
      console.log(note,parentId);
    if (thisClass.includes('dont-show-again')) {
      localStorage.setItem(parentId, "true");
    }
    note.velocity({opacity:0},400);
  });
});

////WITHOUT JQUERY

// var notifications = document.querySelectorAll('.notification');
// var closeNotifications = document.querySelectorAll('.close-notification');
// var dontShows = document.querySelectorAll('.dont-show-again');

// if (notifications) {
//   for (var i = 0; i < notifications.length; i++) {
//     var notifId = notifications[i].id;
//     if (localStorage.getItem(notifId) !== "true") {
//       Velocity(notifications[i], { opacity: 1 }, 1000);
//     } else {
//       notifications[i].remove();
//     }
//   }
//   for (var j = 0; j < closeNotifications.length; j++) {
//     closeNotifications[j].addEventListener('click', fadeOutNotification, false);
//     dontShows[j].addEventListener('click', dontShowMeAgain, false);
//   }
// }

// function fadeOutNotification(evt) {
//   evt.preventDefault();
//   evt.stopPropagation();
//   var notifyEl = evt.target.parentNode;
//   Velocity(notifyEl, { opacity: 0, translateY: "-100%", duration: 800 }, { complete: function() { notifyEl.remove(); } });
// }

// function dontShowMeAgain(evt) {
//   evt.preventDefault();
//   evt.stopPropagation();
//   var parent = evt.target.parentNode,
//     parentId = parent.id;
//   console.log(parentId);
//   localStorage.setItem(parentId, true);
//   Velocity(parent, { opacity: 0, translateY: "-100%", duration: 800 }, { complete: function() { parent.remove(); } });
// }
