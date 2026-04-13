const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

const resetBtn = document.getElementById('resetBtn');

let intervalId = null;
let seconds = 0;

function formatTime(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


function updateDisplay() {
    timeDisplay.textContent = formatTime(seconds);
}


startBtn.addEventListener('click', () => {
    if (!intervalId) { 
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

resetBtn.addEventListener('click', ()=>{
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
    seconds = 0;
    updateDisplay();
});
updateDisplay();
