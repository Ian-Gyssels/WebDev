const setup = () => {
tussenFunctie();
}

const tussenFunctie = () =>{
    let zin = "De man van An geeft geen hand aan de ambetante verwanten".toLowerCase();
    let word = "an"
    bepaalAantal(zin, word)
    bepaalIO(zin, word)
}

const bepaalAantal = (zin, word) => {

    console.log(zin.split(word).length - 1) ;
}

const bepaalIO = (zin, word) => {
    newString = 0;
    for (var i = 0; i < zin.length; i += 1) {
        if (zin.indexOf(word)) {
            newString += 1;
            i += 7;
        }
    }
    console.log(newString);
}



window.addEventListener("load", setup);