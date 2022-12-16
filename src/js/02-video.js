import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const PLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

if (getCurrentTimeValue()) {
  player.setCurrentTime(getCurrentTimeValue());
}

player.on('timeupdate', throttle(saveCurrentTimeValue, 1000));

function saveCurrentTimeValue(data) {
  localStorage.setItem(PLAYER_CURRENT_TIME_KEY, data.seconds);
}

function getCurrentTimeValue() {
  return localStorage.getItem(PLAYER_CURRENT_TIME_KEY);
}
