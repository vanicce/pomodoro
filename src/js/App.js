import { Timer } from "./Timer.js";
import { Buttons } from "./Buttons.js";
import { Modal } from "./Modal.js";
import { TextPomodoro } from "./TextPomodoro.js";
<<<<<<< HEAD:src/js/App.js
=======
import { Notifications } from "./Notifications.js";
>>>>>>> 4f1841cc953d8623c0253a89be688d1d376e4669:src/App.js

const App = {
  async start() {
    Modal.render(),
      Timer.setTimer(),
      Buttons.addEventListeners(),
      TextPomodoro.render();
      Notifications.requestPermission()
  },
};

export { App };
