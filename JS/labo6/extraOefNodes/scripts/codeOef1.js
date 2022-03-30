const setup = () => {
    changeText();
}

const changeText = () => {
    const text = document.querySelectorAll('p')[0];
    text.innerHTML = 'Good Job!'
}

window.addEventListener("load", setup);