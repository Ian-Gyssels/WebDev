const setup = () => {
    let btn = document.getElementById("btnsubstring");
    btn.addEventListener("click", substring);

}

const substring = (text, start, end) => {
    text = document.getElementById("txt").value;
    start = document.getElementById("par1").value;
    end = document.getElementById("par2").value;
    document.getElementById("uitkomst").innerHTML = text.substring(start, end);
}
window.addEventListener("load", setup);