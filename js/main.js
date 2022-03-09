const timer = ms => new Promise(res => setTimeout(res, ms));

window.onload = function () {
    loadIcons();
    loadWindow();
    loadDrag();
    loadJesus();
    loadPerro();
    loadTiburon();
}