document.addEventListener("click", function (evnt) {
    deselectAllIcons();
    iconClick(evnt.target);
});

function iconClick(element) {
    if (element.className != "icon") return;

    element.style.backgroundColor = '#008cff17';
    element.style.border = '1px solid #008cff2c';
}

function deselectAllIcons() {
    var icons = document.getElementsByClassName("icon");

    for (var icon of icons) {
        icon.style.backgroundColor = '';
        icon.style.border = 'none';
    }
}

