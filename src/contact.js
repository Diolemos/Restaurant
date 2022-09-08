import map from "./assets/restaurant-location.png";
function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "☎️ 123 456 789";

  const address = document.createElement("p");
  address.textContent = "📍 Bacon road 55, San Antonio, TX";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = map;
  restaurantLocation.alt = "Burger Duke restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
