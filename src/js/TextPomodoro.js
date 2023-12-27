const TextPomodoro = {
  render() {
    const pomodoro = document.querySelector(".pomodoro");
    const pomodoroText = document.createElement("p");
    pomodoroText.classList.add("pomodoro-text");

    let horas = "00";
    let minutos = "00";

    setInterval(() => {
      if (minutos >= 59) {
        minutos = 0;
        horas++;
      } else {
        minutos++;
      }

      minutos = minutos.toString().padStart(2, "0");
      horas = horas.toString().padStart(2, "0");

      pomodoroText.innerHTML = `
        you are in focus for: ${horas}:${minutos}
      `;

      pomodoro.prepend(pomodoroText);
    }, 1000 * 60);
  },
};

export { TextPomodoro };
