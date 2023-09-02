const Modal = {
  render() {
    const modal = document.querySelector("#modal");

    modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>What is the Pomodoro Technique?</h3>
        <button>
          <img src="imgs/xx.png" alt="close modal" id="closeModal" />
        </button>
      </div>
      <p>
        The Pomodoro Technique was developed in the late 1980s by then
        university student Francesco Cirillo. Cirillo was struggling to
        focus on his studies and complete assignments. Feeling overwhelmed,
        he asked himself to commit to just 10 minutes of focused study time.
        Encouraged by the challenge, he found a tomato (pomodoro in Italian)
        shaped kitchen timer, and the Pomodoro technique was born.
      </p>
    </div>
    `;

    const closeModalButton = modal.querySelector("#closeModal");

    const hiddenModal = localStorage.getItem("hidden");

    const closeModal = () => {
      localStorage.setItem("hidden", "true");
      modal.remove();
    };

    closeModalButton.addEventListener("click", closeModal);

    (() => {
      if (!hiddenModal) {
        modal.classList.add("show");
      } else {
        modal.remove();
      }
    })();
  },
};

export { Modal };
