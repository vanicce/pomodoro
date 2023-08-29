const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#closeModal");

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const buttonStart = document.querySelector("#buttonStart");
const buttonPause = document.querySelector("#buttonPause");
const buttonDots = document.querySelector("#btndots");

const text = document.querySelector("#text");

const pomodoroButton = document.querySelector("#pomodoro");
const shortBrakeButton = document.querySelector("#shortBrake");
const longBrakeButton = document.querySelector("#longBrake");

const playBtn = document.querySelector("#playbtn");
const pauseBtn = document.querySelector("#pausebtn");

let countdownInterval = null;

(async () => await Notification.requestPermission())();

const showNotification = () => {
  new Notification("Pomodoro", {
    body: `Your Timer is Done!`,
    icon: "./imgs/clock.svg",
    vibrate: [200, 100, 200],
  });
};

document.title = `${minutes}:${seconds} | ${text}`;

const formatTitle = (mins, secs, text) => {
  text = text.textContent;
  mins = minutes.textContent;
  secs = seconds.textContent;
  document.title = `${mins}:${secs} | ${text}`;
};

const hiddenModal = localStorage.getItem("hidden");
if (!hiddenModal) {
  modal.classList.add("show");
}

const closeModal = () => {
  localStorage.setItem("hidden", "true");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
};

closeModalButton.addEventListener("click", closeModal);

let music = new Audio("sounds/fairyfountain.mp3");

const playMusic = () => {
  music.play();
  music.volume = 0.04;
  music.loop = true;
};

const playAudio = () => {
  let sound = new Audio("sounds/zeldasound.mp3");
  sound.play();
  sound.volume = 0.3;
};

playBtn.addEventListener("click", () => {
  playMusic();
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
});

pauseBtn.addEventListener("click", () => {
  music.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
});

const setTimer = (mins, secs, timerText) => {
  clearInterval(countdownInterval);
  countdownInterval = null;

  minutes.textContent = mins;
  seconds.textContent = secs;
  text.textContent = timerText;

  formatTitle(mins, secs, text);

  pomodoroButton.classList.remove("active");
  shortBrakeButton.classList.remove("active");
  longBrakeButton.classList.remove("active");
  buttonStart.classList.remove("active");

  buttonPause.style.display = "none";
};

(pomodoro = () => {
  setTimer("25", "00", "Time to Focus!");
  pomodoroButton.classList.add("active");
})();

pomodoroButton.addEventListener("click", pomodoro);

const shortBrake = () => {
  setTimer("00", "05", "Time for a Brake!");
  shortBrakeButton.classList.add("active");
};

shortBrakeButton.addEventListener("click", shortBrake);

const longBrake = () => {
  setTimer("15", "00", "Time for a Brake!");
  longBrakeButton.classList.add("active");
};

longBrakeButton.addEventListener("click", longBrake);

const formatTime = (mins, secs) => {
  seconds.textContent = secs.toString().padStart(2, "0");
  minutes.textContent = mins.toString().padStart(2, "0");
};

const initTimer = () => {
  if (secs == 0) {
    secs = 59;
    mins--;
  } else {
    secs--;
  }

  formatTime(mins, secs);

  formatTitle(mins, secs, text);
};

const endTimer = () => {
  clearInterval(countdownInterval);
  playAudio();
  showNotification();

  buttonPause.style.display = "none";
  buttonStart.classList.remove("active");
  countdownInterval = null;

  text.textContent = "Your Timer is Done!";
};

const start = () => {
  if (countdownInterval === null) {
    mins = minutes.textContent;
    secs = seconds.textContent;

    if (mins > 0 || secs > 0) {
      playAudio();

      buttonPause.style.display = "block";
      buttonPause.classList.remove("active");
      buttonStart.classList.add("active");

      countdownInterval = setInterval(() => {
        mins == 0 && secs == 0 ? endTimer() : initTimer();
      }, 1000);
    } else {
      window.alert('Select a Timer')
    }
  }
};

buttonStart.addEventListener("click", start);

const pause = () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
  buttonPause.classList.add("active");
  buttonStart.classList.remove("active");
};

buttonPause.addEventListener("click", pause);
