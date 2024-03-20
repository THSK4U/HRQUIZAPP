function showAdvertisement() {
    const advertisement = document.getElementById('advertisement');
    advertisement.style.display = 'block';
}

window.onload = function() {
    const timeToDisplay = 1000; // 840000 = 14min
    setTimeout(showAdvertisement, timeToDisplay);
};

const startMinutes = 15;
let time = startMinutes * 60;

const down = document.getElementById('timer');

setInterval(updateCounterDown, 1000);

function updateCounterDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
 
    seconds = seconds < 10 ? "0"+ seconds : seconds;

    down.innerHTML = `${minutes}:${seconds}`;
    time--;
}

