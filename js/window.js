function close_window(window) {
    window.style.visibility = 'hidden';

    window.querySelector('#yt').setAttribute("src", "");
}

function hide_window(window) {
    window.style.visibility = 'hidden';
}

function max_window(window) {


    window.style.width = '100%';
    window.style.height = '100%';
    window.style.top = '0%';
    window.style.left = '0%';
    window.style.marginTop = '0px';
    window.style.marginLeft = '0px';

    window.style.borderStyle = 'none';
    

    window.querySelector('#max_button').style.visibility = 'hidden';
    window.querySelector('#min_button').style.visibility = 'inherit';
}

function min_window(window) {

    var maxButton = window.querySelector('#max_button');

    window.style.width = maxButton.getAttribute("width");
    window.style.height = maxButton.getAttribute("height");
    window.style.top = maxButton.getAttribute("top");
    window.style.left = maxButton.getAttribute("left");

    window.style.borderStyle = 'solid';

    window.querySelector('#max_button').style.visibility = 'inherit';
    window.querySelector('#min_button').style.visibility = 'hidden';
}