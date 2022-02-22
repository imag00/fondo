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
let videos = ["kcnJR7C1Ku8", "0n2i7xMtHFw", "qSZj4ITI9ow", "SbCxf-WorNE"]

function openYTLink(n) {
    ytWindow[n].style.visibility = 'visible';

    var video = ytWindow[n].querySelector('#yt');

    console.log(video.getAttribute("src") == "");

    if (video.getAttribute("src") == "") {
        video.setAttribute("src", "https://www.youtube.com/embed/" + videos[n] + "?&autoplay=1");
    }
}