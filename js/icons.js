var iconIndex = 500;

document.addEventListener("mousedown", function (evnt) {
    deselectAllIcons();
    if (evnt.target.className == "icon")
        iconClick(evnt.target);
});

function iconClick(icon) {
    focusIcon(icon);

    icon.style.backgroundColor = '#008cff27';
    icon.style.border = '1px solid #008cff2c';
}

function deselectAllIcons() {
    var icons = document.getElementsByClassName("icon");

    for (var icon of icons) {
        icon.style.backgroundColor = '';
        icon.style.border = '1px solid transparent';
    }
}

function focusIcon(icon) {
    if (icon.style.zIndex == iconIndex) return;

    icon.style.zIndex = ++iconIndex;
}