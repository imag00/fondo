const timer = ms => new Promise(res => setTimeout(res, ms));
var jesus;
var hovering = false;

var gifPos = 0;
const gifSpeed = 200;
var actualGifSpeed = 200;

window.onload = function () {
    jesus = document.getElementById("jesus");

    jesus.src = "img/jesus/0.png";

    jesus.addEventListener("mouseenter", jesusMouseEnter);
    jesus.addEventListener("mouseleave", jesusMouseLeave);
    jesus.addEventListener("mousedown", jesusMouseChangeSpeed);
};

async function jesusMove() {
    while (hovering) {
        jesus.src = 'img/jesus/' + gifPos + '.png';
        gifPos += (gifPos < 7) ? 1 : -7;
        await timer(actualGifSpeed);
    }
}

function jesusMouseEnter() {
    hovering = true;
    jesusMove();
}

function jesusMouseLeave() {
    hovering = false;
}

function jesusMouseChangeSpeed() {
    actualGifSpeed -= 45;

    var contrast = parseInt(jesus.style.filter.substring(9, 12));
    contrast += 250 - 1.3 * actualGifSpeed;

    jesus.style.filter = "contrast(" + contrast + "%)";

    if (actualGifSpeed <= 0) {
        actualGifSpeed = gifSpeed;
        jesus.style.filter = "contrast(85%)";
    }

}