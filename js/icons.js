let iconIndex = 1000;
let icons = document.getElementsByClassName("icon");

    function loadIcons() {
        

        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener("dblclick", function() { openWindow(i) });
            icons[i].addEventListener("mousedown", function() { select_drag(icons[i]) });
        }

        document.getElementById("frame").addEventListener("mousedown", function (evnt) {
            deselectAllIcons();
            if (evnt.target.className == "icon")
                iconClick(evnt.target);
        });
    }


function iconClick(icon) {
    focusIcon(icon);

    icon.style.backgroundColor = '#008cff27';
    icon.style.border = '1px solid #008cff2c';
}

function deselectAllIcons() {
    for (let icon of icons) {
        icon.style.backgroundColor = '';
        icon.style.border = '1px solid transparent';
    }
}

function focusIcon(icon) {
    if (icon.style.zIndex == iconIndex) return;

    icon.style.zIndex = ++iconIndex;
}