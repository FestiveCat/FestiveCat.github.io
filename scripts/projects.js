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
              "May - Jun 2021  |  Dec 2021  |  Spring 2023\r\n"
            + "Java, IntelliJ, Zoom, Google Drive  |  Python, VSCode\r\n"
            + "This is a self-designed course on Basic Programming and "
            + "Computational Thinking.\r\n\r\n"
            + "In Mid 2021 and as Iteration 2, I introduced fundamental programming principles, "
            + "simple data structures and algorithms to around 100 students.\r\n\r\n"
            + "In December 2021, I followed up with the same class with a short session "
            + "on Object Oriented Programming.\r\n\r\n"
            + "In Spring 2023, Compute{Think} is revitalised as Iteration 3, where a greater "
            + "emphasis is placed on learning programming by connecting fundamentals to previously-learnt "
            + "mathematical structures."
            + "\r\n\r\n"
            + "<a href=\"https://docs.google.com/document/d/10Mar945X-S7azlIio-2z9Uk2Hx65PNGFTESvEXuUT0Y/edit?usp=sharing\""
            + "style=\"color: #08e2ff\" target=\"_blank\">V2 Course outline document</a>";
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

function cs2103tp() {
  showDetails();
  projDetailsHeader.textContent = "CP2103T Software Engineering - Team Project";
  projDetailsDesc.innerHTML = 
            "Feb - April 2022\r\n"
          + "Java, JavaFX, IntelliJ, Gradle\r\n"
          + "As part of the module, we were asked to extend from a task manager chatbot.\r\n\r\n"
          + "I contributed beyond what was expected of me, by stepping up as a team lead during times "
          + "of low progress, delegated tasks fairly and checking up on their progress over time.\r\n\r\n"
          + "I have also been active in quality-checking the pull requests that involve both code and "
          + "documentation changes\r\n\r\n"
          + "For substantiation quantitatively, I have edited almost 4.2k lines, which is 36% of all lines"
          + "edited by the team of 5.\r\n\r\n"
          + "Overall, for my contributions in the individual and team project, "
          + "I have not only received an A+ for this module, but top 5% (~ top 15) in the module."
          + "\r\n\r\n"
          + "The .jar file is also available for download in the github repo. "
          + "The User Guide and Developer's Guide can be found in the project webpage."
          + "\r\n\r\n"
          + "<a href=\"https://github.com/AY2122S2-CS2103T-W12-1/tp/tree/master\""
          + "style=\"color: #08e2ff\" target=\"_blank\">Github repo</a>"
          + "\r\n\r\n"
          + "<a href=\"https://ay2122s2-cs2103t-w12-1.github.io/tp/\""
          + "style=\"color: #08e2ff\" target=\"_blank\">Project Webpage</a>"
          + "\r\n\r\n"
          + "<a href=\"https://ay2122s2-cs2103t-w12-1.github.io/tp/team/festivecat.html\""
          + "style=\"color: #08e2ff\" target=\"_blank\">Project Portfolio Page</a>"
          + "\r\n\r\n"
          + "<a href=\"https://nus-cs2103-ay2122s2.github.io/tp-dashboard/?search=AY2122S2-CS2103T-W12-1&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=docs~functional-code~test-code~other&since=2022-02-18&until=2022-04-22\""
          + "style=\"color: #08e2ff\" target=\"_blank\">Module Project Dashboard with # lines edited count</a>"
          ;
}