function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
        
        //Need to create menu items... for now, I will use these placeholders
      createMenuItem(
        "Burger1",
        "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
      )
    );
    menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burger1",
          "bread, cheese, bacon, onions, garlic, bacon, bacon, bacon"
        )
      );
  
    return menu;
  }
  
  //That function creates the menu items, it is called inside the createMenu function, its hoisted, of course 
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    
    //change logic to work with tow words names
    const foodImage = document.createElement("img");
    foodImage.src = `./assets/burgers/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;
  
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