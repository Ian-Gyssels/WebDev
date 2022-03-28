const setup = () => {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", printToConsole)
}

const printToConsole = () => {
    console.log(getRoker())
    console.log(getMoedertaal())
    console.log(getBuurland())
    console.log(getBestelling())
    console.log()
}

const getRoker = () => {
    let isRoker = document.getElementById("roker").checked

    if(isRoker) {
        return "is een roker";
    } else {
        return "is geen roker";
    }
}

const getMoedertaal = () => {
    let elements = document.getElementsByName("mt")
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].checked){
            return "moedertaal is " + elements[i].innerText
        }
    }
}

const getBuurland = () => {
    let elements = document.getElementById("buurland").options

    for (let elementsKey in elements) {
        if(elementsKey.checked){
            return "favoriete buurland is " + elementsKey.value
        }
    }
}

const getBestelling = () => {
    let elements = document.getElementById("bestelling").options
    let selected = [];
    let out = "Bestelling bestaat uit "

    for (let elementsKey in elements) {
        if(elementsKey.checked){
            selected.push(elementsKey.value)
        }
    }
    for (let selectedElement of selected) {
        out += selectedElement + " ";
    }

    return out
}

window.addEventListener("load", setup);