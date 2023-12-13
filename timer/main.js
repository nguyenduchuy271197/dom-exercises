const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

const playBtnEl = document.getElementById("play-btn");

let timerId;
let counter = 0;

function play() {
  if (!playBtnEl.classList.contains("playing")) {
    timerId = setInterval(() => {
      counter++;
      displayCounter(counter);
    }, 1000);
  } else {
    if (timerId) {
      clearInterval(timerId);
    }
  }
  playBtnEl.classList.toggle("playing");
}

function reset() {
  counter = 0;
  displayCounter(counter);
  if (timerId) {
    clearInterval(timerId);
  }
  playBtnEl.classList.remove("playing");
}

function padZeros(num) {
  if (String(num).length > 1) {
    return String(num);
  } else {
    return "0" + num;
  }
}

function displayCounter(counter) {
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor(counter / 60);
  const seconds = Math.floor(counter % 60);

  hoursEL.textContent = padZeros(hours);
  minutesEL.textContent = padZeros(minutes);
  secondsEL.textContent = padZeros(seconds);
}
