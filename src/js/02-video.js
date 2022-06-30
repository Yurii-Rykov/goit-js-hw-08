import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const play = document.querySelector('#vimeo-player');

const player = new Player(play);
const TIME_LOCAL = 'videoplayer-current-time';

player.on('timeupdate', throttle((time) => {
    localStorage.setItem(TIME_LOCAL, time.seconds)
 console.log(time);   
}, 3000));

if (player) {
    player.setCurrentTime(localStorage.getItem(TIME_LOCAL))
}
