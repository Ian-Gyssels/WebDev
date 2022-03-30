const setup = () => {
    method();
    addImage();
}

const method = () => {
    let list = document.querySelectorAll('ul')[0];
    for (let i = 0; i < list.children.length; i++) {
        list.children[i].style.color = 'red';
    }
}

const addImage = () => {
    let list = document.querySelectorAll('ul')[0];
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal92Wv45xTmMIOvFSYARcKu3ivL4bg1-erg&usqp=CAU';
    li.appendChild(img);
    list.appendChild(li);
}


window.addEventListener("load", setup);