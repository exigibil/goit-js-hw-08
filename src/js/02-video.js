import Player from '@vimeo/player';
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';



const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer);
const key = 'videoplayer-current-time'
const fixtime = localStorage.getItem(key);


player.on('timeupdate', throttle(time => localStorage.setItem(key, time.seconds), 1000, {
    leading: false,
}));

if (fixtime != null) {
    player.setCurrentTime(+fixtime);
}
