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

var ytWindow = document.getElementsByClassName("yt_window");
let videos = ["vid/rickroll.mp4", "vid/rickroll2.mp4", "vid/rickroll3.mp4", "vid/rickroll4.mp4"]

function openYTLink(n) {
    ytWindow[n].style.visibility = 'visible';

    var video = ytWindow[n].querySelector('#yt');

    if (video.getAttribute("src") == "") {
        video.setAttribute("src", videos[n]);
    }
}