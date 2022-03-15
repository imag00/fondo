let perro;
let fuet;
let step = 5;
let hoveringFuet;

function loadPerro() {
    perro = document.getElementById("perro");
    fuet = document.getElementById("fuet");

    document.addEventListener("keydown", function (e) { perroArrows(e); });
    document.addEventListener("keyup", function (e) { perroArrowsUp(e); });

    perroMove();
}


let dir = [0, 0];

async function perroMove() {
    while (true) {
        await timer(13.33);

        if (perro.offsetTop <= -25)
            dir[0] = 0;

        if (perro.offsetTop >= 500)
            dir[1] = 0;

        let direction = dir[0] - dir[1];

        perro.style.top = perro.offsetTop - step * direction + "px";
        perro.style.left = perro.offsetLeft + step * direction + "px";

        if (direction == 1)
            perro.style.transform = "matrix(6.12323e-17, 1, 1, -6.12323e-17, 0, 0)";
        else if (direction == -1)
            perro.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    }

}

function perroArrows(e) {
    if (e.key == "ArrowUp" || e.key == "ArrowRight")
        dir[0] = 1;
    else if (e.key == "ArrowDown" || e.key == "ArrowLeft")
        dir[1] = 1;
}

function perroArrowsUp(e) {
    if (e.key == "ArrowUp" || e.key == "ArrowRight")
        dir[0] = 0;
    else if (e.key == "ArrowDown" || e.key == "ArrowLeft")
        dir[1] = 0;
}