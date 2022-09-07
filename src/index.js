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

function description(){
    const copyText = document.createElement('p');
    copyText.classList.add('copyText');
    copyText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non condimentum neque. Integer quis ligula aliquet, varius metus sit amet, pretium ipsum. Curabitur eleifend iaculis nibh non volutpat. Donec mauris eros, tempor vel aliquam nec, ultricies nec felis. Nunc ac aliquam mi, quis euismod justo. Nullam sagittis bibendum arcu nec mollis. Nunc suscipit, tellus id ullamcorper bibendum, ex eros sagittis risus, eget rutrum velit libero at diam. Morbi sed vestibulum ante. Donec egestas pulvinar nulla ullamcorper cursus. Fusce in faucibus massa. Proin mattis lacinia lacus sed ultricies. Aliquam convallis dolor velit, aliquam dapibus metus vestibulum vel. Cras sit amet magna ultrices, suscipit elit non, semper lectus. Aenean non velit vitae massa suscipit convallis. Vivamus eget pulvinar lorem. Quisque ante sem, pellentesque quis viverra quis, finibus sed erat. Curabitur pharetra euismod risus, eu euismod diam interdum nec. Nullam lobortis pretium dolor laoreet commodo. Vivamus libero nisi, sodales eget dolor at, tincidunt pellentesque tortor. Phasellus tempor nunc et suscipit dictum. Vivamus eu lorem velit. Nullam eget turpis ante. Suspendisse molestie quis purus id tincidunt. Nunc porttitor turpis justo, id ultrices nisl faucibus ac. Nullam pretium bibendum risus in placerat. Nunc a tempus ipsum."

    return copyText
}

function footer(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const logo = document.createElement('div')
    logo.classList.add('logo')
  
    logo.innerText = 'Logo'
    footer.appendChild(logo)

    return footer


}

document.body.appendChild(header())
document.body.appendChild(h1())
document.body.appendChild(grillImage())
document.body.appendChild(description())
document.body.appendChild(footer())