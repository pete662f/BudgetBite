export function generateMenu(){
    console.log("Menu loaded");
    const currentPage = window.location.pathname;
    const isActive = (path) => (currentPage === path ? "active bg-info" : "link-body-emphasis");
    const menu = `
    <div tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary offcanvas offcanvas-start" style="width: 280px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Menu</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="/" class="nav-link ${isActive("/")}" aria-current="page">
            Hjem
          </a>
        </li>
        <li style="height: 40px;">
          <a href="/favorite/" class="nav-link ${isActive("/favorite/")}">
            <div class="row">
              <div class="col-3">Gemte</div>
              <div class="col-2"><span class="material-symbols-rounded" style='font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;'>favorite</span></div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link ${isActive("/kontakt/")}">
            Kontakt os
          </a>
        </li>
        <li>
          <a href="#" class="nav-link ${isActive("/om-os/")}">
            Om os
          </a>
        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu text-small shadow">
          <li><a class="dropdown-item" href="#">Indstillinger</a></li>
          <li><a class="dropdown-item" href="#">Profil</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Log ud</a></li>
        </ul>
      </div>
  </div>`;

    document.body.insertAdjacentHTML('afterbegin', menu);
}