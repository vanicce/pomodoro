const Notifications = {
  requestPermission: async () => {
    await Notification.requestPermission();
  },

  showNotification: () => {
    new Notification("Pomodoro", {
      body: `Your Timer is Done!`,
      icon: "./imgs/clock.svg",
      vibrate: [200, 100, 200],
    });
  },
};

export { Notifications };
