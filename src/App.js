import { Timer } from "./Timer.js";
import { Buttons } from "./Buttons.js";
import { Modal } from "./Modal.js";
import { TextPomodoro } from "./TextPomodoro.js";

const App = {
  async start() {
    Modal.render(),
      Timer.setTimer(),
      Buttons.addEventListeners(),
      TextPomodoro.render();
  },
};

export { App };
