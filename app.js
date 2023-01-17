const apps = [
  {
    name: "Tic Tac Toe",
    url: "/tictactoe",
    image: "./images/tictactoe.png",
  },
  {
    name: "FamilyPlanner",
    url: "https://familyplanner.ga",
    image: "./images/fp.jpg",
  },
  {
    name: "Portfolio",
    url: "https://robyte.me",
    image: "./images/robyte.png",
  },
  {
    name: "Project Ideas",
    url: "https://www.projectideas.ga",
    image: "./images/projectideas.jpg",
  },
  {
    name: "MovieFinder",
    url: "https://moviefinder-fe7dc.web.app",
    image: "./images/moviefinder.jpg",
  },
  {
    name: "Solar Discover",
    url: "/solardiscover",
    image: "./images/solar.jpg",
  },
  {
    name: "Galaxy Generator",
    url: "/galaxygenerator",
    image: "./images/galaxygenerator.jpg",
  },
  {
    name: "Floating Name",
    url: "/floatingname",
    image: "./images/floatingname.jpg",
  },
  {
    name: "Second Portfolio",
    url: "/oldportfolio",
    image: "./images/oldportfolio.jfif",
  },
  {
    name: "First Portfolio",
    url: "/firstportfolio",
    image: "./images/firstportfolio.jfif",
  },
];

const projectContainer = document.querySelector(".project-container");

apps.forEach((app) => {
  const appElement = document.createElement("a");
  appElement.href = app.url;
  appElement.classList.add("app");

  const innerDiv = document.createElement("div");
  innerDiv.style.background = `url(${app.image}) no-repeat center center / cover`;
  innerDiv.classList.add("app-inner");
  innerDiv.innerHTML = "<h3 class='project-title'>" + app.name + "</h3>";
  appElement.appendChild(innerDiv);

  projectContainer.appendChild(appElement);
});
