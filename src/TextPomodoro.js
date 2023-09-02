const TextPomodoro = {
  render() {
    const pomodoroText = document.querySelector(".pomodoro-text");

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
            you are in focus by: ${horas}:${minutos}
        `;
    }, 1000 * 60);
  },
};

export { TextPomodoro };
