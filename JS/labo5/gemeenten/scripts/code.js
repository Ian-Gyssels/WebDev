const setup = () => {
    functie()
}

const functie = () => {
    let antwoord = "";
    let gemList = document.getElementById("gemeenten");

    while (antwoord !== "stop"){
        antwoord = prompt("gemeente");

        if(antwoord !== "stop"){
            let option = document.createElement("option");
            option.value = antwoord;
            option.innerHTML = antwoord;
            gemList.appendChild(option)
        }
    }

}

window.addEventListener("load", setup);