let tiburon;
let mano;

function loadTiburon() {
    tiburon = document.getElementById("img_tiburon");
    mano = document.getElementById("img_mano");

    tiburon.addEventListener("mouseenter", showGun);
    tiburon.addEventListener("mouseleave", hideGun);
    tiburon.addEventListener("click", fireGun);
}

function showGun() {
    mano.style.left = "818px";
}

function hideGun() {
    mano.style.left = "905px";
}

let disparable = true;
function fireGun() {
    if (!disparable) return;
    disparable = false;

    fireAnim();
    spawnBullet();
    moveBullet();
}

async function fireAnim() {
    await timer(1);
    mano.src = "img/tiburon/mano_disparo.png";
    mano.style.transition = "0.012s";

    mano.style.transform = "rotate(20deg)";
    mano.style.left = "835px";
    mano.style.top = "632px";

    await timer(30);

    mano.style.transform = "";
    mano.style.left = "818px";
    mano.style.top = "660px";
    mano.style.transition = "0.25s";

    await timer(30);
    mano.src = "img/tiburon/mano.png";
    await timer(150);
    mano.style.transition = "left 0.3s";
    disparable = true;
}

function spawnBullet() {
    let bullet = document.createElement("img");
    bullet.id = "bullet";
    bullet.src = "img/tiburon/bala.png";
    bullet.style.zIndex = 13;
    bullet.style.left = "860px";
    bullet.style.top = "680px";

    document.getElementById("frame").appendChild(bullet);
}

async function moveBullet() {
    let bullet = document.getElementById("bullet");

    let jesus = document.getElementById("jesus");
    let active = true;

    while(active) {
        bullet.style.left = bullet.offsetLeft - 50 + "px";
        await timer(13);

        if(bullet.offsetLeft < 230 && !jesus.hasAttribute("dead")) {
            active = false;
            jesusDie();
        }
        
        if(bullet.offsetLeft < -20) active = false;
    }

    document.getElementById("frame").removeChild(bullet);
}