const setup = () => {
    document.getElementById("txtOutput").innerHTML = prompt("geef text in", "default")
}
window.addEventListener("load", setup);