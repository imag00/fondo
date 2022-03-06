const timer = ms => new Promise(res => setTimeout(res, ms));
let jesus;
let hovering = false;

let gifPos = 0;
const gifSpeed = 200;
let actualGifSpeed = 200;

function loadJesus() {
    jesus = document.getElementById("jesus");

    jesus.src = "img/jesus/0.png";

    jesus.addEventListener("mouseenter", jesusMouseEnter);
    jesus.addEventListener("mouseleave", jesusMouseLeave);
    jesus.addEventListener("mousedown", jesusMouseChangeSpeed);
};

async function jesusMove() {
    while (hovering) {
        jesus.src = 'img/jesus/' + gifPos + '.png';

        if (actualGifSpeed >= 0) gifPos += (gifPos < 7) ? 1 : -7;
        else gifPos += (gifPos > 0) ? -1 : 7;

        await timer(Math.abs(actualGifSpeed));
    }
}

function jesusMouseEnter() {
    hovering = true;
    jesusMove();
}

function jesusMouseLeave() {
    hovering = false;
}

let flip = false;
function jesusMouseChangeSpeed() {
    actualGifSpeed -= 45;

    let contrast = parseInt(jesus.style.filter.substring(9, 12));
    contrast += Math.sign(actualGifSpeed) * 300 - 1.3 * actualGifSpeed;
    
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