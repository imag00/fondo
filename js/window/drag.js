var initialMousePos;
var initialWindowPos;
var selected;

function mouse(e, x) {
    if (!x) {
        var selec = document.querySelectorAll('[selected]');
        selec.forEach(function (sel) {
            sel.removeAttribute("selected");

            if (parseInt(sel.style.top) < 10 && sel.className == "yt_window") max_window(sel);
        });
        return;
    }

    selected = x;
    initialMousePos = [e.clientX, e.clientY];
}

function track_mouse(e) {
    if (!selected) return;

    document.querySelectorAll('[selected]').forEach(selected => drag(e, selected));
}

function select_drag_window(e, window) {
    var selected = document.createAttribute("selected");
    window.setAttributeNode(selected);
}

function drag(e, obj) {
    var newPos = [
        obj.offsetLeft + (e.clientX - initialMousePos[0]),
        obj.offsetTop + (e.clientY - initialMousePos[1])
    ];
    /*
    if (obj.clientWidth == document.body.clientWidth) {
        obj.style.left = e.clientX - (obj.clientWidth / 2) + "px";
        obj.style.top = e.clientY + "px";
        min_window(obj);        
    }
    */

    obj.style.left = newPos[0] + "px";
    obj.style.top = newPos[1] + "px";

    if (newPos[0] <= 0) obj.style.left = "0px";

    if (newPos[0] + obj.clientWidth >= document.body.clientWidth)
        obj.style.left = document.body.clientWidth - obj.clientWidth + "px";

    if (newPos[1] <= 0) obj.style.top = "0px";

    if (newPos[1] + obj.clientHeight >= document.body.clientHeight)
        obj.style.top = document.body.clientHeight - obj.clientHeight + "px";

    initialMousePos = [e.clientX, e.clientY];

    

    if (obj.className != "yt_window") return;
    var windowDimensions = obj.querySelector('#min_button');

    windowDimensions.setAttribute("width", obj.style.width);
    windowDimensions.setAttribute("height", obj.style.height);
    windowDimensions.setAttribute("top", newPos[1]);
    windowDimensions.setAttribute("left", newPos[0]);
}