import _ from 'lodash';
import './style.css';
import burgerDuke from './assets/burgers/burgerduke.png'


function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    const text1 = createParagraph("You must try! Saint Antonio's most loved burgers")

    const burgerDukeImage = new Image();
    burgerDukeImage.src = burgerDuke;
    burgerDukeImage.classList.add("homeImage")
    
    const text2 = createParagraph("Served fresh since 1957")
    
    home.appendChild(text1)
    home.appendChild(burgerDukeImage)
    home.appendChild(text2)
     
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;