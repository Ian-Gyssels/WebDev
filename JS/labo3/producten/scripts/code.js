const setup = () => {
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", bereken);
}

const bereken = () =>{
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let totalen = document.getElementsByClassName("totaal");
    let totaal = 0;


    for (let i = 0; i < prijzen.length; i++) {
        let tussen = (parseFloat(prijzen[i].innerHTML) * parseFloat(aantallen[i].value)); //NaN
        console.log(tussen);
        totalen[i].innerHTML = tussen + tussen * (parseFloat(btw[i].innerHTML) / 100);
    }

    for (let i = 0; i < totalen.length; i++) {
        totaal += parseFloat(totalen[i].innerHTML)
    }
    document.getElementById("eindtotaal").innerHTML = totaal;
}
window.addEventListener("load", setup);