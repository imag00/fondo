var initialMousePos;
var initialWindowPos;
var selected;

function mouse(x) {
    selected = x;
}

function track_mouse(e) {
    if(!selected) return;

    console.log(document.querySelectorAll('[selected]'));
    initialMousePos = [e.clientX, e.clientY];
}

function select_drag_window(e, window) {

    initialMousePos = [e.clientX, e.clientY];

    var windowDimensions = window.querySelector('#min_button');

    initialWindowPos = [window.offsetTop, window.offsetLeft];
    selected = true;
}

function drag_window(e, window) {
    if(!selected) return;


    window.style.left = window.offsetLeft + (e.clientX - initialMousePos[0]) + "px";
    window.style.top = window.offsetTop + (e.clientY - initialMousePos[1]) + "px";
    initialMousePos = [e.clientX, e.clientY];
}

function deselect_drag_window() {
    selected = false;
}