import { Timer } from "./Timer.js";
import { Music } from "./Music.js";
import { Menu } from "./Menu.js";

const Buttons = {
  buttonStart: document.querySelector("#buttonStart"),
  buttonPause: document.querySelector("#buttonPause"),
  buttonDots: document.querySelector("#btndots"),

  pomodoroButton: document.querySelector("#pomodoro"),
  shortBrakeButton: document.querySelector("#shortBrake"),
  longBrakeButton: document.querySelector("#longBrake"),

  btnMusic: document.querySelector(".button"),

  toggleTheme() {
    document.body.classList.toggle("pink-theme");
  },

  showMenu() {
    Menu.render();
  },

  clickMusic() {
    this.btnMusic.classList.toggle("paused");
    this.btnMusic.classList.contains("paused")
      ? Music.playMusic()
      : Music.music.pause();
  },

  start() {
    Timer.start();
  },

  pause() {
    Timer.pause();
  },

  pomodoro() {
    Timer.setTimer("25", "00", "Time to Focus!");
    this.pomodoroButton.classList.add("active");
  },

  shortBrake() {
    Timer.setTimer("05", "00", "Time for a Brake!");
    this.shortBrakeButton.classList.add("active");
    Buttons.pomodoroButton.classList.remove("active");
  },

  longBrake() {
    Timer.setTimer("15", "00", "Time for a Brake!");
    this.longBrakeButton.classList.add("active");
    Buttons.pomodoroButton.classList.remove("active");
  },

  addEventListeners() {
    this.buttonDots.addEventListener("click", this.showMenu.bind(this));
    this.btnMusic.addEventListener("click", this.clickMusic.bind(this));
    this.buttonStart.addEventListener("click", this.start.bind(this));
    this.buttonPause.addEventListener("click", this.pause.bind(this));
    this.pomodoroButton.addEventListener("click", this.pomodoro.bind(this));
    this.shortBrakeButton.addEventListener("click", this.shortBrake.bind(this));
    this.longBrakeButton.addEventListener("click", this.longBrake.bind(this));
  },
};

export { Buttons };
