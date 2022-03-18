const setup = () => {
    let knop = document.getElementById("button");
    knop.addEventListener("click", tussenfunctie)
}

const tussenfunctie = () => {
    tekst = document.getElementById("tekst").value;
    spatieMaker(tekst);
}

const spatieMaker = (tekst) => {

    console.log(tekst.length);
    let outputString = "";
    let output = document.getElementById("output");

    for (let i = 0; i < tekst.length; i++) {
        if(tekst[i+1] !== " ") {
            outputString += tekst[i] + " ";
            console.log("met space");
        } else {
            outputString += tekst[i]
            console.log("zonder space");
        }
    }

    console.log(outputString)
    output.innerHTML = outputString;
}

window.addEventListener("load", setup);