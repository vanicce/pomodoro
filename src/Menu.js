const Menu = {
  render() {
    const menu = document.createElement("div");

    menu.classList.add("menu");

    menu.innerHTML = `
    <div class="menu-content">
      <div class="menu-header">
      <p>Themes:</p>
        <button id="close-menu">
          <div class="close"> </div>
        </button>
      </div>
      <div class="menu-body">
        <button id="pink-theme"> <p> Pink Theme:</p> <img src="../imgs/img-pink.png"></button>
        <button id="green-theme"> <p> Green Theme:</p> <img src="../imgs/img-project.png"></button>
      </div>
    </div>
    `;

    const closeMenu = menu.querySelector("#close-menu");

    closeMenu.addEventListener("click", () => {
      menu.remove();
    });

    const pinkTheme = menu.querySelector("#pink-theme");
    const greenTheme = menu.querySelector("#green-theme");

    pinkTheme.addEventListener("click", () => {
      document.body.classList.add("pink-theme");
      document.body.classList.remove("green-theme");
    });

    greenTheme.addEventListener("click", () => {
      document.body.classList.add("green-theme");
      document.body.classList.remove("pink-theme");
    });

    document.querySelector(".container").appendChild(menu);
  },
};

export { Menu };
