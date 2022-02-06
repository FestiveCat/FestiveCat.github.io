let mouseX = -1;
let mouseY = -1;

var splash = document.getElementById("splash-3D");

document.onmousemove = function(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
}

setInterval(pointerCheck, 25);
function pointerCheck() {
    if (window.getComputedStyle(splash).display == "none") {
        return undefined;
    }
    
    let splashRect = splash.getBoundingClientRect();
    let splashCenter = [ // [x, y]
        (splashRect.right - splashRect.left)/2 + splashRect.left,
        (splashRect.bottom - splashRect.top)/2 + splashRect.top
    ];
    console.log(splashCenter[0], splashCenter[1]);
    console.log('Cursor at: ' + mouseX + ', ' + mouseY);

    let diffX = splashCenter[0] - mouseX;
    let diffY = (splashCenter[1] - mouseY) * 1.5;
    let rotY = Math.tan(diffX / 1200) * -180 / Math.PI;
    let rotX = Math.tan(diffY / 1200) * 180 / Math.PI;
    console.log(rotY);
    let rotString = "perspective(400px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
    splash.style.transform = rotString;
}