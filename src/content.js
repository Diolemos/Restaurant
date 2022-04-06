

 function createContent(){
    let content = document.createElement('div')
    
    content.id = 'content'; 

    document.body.appendChild(content);
}

function createHeader(){
    let header = document.createElement('h1')
    header.textContent = 'Euro Grill'
    content.appendChild(header)
}

function createCopy(){
        let copy = document.createElement('p')
        copy.id = "copy"
        copy.textContent = "Best pieces of meat you could ever think of. Forget those posers from brazil, texas and argentina. you will confirm that the best grill is made here in Europe";
        content.appendChild(copy)
    }


    
    export {createContent, createCopy,createHeader}
    

