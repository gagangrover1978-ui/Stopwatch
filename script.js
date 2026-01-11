const display = document.querySelector('h1');

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let total_seconds = 0;
let interval = null;

function increment() {
    total_seconds++;
    let hours = Math.trunc(total_seconds/3600).toString().padStart(2, "0");
    let minutes = Math.trunc((total_seconds - hours * 3600)/60).toString().padStart(2, "0");
    let seconds = total_seconds % 60;
    display.innerHTML = `${hours} : ${minutes} : ${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (interval) return;

    interval = setInterval(increment, 1000)
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval)
    interval = null;
    total_seconds = 0;
    display.innerHTML = "00 : 00 : 00";
}

startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;
