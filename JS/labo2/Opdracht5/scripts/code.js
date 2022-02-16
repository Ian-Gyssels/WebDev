const setup = () => {
    let pElement=document.getElementById("txtOutput");

    if(window.confirm()){
        pElement.innerHTML="Welkom!";

    }
}
window.addEventListener("load", setup);