import './style.css'
import {createContent,createHeader,createCopy} from './content'
import mainImage from './grill.jpg' //imports image


createContent()
createHeader()
//creates image
const grill = new Image()
grill.src = mainImage
grill

document.getElementById('content').appendChild(grill)

createCopy()
