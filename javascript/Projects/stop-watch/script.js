let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopButton").innerHTML = "Start";
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStopButton").innerHTML = "Stop";
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById("startStopButton").innerHTML = "Start";
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const displayHours = hours < 10 ? "0" + hours : hours;
    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);
