import _ from 'lodash';
import './style.css'

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

document.body.appendChild(header())