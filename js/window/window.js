let windowIndex = 100000;

let windows = document.getElementsByClassName("window");

let videos = ["vid/rickroll.mp4", "vid/rickroll2.mp4", "vid/rickroll3.mp4", "vid/rickroll4.mp4"]
let names = ["Papelera de reciclaje", "Visual Studio Code", "Google Chrome", "Apache Netbeans IDE 12.5"]

function loadWindow() {    
    createWindows();    

    for (let window of windows) {
        window.addEventListener("mousedown", function() { focus_window(window) });
        
        let bar = window.querySelector('[bar_drag]');
        bar.addEventListener("mousedown", function() { select_drag(window) });
        bar.addEventListener("dblclick", function() { max_min_window_bar(window) });

        window.querySelector('[close_button]').addEventListener("click", function() { close_window(window) });
        window.querySelector('[max_button]').addEventListener("click", function() { max_window(window) });
        window.querySelector('[min_button]').addEventListener("click", function() { min_window(window) });
        window.querySelector('[hide_button]').addEventListener("click", function() { hide_window(window) });
    }
}


function openWindow(vid) {
    windows[vid].style.visibility = 'visible';
    focus_window(windows[vid]);

    let video = windows[vid].querySelector('video');

    if (!video.hasAttribute("src")) {
        video.setAttribute("src", videos[vid]);
        video.volume = 0.07;
    }
}

function close_window(window) {
    window.style.visibility = 'hidden';

    let video = window.querySelector('video');
    video.pause();
    window.querySelector('video').removeAttribute("src");
}

function hide_window(window) {
    window.style.visibility = 'hidden';
}

function max_min_window_bar(window) {
    if(window.querySelector('[max_button]').style.visibility == 'hidden')
        min_window(window);
    else max_window(window);
}

function max_window(window) {
    window.style.width = '100%';
    window.style.height = '100%';
    window.style.top = '0%';
    window.style.left = '0%';
    window.style.marginTop = '0px';
    window.style.marginLeft = '0px';

    window.style.borderStyle = 'none';
    

    window.querySelector('[max_button]').style.visibility = 'hidden';
    window.querySelector('[min_button]').style.visibility = 'inherit';
}

function min_window(window) {
    let windowDimensions = window.querySelector('[min_button]');

    window.style.width = windowDimensions.getAttribute("width");
    window.style.height = windowDimensions.getAttribute("height");
    window.style.top = windowDimensions.getAttribute("top");
    window.style.left = windowDimensions.getAttribute("left");

    window.style.borderStyle = 'solid';

    window.querySelector('[max_button]').style.visibility = 'inherit';
    window.querySelector('[min_button]').style.visibility = 'hidden';
}

function focus_window(window) {    
    if (window.style.zIndex == windowIndex) return;

    window.style.zIndex = ++windowIndex;
}


function createWindows() {
    let clone = windows[0];
    windows[0].remove();

    for (let name of names) {
        clone.querySelector('span').innerHTML = name;

        document.getElementById("frame").append(clone.cloneNode(true));
    }
    
    windows = document.getElementsByClassName("window");
}