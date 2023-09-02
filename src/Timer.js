import { Buttons } from "./Buttons.js";
import { Formatter } from "./Formatter.js";
import { Music } from "./Music.js";
import { Notifications } from "./Notifications.js";

const Timer = {
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
  text: document.querySelector("#text"),

  countdownInterval: null,

  setTimer(mins = "25", secs = "00", timerText = "Time to Focus!") {
    clearInterval(this.countdownInterval);
    this.countdownInterval = null;

    this.minutes.textContent = mins;
    this.seconds.textContent = secs;
    this.text.textContent = timerText;

    Formatter.formatTitle(mins, secs, text);

    Buttons.shortBrakeButton.classList.remove("active");
    Buttons.longBrakeButton.classList.remove("active");
    Buttons.buttonStart.classList.remove("active");

    buttonPause.style.display = "none";
  },

  initTimer() {
    let mins = this.minutes.textContent;
    let secs = this.seconds.textContent;

    if (secs == 0) {
      secs = 59;
      mins--;
    } else {
      secs--;
    }

    Formatter.formatTime(mins, secs);

    Formatter.formatTitle(mins, secs, text);
  },

  endTimer() {
    clearInterval(this.countdownInterval);
    Music.playAudio();
    Notifications.showNotification();

    buttonPause.style.display = "none";
    buttonStart.classList.remove("active");
    this.countdownInterval = null;

    text.textContent = "Your Timer is Done!";
  },

  start() {
    let mins = this.minutes.textContent;
    let secs = this.seconds.textContent;

    if (this.countdownInterval === null) {
      if (mins > 0 || secs > 0) {
        Music.playAudio();

        buttonPause.style.display = "block";
        buttonPause.classList.remove("active");
        buttonStart.classList.add("active");

        this.countdownInterval = setInterval(() => {
          let mins = this.minutes.textContent;
          let secs = this.seconds.textContent;
          mins == 0 && secs == 0 ? this.endTimer() : this.initTimer();
        }, 1000);
      } else {
        window.alert("Select a Timer");
      }
    }
  },

  pause() {
    clearInterval(this.countdownInterval);
    this.countdownInterval = null;
    buttonPause.classList.add("active");
    buttonStart.classList.remove("active");
  },
};

export { Timer };
