let tiburon;
let juan;
let mano;

function loadTiburon() {
    tiburon = document.getElementById("img_tiburon");
    juan = document.getElementById("juan");
    mano = document.getElementById("img_mano");

    tiburon.addEventListener("mouseenter", showGun);
    tiburon.addEventListener("mouseleave", hideGun);
    tiburon.addEventListener("click", fireGun);
    juan.addEventListener("mouseenter", showJuan);
    juan.addEventListener("mouseleave", hideJuan);
    juan_screen.addEventListener("transitionend", function() { 
        if(window.getComputedStyle(juan_screen).getPropertyValue("opacity") == 0)
            document.getElementById("frame").removeChild(juan_screen);           
    });
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
    fireSound();
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
    await timer(170);
    mano.style.transition = "left 0.3s";
    disparable = true;
}

function fireSound() {
    let audio = new Audio('audio/gun.mp3');
    audio.play();
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

    while (active) {
        bullet.style.left = bullet.offsetLeft - 55 + "px";
        await timer(13.33);

        if (bullet.offsetLeft < 230 && !jesus.hasAttribute("dead")) {
            active = false;
            jesusDie();
        }

        if (bullet.offsetLeft < -20) active = false;
    }

    document.getElementById("frame").removeChild(bullet);
}



/* JUAN. */

var juanHover = false;

let juan_screen = document.createElement("img");
juan_screen.id = "juan_screen";
juan_screen.src = "img/tiburon/juan_screen.png";
juan_screen.style.zIndex = 999999999;
juan_screen.style.opacity = "0%";


function showJuan() {
    document.getElementById("juan_text").style.opacity = "100%";


    this.timeout = window.setTimeout(async function () {
        if (!document.contains(juan_screen))
            document.getElementById("frame").appendChild(juan_screen);

        await timer(13.33);
        
        juan_screen.style.transition = "opacity 6.5s";
        juan_screen.style.opacity = "100%";       
    }, 2000);
}

function hideJuan() {
    document.getElementById("juan_text").style.opacity = "0%";
    juan_screen.style.transition = "opacity 1s";
    juan_screen.style.opacity = "0%";
    if (this.timeout) window.clearTimeout(this.timeout);
}