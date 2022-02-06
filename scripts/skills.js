var cube = document.getElementById("cube");
var skillsDetailsContainer = document.getElementById("skills-desc");
var skillsDetailsHeader = document.getElementById("skills-desc-header");
var skillsDetailsDesc = document.getElementById("skills-desc-content-right");

function showDetails() {
    skillsDetailsContainer.style.display = 'block'; 
}

function java() { // face 1
    cube.style.animation = "none";
    cube.offsetHeight;
    cube.style.animation = "rotateFace1 25s infinite linear";
    showDetails();
    skillsDetailsHeader.textContent = "Java";
    skillsDetailsDesc.innerHTML = 
              "January 2021\r\n"
            + "6,000\r\n"
            + "Mainly school projects\r\n"
            + "Decent, know about Streams, Lambdas, Exceptions, MultiThreading, etc";
}
function python() { // face 2
    cube.style.animation = "none";
    cube.offsetHeight;
    cube.style.animation = "rotateFace2 25s infinite linear";
    showDetails();
    skillsDetailsHeader.textContent = "Python";
    skillsDetailsDesc.innerHTML = 
              "November 2020\r\n"
            + "500\r\n"
            + "Mainly personal Projects and some school projects\r\n"
            + "Basic programming features. Have not touched on libaries much.";
}
function cCpp() {
    showDetails();
    skillsDetailsHeader.textContent = "C / C++";
    skillsDetailsDesc.innerHTML = 
              "August 2021\r\n"
            + ">500\r\n"
            + "Mainly school projects\r\n"
            + "Basic programming features + malloc/free. Mostly in C.";
}
function html5() { // face 3
    cube.style.animation = "none";
    cube.offsetHeight;
    cube.style.animation = "rotateFace3 25s infinite linear";
    showDetails();
    skillsDetailsHeader.textContent = "HTML 5";
    skillsDetailsDesc.innerHTML = 
              "December 2021\r\n"
            + "1,200\r\n"
            + "Mainly personal Projects\r\n"
            + "Decent";

}
function css3() { // face 4
    cube.style.animation = "none";
    cube.offsetHeight;
    cube.style.animation = "rotateFace4 25s infinite linear";
    showDetails();
    skillsDetailsHeader.textContent = "CSS 3";
    skillsDetailsDesc.innerHTML = 
              "December 2021\r\n"
            + "1,200\r\n"
            + "Mainly personal Projects\r\n"
            + "Decent, know about flex, grids, animations, transform etc";

}
function js() { // face 5
    cube.style.animation = "none";
    cube.offsetHeight;
    cube.style.animation = "rotateFace5 25s infinite linear";
    showDetails();
    skillsDetailsHeader.textContent = "Javascript";
    skillsDetailsDesc.innerHTML = 
              "January 2022\r\n"
            + ">500\r\n"
            + "Mainly personal Projects\r\n"
            + "Basic programming features, linking to HTML documents and simple scripting.";

}
function git() {
    showDetails();
    skillsDetailsHeader.textContent = "Git / Github";
    skillsDetailsDesc.innerHTML = 
              "November 2021\r\n"
            + "NA\r\n"
            + "School projects and Personal Projects\r\n"
            + "Basic features, know about PR guidelines, commit guidelines etc";

}
function teaching() { // face 6
    cube.style.animation = "none";
    cube.offsetHeight;
    cube.style.animation = "rotateFace6 25s infinite linear";
    showDetails();
    skillsDetailsHeader.textContent = "Teaching";
    skillsDetailsDesc.innerHTML = 
              "2018\r\n"
            + "NA. Estimated no. of students taught: 200\r\n"
            + "In school and out of school.\r\n"
            + "Experienced. Know about learning styles, spaced repetition, designing slides, "
            + "communicating complex information using analogies or layman terms.";

}