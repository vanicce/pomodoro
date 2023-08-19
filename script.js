const modal = document.querySelector("#modal");

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const buttonStart = document.querySelector("#buttonStart");
const buttonPause = document.querySelector("#buttonPause");

const text = document.querySelector("#text");

const pomodoroButton = document.querySelector("#pomodoro");
const shortBrakeButton = document.querySelector("#shortBrake");
const longBrakeButton = document.querySelector("#longBrake");

let countdownInterval;

(async () => await Notification.requestPermission())();

const showNotification = () => {
  new Notification("Pomodoro", {
    body: `Your Timer is Done`,
    icon: "./imgs/clock.svg",
    vibrate: true,
  });
};

document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}`;

const closeModal = () => {
  localStorage.setItem("class", "hidden");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
};

window = (() => {
  const myClass = localStorage.getItem("class");
  if (!myClass) {
    modal.classList.add("show");

    window.onclick = (event) => {
      closeModal();
    };
  }
})();

const playAudio = () => {
  let sound = new Audio("sounds/zeldasound.mp3");
  sound.play();
};

const setTimer = (mins = "25", secs = "00", timerText = "Time to Focus!") => {
  clearInterval(countdownInterval);
  minutes.textContent = mins;
  seconds.textContent = secs;
  text.textContent = timerText;
  document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}`;
  buttonPause.style.display = "none";
  pomodoroButton.classList.add("active");
  shortBrakeButton.classList.remove("active");
  longBrakeButton.classList.remove("active");
  buttonStart.classList.remove("active");
  buttonStart.disabled = false;
};

setTimer();

const pomodoro = () => {
  setTimer("25", "00", "Time to Focus!");
  pomodoroButton.classList.add("active");
};

const shortBrake = () => {
  setTimer("05", "00", "Time for a Brake!");
  pomodoroButton.classList.remove("active");
  shortBrakeButton.classList.add("active");
};

const longBrake = () => {
  setTimer("15", "00", "Time for a Brake!");
  pomodoroButton.classList.remove("active");
  longBrakeButton.classList.add("active");
};

const initTimer = () => {
  if (secs === 0) {
    secs = 59;
    mins--;
  } else {
    secs--;
  }

  seconds.textContent = secs.toString().padStart(2, "0");
  minutes.textContent = mins.toString().padStart(2, "0");

  document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}`;
};

const endTimer = () => {
  playAudio();
  clearInterval(countdownInterval);
  buttonPause.style.display = "none";
  buttonStart.classList.remove("active");
  showNotification();
};

const start = () => {
  playAudio();

  buttonPause.style.display = "block";
  buttonPause.classList.remove("active");
  buttonStart.classList.add("active");
  buttonStart.disabled = true;

  mins = parseInt(minutes.textContent);
  secs = parseInt(seconds.textContent);

  countdownInterval = setInterval(() => {
    mins === 0 && secs === 0 ? endTimer() : initTimer();
  }, 1000);
};

const pause = () => {
  clearInterval(countdownInterval);
  buttonPause.classList.add("active");
  buttonStart.classList.remove("active");
  buttonStart.disabled = false;
};
