$('.audio-button.play').on('click', function(evt) {
  var audioId = $(this).attr('href').split('#')[1],
    self = $(this),
    audio = document.getElementById(audioId);
  if (self.hasClass('pause')) {
    self.removeClass('pause');
    audio.pause();
  } else {
    self.addClass('pause');
    audio.play();
  }
  console.log(audio.duration);
});

$('.audio-button.stop').on('click', function(evt) {
  var audioId = $(this).attr('href').split('#')[1],
    audio = document.getElementById(audioId);
  audio.stop();
});
