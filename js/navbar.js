import { generateMenu } from "./menu.js";

function generateNavbar() {
    console.log("Navbar loaded");
    const currentPage = window.location.pathname;
    const activeStyle = 'font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;';
    const isActive = (path) => (currentPage === path ? activeStyle : "");

    const navbar = `
      <footer class="footer mt-auto py-3 bg-body-tertiary fixed-bottom">
        <div class="container">
          <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded" style='${isActive("/")}'>home</span></a></li>
            <li><a href="/favorite/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded" style='${isActive("/favorite/")}'>favorite</span></a></li>
            <li><a class="nav-link px-2 link-secondary" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas"><span class="material-symbols-rounded" style='${isActive("/menu/")}'>menu</span></a></li>
          </ul>
        </div>
      </footer>
      <script type="module" src="/js/app.js"></script>
    `;
  
    document.body.insertAdjacentHTML('beforeend', navbar);
  }
  generateMenu();
  generateNavbar();
  