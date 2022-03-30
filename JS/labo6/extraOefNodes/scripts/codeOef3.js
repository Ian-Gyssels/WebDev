const setup = () => {
    document.getElementById("knop").addEventListener("click", addText );
}

const addText = () => {
    let text = document.createElement("p");
    text.innerHTML = "dit is nieuwe tekst";
    let div = document.getElementById("myDIV");
    div.appendChild(text);
}

window.addEventListener("load", setup);