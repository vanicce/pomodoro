const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#closeModal");

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
    body: `Your Timer is Done!`,
    icon: "./imgs/clock.svg",
    vibrate: [200, 100, 200],
  });
};

document.title = `${minutes}:${seconds} | ${text}`;

const closeModal = () => {
  localStorage.setItem("hidden", "true");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
};

closeModalButton.addEventListener("click", closeModal);

const myClass = localStorage.getItem("hidden");
if (!myClass) {
  showModal = (() => {
    modal.classList.add("show");

    window.onclick = () => {
      closeModal();
    };
  })();
}

const playAudio = () => {
  let sound = new Audio("sounds/zeldasound.mp3");
  sound.play();
};

const setTimer = (mins, secs, timerText) => {
  clearInterval(countdownInterval);

  minutes.textContent = mins;
  seconds.textContent = secs;
  text.textContent = timerText;

  document.title = `${mins}:${secs} | ${timerText}`;

  pomodoroButton.classList.remove("active");
  shortBrakeButton.classList.remove("active");
  longBrakeButton.classList.remove("active");
  buttonStart.classList.remove("active");

  buttonStart.disabled = false;
  buttonPause.style.display = "none";
};

(pomodoro = () => {
  setTimer("25", "00", "Time to Focus!");
  pomodoroButton.classList.add("active");
})();

pomodoroButton.addEventListener("click", pomodoro);

const shortBrake = () => {
  setTimer("05", "00", "Time for a Brake!");
  shortBrakeButton.classList.add("active");
};

shortBrakeButton.addEventListener("click", shortBrake);

const longBrake = () => {
  setTimer("15", "00", "Time for a Brake!");
  longBrakeButton.classList.add("active");
};

longBrakeButton.addEventListener("click", longBrake);

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
  clearInterval(countdownInterval);
  playAudio();
  showNotification();
  buttonPause.style.display = "none";
  buttonStart.classList.remove("active");

  text.textContent = "Your Timer is Done!";

  document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}`;
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

buttonStart.addEventListener("click", start);

const pause = () => {
  clearInterval(countdownInterval);
  buttonPause.classList.add("active");
  buttonStart.classList.remove("active");
  buttonStart.disabled = false;
};

buttonPause.addEventListener("click", pause);
