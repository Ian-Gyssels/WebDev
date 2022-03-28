const setup = () => {
    let s1 = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let s2 = "de man riep de"
    vervangDe(s1)
    vervangDe(s2)
}

const vervangDe = (s) => {
    let out = s.replace(/de/g, "het");
    console.log(out)
}

window.addEventListener("load", setup);