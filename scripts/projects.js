var projDetailsContainer = document.getElementById("projs-desc");
var projDetailsHeader = document.getElementById("projs-desc-header");
var projDetailsDesc = document.getElementById("projs-desc-content-right");

function showDetails() {
    projDetailsContainer.style.display = 'block'; 
}

function computeThink() {
    showDetails();
    projDetailsHeader.textContent = "Compute{Think}";
    projDetailsDesc.innerHTML = 
              "May - June 2021\r\n"
            + "Java, IntelliJ, Zoom, Google Drive\r\n"
            + "This is a self-designed course on Functional Programming and "
            + "Computational Thinking. I introduced fundamental programming "
            + "principles, simple data structures and algorithms to around 100 "
            + "students."
            + "\r\n\r\n"
            + "<a href=\"https://docs.google.com/document/d/10Mar945X-S7azlIio-2z9Uk2Hx65PNGFTESvEXuUT0Y/edit?usp=sharing\""
            + "style=\"color: #08e2ff\" target=\"_blank\">Course outline document</a>";
}

function orbital() {
    showDetails();
    projDetailsHeader.textContent = "CP2106 Independent Software Development Project";
    projDetailsDesc.innerHTML = 
              "May - Aug 2021\r\n"
            + "Unity, C#, Git\r\n"
            + "Together with a teammate, I worked on a prototype of a game on "
            + "Unity. In particular, we were emulating the indie game 'Divinity: "
            + "Original Sin 2' and were fairly successful in implementing most of "
            + "the core features.\r\n\r\nWe mostly made use of Unity Collaborate "
            + "instead of GitHub, as using both together tended to cause errors on our end."
            + "\r\n\r\n"
            + "<a href=\"https://credentials.nus.edu.sg/b4e196a3-c11f-4a3d-851b-92d95633ab46\""
            + "style=\"color: #08e2ff\" target=\"_blank\">Certificate of Achievement</a>"
            + "\r\n\r\n"
            + "<a href=\"https://github.com/Cyolune/Caves-and-Lizards\""
            + "style=\"color: #08e2ff\" target=\"_blank\">Github repo</a>";
}

function cs2103ip() {
  showDetails();
  projDetailsHeader.textContent = "CP2103T Software Engineering - Individual Project";
  projDetailsDesc.innerHTML = 
            "Jan - Feb 2022\r\n"
          + "Java, JavaFX, IntelliJ, Gradle\r\n"
          + "As part of the module, we were asked to make a task manager chatbot.\r\n\r\n"
          + "I went beyond the expectations, by designing and implementing the system in an "
          + "extendible way. I also ensured to include Javadoc Documentations for every piece "
          + "of code, as well as to make a UML Class Diagram to show how my classes are interlinked."
          + "\r\n\r\n"
          + "The .jar file is also available for download in the github repo."
          + "\r\n\r\n"
          + "<a href=\"cs2103ip.html\""
          + "style=\"color: #08e2ff\" target=\"_blank\">UML Diagram</a>"
          + "\r\n\r\n"
          + "<a href=\"https://github.com/FestiveCat/ip\""
          + "style=\"color: #08e2ff\" target=\"_blank\">Github repo</a>"
          + "\r\n\r\n"
          + "<a href=\"https://FestiveCat.github.io/ip/\""
          + "style=\"color: #08e2ff\" target=\"_blank\">User Guide</a>";
}