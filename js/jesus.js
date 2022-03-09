let jesus;
let hovering = false;
let dead;

let gifPos = 0;
const gifSpeed = 110;
let actualGifSpeed = 110;

function loadJesus() {
    jesus = document.getElementById("jesus");

    jesus.src = "img/jesus/0.gif";

    jesus.addEventListener("mouseenter", jesusMouseEnter);
    jesus.addEventListener("mouseleave", jesusMouseLeave);
    jesus.addEventListener("mousedown", jesusMouseChangeSpeed);
};

async function jesusMove() {
    if (dead) return;

    while (hovering) {
        jesus.src = 'img/jesus/' + gifPos + '.gif';

        if (actualGifSpeed >= 0) gifPos += (gifPos < 33) ? 1 : -33;
        else gifPos += (gifPos > 0) ? -1 : 33;

        await timer(Math.abs(actualGifSpeed));
    }
}

function jesusMouseEnter() {
    if (dead) return;

    hovering = true;
    jesusMove();
}

function jesusMouseLeave() {
    if (dead) return;

    hovering = false;
}

let flip = false;
function jesusMouseChangeSpeed() {
    if (dead) return;
    actualGifSpeed -= 25;

    let contrast = parseInt(jesus.style.filter.substring(9, 12));
    contrast += Math.sign(actualGifSpeed) * 200 - 1.5 * actualGifSpeed;
    
    if (flip) {
        actualGifSpeed = gifSpeed;
        contrast = 85;
        flip = false;
    }

    if (actualGifSpeed <= -gifSpeed) {
        actualGifSpeed = -gifSpeed;
        contrast = 85;
        flip = true;
    }

    jesus.style.filter = "contrast(" + contrast + "%)";
}

function jesusDie() {
    hovering = false;
    dead = true;

    let audio = new Audio('audio/hitmarker.mp3');
    audio.play();
    hitmarker();   

    jesus.src = "img/jesus/jesus_muerto.png";
    jesus.style.filter = "contrast(85%)";

    jesus.style.transition = "transform 0.045s";
    jesus.style.transform = "rotate(-90deg)";
    
    jesus.style.width = "90px";
    jesus.style.top = "78%";
    jesus.style.left = "8%";


    
    jesus.setAttribute("dead", "");
    
}

async function hitmarker() {
    let hm = document.createElement("img");
    hm.src = "img/jesus/hitmarker.png";

    hm.style.zIndex = 13;
    hm.style.width = "35px";
    hm.style.left = "190px";
    hm.style.top = "660px";

    document.getElementById("frame").appendChild(hm);

    await timer(80);

    document.getElementById("frame").removeChild(hm);
}