let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let ms = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', function () {
    startTimer();
    this.classList.add('active');
    setTimeout(() => this.classList.remove('active'), 100);
});

stopBtn.addEventListener('click', function () {
    stopTimer();
    this.classList.add('active');
    setTimeout(() => this.classList.remove('active'), 100);
});

resetBtn.addEventListener('click', function () {
    resetTimer();
    this.classList.add('active');
    setTimeout(() => this.classList.remove('active'), 100);
});

// Initial display
updateDisplay();
