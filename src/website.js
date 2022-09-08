import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Burger Duke";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  //Next line creates the NAV 
  const nav = document.createElement("nav");
  //Now each button should be created individually, starting from the HOME btn
  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";

  //Event listener... If user is not on the clicked option, take him there!
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  //menu btn
  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });
 
  //Finally, contact btn
  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  //now, Add the buttons to the NAV
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");
  
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Made with 💚 in Joinville, Brazil.`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/DioLemos";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const body = document.body

  body.appendChild(createHeader());
  body.appendChild(createMain());
  body.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializeWebsite;