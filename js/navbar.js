function generateNavbar() {
    console.log(window.location.pathname);
    if(window.location.pathname=="/"){
        console.log("home");
        const navbar = `
        <footer class="footer mt-auto py-3 bg-body-tertiary fixed-bottom">
        <div class="container">
        <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded" style='font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;'>home</span></a></li>
            <li><a href="/favorite/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">favorite</span></a></li>
            <li><a href="/menu/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">menu</span></a></li>
        </ul>
        </div>
        </footer>
        <script type="module" src="/js/app.js"></script>`;
        document.body.insertAdjacentHTML('beforeend', navbar);
    }else if(window.location.pathname=="/favorite/"){
        const navbar = `
        <footer class="footer mt-auto py-3 bg-body-tertiary fixed-bottom">
        <div class="container">
        <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">home</span></a></li>
            <li><a href="/favorite/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded" style='font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;'>favorite</span></a></li>
            <li><a href="/menu/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">menu</span></a></li>
        </ul>
        </div>
        </footer>
        <script type="module" src="/js/app.js"></script>`;
        document.body.insertAdjacentHTML('beforeend', navbar);
    }else{
        const navbar = `
        <footer class="footer mt-auto py-3 bg-body-tertiary fixed-bottom">
        <div class="container">
        <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">home</span></a></li>
            <li><a href="/favorite/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">favorite</span></a></li>
            <li><a href="/menu/" class="nav-link px-2 link-secondary"><span class="material-symbols-rounded">menu</span></a></li>
        </ul>
        </div>
        </footer>
        <script type="module" src="/js/app.js"></script>`;
        document.body.insertAdjacentHTML('beforeend', navbar);
    }
}

generateNavbar();