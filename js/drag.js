var initialMousePos;
var initialWindowPos;
var selected;

function mouse(e, x) {
    if (!x) {
        var selec = document.querySelectorAll('[selected]');
        selec.forEach(function (sel) {
            sel.removeAttribute("selected");

            if (sel.className != "yt_window") return;


            if (parseInt(sel.style.top) == 0) max_window(sel);

            var windowDimensions = sel.querySelector('#min_button');

            if (parseInt(sel.style.top) > 10) {
                windowDimensions.setAttribute("width", sel.style.width);
                windowDimensions.setAttribute("height", sel.style.height);
                windowDimensions.setAttribute("top", sel.style.top);
                windowDimensions.setAttribute("left", sel.style.left);
            }
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

function select_drag(e, window) {
    var selected = document.createAttribute("selected");
    window.setAttributeNode(selected);
}

function drag(e, obj) {
    let newPos = [
        obj.offsetLeft + (e.clientX - initialMousePos[0]),
        obj.offsetTop + (e.clientY - initialMousePos[1])
    ];

    obj.style.left = newPos[0] + "px";
    obj.style.top = newPos[1] + "px";

    if (newPos[0] <= 0) obj.style.left = "0px";

    if (newPos[0] + obj.clientWidth >= document.body.clientWidth)
        obj.style.left = document.body.clientWidth - obj.clientWidth + "px";

    if (newPos[1] <= 0) obj.style.top = "0px";

    if (newPos[1] + obj.clientHeight >= document.body.clientHeight)
        obj.style.top = document.body.clientHeight - obj.clientHeight + "px";

    if (obj.className == "yt_window") drag_window(e, obj, newPos);

    initialMousePos = [e.clientX, e.clientY];


}

function drag_window(e, obj, newPos) {
    var windowDimensions = obj.querySelector('#min_button');

    if (obj.clientWidth == document.body.clientWidth) {
        windowDimensions.setAttribute("left", e.clientX / 2 + "px");
        windowDimensions.setAttribute("top", e.clientY + "px");
        min_window(obj);
    }

    console.log(e.clientY - initialMousePos[1]);

    if (newPos[1] <= 10 && (e.clientY - initialMousePos[1]) < 0) obj.style.top = "0px";
}