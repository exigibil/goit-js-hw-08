import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';



const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Vimeo.Player(document.getElementById('vimeo-player'));

const savePlaybackTime = (time) => {
    localStorage.setItem('videoplayer-current-time', time);
};

const handleTimeUpdate = throttle((data) => {
    const currentTime = data.seconds;
    savePlaybackTime(currentTime);
}, 1000);

player.on('timeupdate', handleTimeUpdate);

const setPlaybackTimeFromStorage = () => {
    const storedTime = localStorage.getItem('videoplayer-current-time')
    if (storedTime !== null) {
        const currentTime = parseFloat(storedTime);
    }
};

player.ready().then(() => {
    setPlaybackTimeFromStorage();
})