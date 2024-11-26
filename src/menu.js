import jrduke from "./assets/burgers/jrduke.png";
import burgerDuke from "./assets/burgers/burgerduke.png";
import bbqDuke from "./assets/burgers/bbqduke.png";
import crispyFish from "./assets/burgers/crispyfish.png";
import doubleDuke from "./assets/burgers/doubleduke.png";
import ohDeer from "./assets/burgers/ohdeer.png";
import omelet from "./assets/burgers/omeletduke.png";
import kingBuster from "./assets/burgers/kingbuster.png";
import keto from "./assets/burgers/ketoburger.png";
import el from "./assets/burgers/elpasospecial.png";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    //Need to create menu items... for now, I will use these placeholders
    createMenuItem(
      "Double Duke",
      doubleDuke,
      "bread, cheese, bacon, onions, garlic, double patty, bacon, tomato"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Burger Duke",
      burgerDuke,
      "bread, cheese, cherry tomatoes, lettuce, garlic."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Barbecue Duke",
      bbqDuke,
      "bread, cheese, bacon, onions, garlic, patty, barbecue sauce, bacon"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crispy Fish ",
      crispyFish,
      "bread, cheese, bacon, onions, garlic, bacon,fried fish patty"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Oh Deer",
      ohDeer,
      "bread, cheese, bacon, onions, garlic, bacon, deer patty, lettuce, bbq sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Omelette burger",
      omelet,
      "bread, cheese, bacon, onions, garlic, omelette, patty, bacon"
    )
  );
  menu.appendChild(
    createMenuItem(
      "King Buster",
      kingBuster,
      "bread, cheese,double patty, bacon, onions,special sauce, garlic, bacon, bacon, bacon"
    )
  );
  menu.appendChild(
    createMenuItem("Keto burger", keto, "patty, tomatoes, cheese")
  );
  menu.appendChild(
    createMenuItem(
      "El Paso Special",
      el,
      "patty,bread, tomatoes, cheese,beans, hot sauce, tostilhas"
    )
  );

  return menu;
}

//That function creates the menu items, it is called inside the createMenu function, its hoisted, of course
function createMenuItem(name, link, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  //change logic to work with tow words names
  const foodImage = document.createElement("img");
  foodImage.src = link;
  foodImage.alt = name;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
