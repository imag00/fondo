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

let videos = ["vid/rickroll.mp4", "vid/rickroll2.mp4", "vid/rickroll3.mp4", "vid/rickroll4.mp4"]

function openYTLink(link) {
    document.getElementById("yt_window").style.visibility = 'visible';
    var video = document.getElementById("yt");
    video.currentTime = 0;
    video.setAttribute('src', videos[link]);
    video.play();

    //window.open('https://youtu.be/' + link);
}