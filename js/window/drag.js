var initialMousePos;
var initialWindowPos;
var selected;

function mouse(e, x) {
    if (!x) {
        var selec = document.querySelectorAll('[selected]');
        selec.forEach(function(sel) {
            sel.removeAttribute("selected");

            if (parseInt(sel.style.top) < 10 && element.className == "yt_window") max_window(sel);
        });
        return;
    }

    selected = x;
    initialMousePos = [e.clientX, e.clientY];
}

function track_mouse(e) {
    if (!selected) return;

    document.querySelectorAll('[selected]').forEach(selected => drag_window(e, selected));
}

function select_drag_window(e, window) {
    var selected = document.createAttribute("selected");
    window.setAttributeNode(selected);
}

function drag_window(e, window) {
    var moveHorizontal = true;
    var moveVertical = true;
    if (window.clientWidth == document.body.clientWidth) {
        min_window(window);
        window.style.left = e.clientX - (window.clientWidth / 2) + "px";
        window.style.top = e.clientY  + "px";
    }
    if (parseInt(window.style.left) <= 0 && (e.clientX - initialMousePos[0]) < 0) {
        window.style.left = "0px";
        moveHorizontal = false;
    }

    if (parseInt(window.style.left) + window.clientWidth >= document.body.clientWidth  && (e.clientX - initialMousePos[0])> 0) {
        window.style.left = document.body.clientWidth - window.clientWidth + "px";
        moveHorizontal = false;
    }

    if (parseInt(window.style.top) <= 0 && (e.clientY - initialMousePos[1]) < 0) {
        window.style.top = "0px";
        
        moveVertical = false;
    }

    if (parseInt(window.style.top) + window.clientHeight >= document.body.clientHeight && (e.clientY - initialMousePos[1]) > 0) {
        window.style.top = document.body.clientHeight - window.clientHeight + "px";;
        moveVertical = false;
    }

    var newLeft = window.offsetLeft + (e.clientX - initialMousePos[0]);
    
    if (moveHorizontal) window.style.left = window.offsetLeft + (e.clientX - initialMousePos[0]) + "px";
    if (moveVertical) window.style.top = window.offsetTop + (e.clientY - initialMousePos[1]) + "px";

    initialMousePos = [e.clientX, e.clientY];

    if (element.className == "icon") return;
    var windowDimensions = window.querySelector('#min_button');

    windowDimensions.setAttribute("width", window.style.width);
    windowDimensions.setAttribute("height", window.style.height);
    windowDimensions.setAttribute("top", window.style.top);
    windowDimensions.setAttribute("left", window.style.left);

    
}