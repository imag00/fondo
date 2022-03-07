let perro;
let fuet;
let step = 7;
let hoveringFuet;

function loadPerro() {
    perro = document.getElementById("perro");
    fuet = document.getElementById("fuet");

    fuet.addEventListener("wheel", function (e) { movePerroWheel(e); });

    //fuet.addEventListener("mouseenter", function () { hoveringFuet = true; });
    //fuet.addEventListener("mouseleave", function () { hoveringFuet = false; });
    document.addEventListener("keydown", function (e) { movePerroArrows(e); });
}

function movePerroWheel(e) {
    movePerro(e.deltaY);
}

function movePerroArrows(e) {
    //if (!hoveringFuet) return;

    if (e.key == "ArrowUp" || e.key == "ArrowRight")
        movePerro(-1);
    else if (e.key == "ArrowDown" || e.key == "ArrowLeft")
        movePerro(1);
}

function movePerro(dir) {
    if (dir < 0) { //arriba
        if (perro.offsetTop <= -25) return;

        perro.style.transform = "matrix(6.12323e-17, 1, 1, -6.12323e-17, 0, 0)";
        perro.style.top = perro.offsetTop - step + "px";
        perro.style.left = perro.offsetLeft + step + "px";

    } else { //abajo
        if (perro.offsetTop >= 550) return;

        perro.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        perro.style.top = perro.offsetTop + step + "px";
        perro.style.left = perro.offsetLeft - step + "px";
    }
}