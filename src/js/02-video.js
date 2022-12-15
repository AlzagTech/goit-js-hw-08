import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const PLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('play', function () {
  player.setCurrentTime(getCurrentTimeValue());
});

player.on('timeupdate', saveCurrentTimeValue);

function saveCurrentTimeValue(data) {
  localStorage.setItem(PLAYER_CURRENT_TIME_KEY, data.seconds);
}

function getCurrentTimeValue() {
  return localStorage.getItem(PLAYER_CURRENT_TIME_KEY);
}
