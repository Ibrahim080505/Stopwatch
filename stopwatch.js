let hours = 0, minutes = 0, seconds = 0;
let timer;
let running = false;

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = 
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = ""; 
}

function lap() {
  if (running) {
    const laps = document.getElementById("laps");
    const lapTime = document.createElement("div");
    lapTime.innerText = `COUNT: ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    laps.appendChild(lapTime);
  }
}
updateDisplay();
