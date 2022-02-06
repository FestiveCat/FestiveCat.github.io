var image = document.getElementById("about-me-splash-image");
var imageContainer = document.getElementById("about-me-splash");
var timelineDetailsContainer = document.getElementById("timeline-details");
var timelineDetailsHeader = document.getElementById("timeline-details-header");
var timelineDetailsDesc = document.getElementById("timeline-details-content");

function showDetails() {
    imageContainer.style.display = "flex";
    timelineDetailsContainer.style.display = 'block'; 
}

var nus1str = "Matriculating into the Computer Science Programme in NUS, this "
        + "was my first foray into the any form of programming. In this year, "
        + "I took basic foundation modules, before embarking onto an independent "
        + "software development project, nicknamed 'Orbital'.\r\n\r\nIn this year, "
        + "I started using Java and Python, with some involvement in C#, Unity and Git."

function nus1() {
    showDetails();
    timelineDetailsHeader.textContent = "National University of Singapore, Year 1";
    timelineDetailsDesc.textContent = nus1str;
    image.src = "../images/SoC.jpg";
}
var nus2str = "In Year 2, I took introductory modules for focus areas, learning more "
        + "about operating systems, networks, software engineering and machine learning. "
        + "I also became more familiar with Java, Python, C/C++ and Git.\r\n\r\n"
        + "Additionally, I dwelved into front end with HTML, CSS and JS by making this "
        + "website from scratch.\r\n\r\n"
        + "I also took on Teaching Assistant Duties as well as Officer duties for NUS SAVE "
        + "(Students Against the Violation of the Earth). The picture is from a beach cleanup"
        + " event I had organised."

function nus2() {
    showDetails();
    timelineDetailsHeader.textContent = "National University of Singapore, Year 2";
    timelineDetailsDesc.textContent = nus2str;
    image.src = "../images/cleanup1.jpg";
}