let mouseX = -1;
let mouseY = -1;

var splash = document.getElementById("splash-3D");

document.onmousemove = function(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
}

setInterval(pointerCheck, 25);
function pointerCheck() {
    sizeCheck();
    if (window.getComputedStyle(splash).display == "none") {
        return undefined;
    }
    
    let splashRect = splash.getBoundingClientRect();
    let splashCenter = [ // [x, y]
        (splashRect.right - splashRect.left)/2 + splashRect.left,
        (splashRect.bottom - splashRect.top)/2 + splashRect.top
    ];

    let diffX = (splashCenter[0] - mouseX) / (scaleWidth + 0.5);
    let diffY = (splashCenter[1] - mouseY) * 1.5 / scaleHeight;
    let rotY = Math.tan(diffX / (0.625*idealWidth)) * -180 / Math.PI;
    let rotX = Math.tan(diffY / (0.625*idealWidth)) * 180 / Math.PI;
    let rotString = "perspective(400px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
    splash.style.transform = rotString + scaleString;
}

var idealWidth = 1920;
var idealHeight = 1080;
var scaleWidth = 1;
var scaleHeight = 1;
var scaleString = "";

function sizeCheck() {
    scaleWidth = screen.width / idealWidth;
    scaleHeight = screen.height / idealHeight;
    console.log(scaleWidth +", "+ scaleHeight);
    scaleString = " scale(" + scaleWidth + ", " + scaleHeight + ")";
}