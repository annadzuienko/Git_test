let replay = document.getElementById('replay');
let blockReplay = document.getElementById('feedback__user-replay');

replay.onclick = function() {
  blockReplay.setAttribute('class', 'visible');
};