const Formatter = {
  formatTitle: (mins, secs, text) => {
    text = text.textContent;
    mins = minutes.textContent;
    secs = seconds.textContent;
    document.title = `${mins}:${secs} | ${text}`;
  },

  formatTime: (mins, secs) => {
    seconds.textContent = secs.toString().padStart(2, "0");
    minutes.textContent = mins.toString().padStart(2, "0");
  },
};

export { Formatter };
