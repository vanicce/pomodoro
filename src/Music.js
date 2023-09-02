const Music = {
  music: new Audio("../sounds/fairyfountain.mp3"),
  sound: new Audio("../sounds/zeldasound.mp3"),

  playMusic: () => {
    Music.music.play();
    Music.music.volume = 0.04;
    Music.music.loop = true;
  },

  playAudio: () => {
    Music.sound.play();
    Music.sound.volume = 0.3;
  },
};

export { Music };
