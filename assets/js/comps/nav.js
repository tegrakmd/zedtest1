class NavBar extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise la logique existante
    let basePath = this.getAttribute("base-path");
    if (!basePath) {
      const path = window.location.pathname;
      basePath = path.includes("/src/") ? ".." : ".";
    }

    this.innerHTML = `
      <nav>
        <div class="nav_container">
          <div class="nav_wrapper">
            <a class="nav_logo" href="${basePath}/index.html">
              <img src="${basePath}/assets/images/icons/icon.png" alt="" />
            </a>
            <div class="nav_links">
           
              <a href="${basePath}/src/about.html" class="nav_link_item">À propos de nous</a>
              <a href="${basePath}/src/mission.html" class="nav_link_item">Mission</a>
              <a href="${basePath}/src/carriere.html" class="nav_link_item">Carrière</a>
              <a href="${basePath}/src/contact.html" class="nav_link_item">Contact</a>
            </div>
            <a class="nav_botton">
              <img src="${basePath}/assets/images/icons/menu.png" alt="" />
            </a>
            <a href="${basePath}/src/freelance.html" class="btn btn_left" data-splitting>Freelance</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
