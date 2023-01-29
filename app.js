const webapps = [
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

const desktopapps = [
  {
    name: "Snake",
    url: "/snake",
    image: "./images/snake.png",
  },

  // {
  //   name: "Key Simulator",
  //   url: "/keysimulator",
  //   image: "./images/keysimulator.png",
  // },
];

const mobileApps = [
  {
    name: "MovieFinder",
    url: "https://moviefinder-fe7dc.web.app",
    image: "./images/moviefinder.jpg",
  },
];

const cltapps = [
  {
    name: "Make Project",
    url: "/makeproject",
    image: "./images/makeproject.png",
  },
];

const addApp = (app, container) => {
  const appElement = document.createElement("a");
  appElement.href = app.url;
  appElement.classList.add("app");

  const innerDiv = document.createElement("div");
  innerDiv.style.background = `url(${app.image}) no-repeat center center / cover`;
  innerDiv.classList.add("app-inner");
  innerDiv.innerHTML = "<h3 class='project-title'>" + app.name + "</h3>";
  appElement.appendChild(innerDiv);

  container.appendChild(appElement);
};

const webContainer = document.querySelector(".web-container");
const desktopContainer = document.querySelector(".desktop-container");
const mobileContainer = document.querySelector(".mobile-container");
const cltContainer = document.querySelector(".clt-container");

webapps.forEach((app) => {
  addApp(app, webContainer);
});

desktopapps.forEach((app) => {
  addApp(app, desktopContainer);
});

mobileApps.forEach((app) => {
  addApp(app, mobileContainer);
});

cltapps.forEach((app) => {
  addApp(app, cltContainer);
});
