import _ from 'lodash';
import './style.css'
import grill from './grill.jpg'

function header(){
    const header = document.createElement('header');

    const logo = document.createElement('div')
    logo.classList.add('logo')
  
    logo.innerText = 'Logo'
    header.appendChild(logo)
   

    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const homeLi = document.createElement('li')
    homeLi.innerText = "home"
    ul.appendChild(homeLi)

    const menuLi = document.createElement('li')
    menuLi.innerText = "menu"
    ul.appendChild(menuLi)

    const aboutUs = document.createElement('li')
    aboutUs.innerText = "About Us"
    ul.appendChild(aboutUs)

    nav.appendChild(ul)
    header.appendChild(nav)

    return header

}

function h1(){
    const h1 = document.createElement('h1')
    h1.innerText = "Restaurant Page"
    h1.classList.add("title")

    return h1

} 

function grillImage(){
    const grillImage = new Image();
    grillImage.src = grill;
    grillImage.alt = "Image of a delicious grilled steak "
    grillImage.classList.add('image')

    return grillImage
}

document.body.appendChild(header())
document.body.appendChild(h1())
document.body.appendChild(grillImage())