let tiburon;
let mano;

function loadTiburon() {
    tiburon = document.getElementById("img_tiburon");
    mano = document.getElementById("img_mano");

    tiburon.addEventListener("mouseenter", showGun);
    tiburon.addEventListener("mouseleave", hideGun);
}

function showGun() {
    mano.style.left = "873px";
}

function hideGun() {
    mano.style.left = "960px";
}