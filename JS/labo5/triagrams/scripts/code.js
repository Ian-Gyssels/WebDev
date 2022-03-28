const setup = () => {
    let s = "onoorbaar"
    triagram(s);
}

const triagram = (s) => {
    for (let i = 0; i < s.length-2; i++) {
        console.log(s.slice(i, i+3));
    }
}
window.addEventListener("load", setup);