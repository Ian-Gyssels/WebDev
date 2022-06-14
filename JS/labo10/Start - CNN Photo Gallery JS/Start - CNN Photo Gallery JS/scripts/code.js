const setup = () => {

    let thumbnails = document.getElementById("thumbnails");
    document.getElementById("image-nav-left").addEventListener("click", navigate)
    document.getElementById("image-nav-right").addEventListener("click", navigate)

    loadImages();
};

const loadImages = () => {
    // thumbnail
    let thumb = document.getElementById("thumbnails").children[1]
    console.log(document.getElementById("thumbnails").children)
    for (let i = 0; i < galleryData.length; i++) {
        let image = document.createElement("img")
        image.src = galleryData[i].urlThumb
        image.classList.add("thumbnail")
        image.id = i;
        image.addEventListener("click", thumbClick)
        thumb.appendChild(image);

        if(image.id == 0){
            image.classList.add("activeThumbnail")
        }
    }

    // main image
    let desc = document.getElementById("description");
    let cop = document.getElementById("copyright")

    let firstImage = galleryData[0];
    let fCp = "<strong>Photos:</strong> " + firstImage.copyright
    let fDescr = firstImage.description;

    let bigImg = document.createElement("img")
    bigImg.src = firstImage.urlFull;
    bigImg.id = "mainFoto";

    desc.innerHTML = fDescr;
    cop.innerHTML = fCp;

    document.querySelector(".image-navigator").appendChild(bigImg)

}

const thumbClick = (e) => {
    document.getElementsByClassName("activeThumbnail")[0].classList.remove("activeThumbnail");
    document.getElementById(e.target.id).classList.add("activeThumbnail");

    document.getElementById("counter").innerHTML = (parseInt(e.target.id)+1) + " of " + galleryData.length

    document.getElementById("mainFoto").src = galleryData[e.target.id].urlFull;

    aanpassen(e.target.id)
}

const navigate = (e) => {
    let id = document.getElementsByClassName("activeThumbnail")[0].id;
    switch (e.target.id) {
        case "image-nav-left":
            id--;
            break;
        case "image-nav-right":
            id++;
            break;
    }

    if(id < 0) {
        id = 10;
    }
    if(id > 10){
        id = 0;
    }

    document.getElementById("mainFoto").src = galleryData[id].urlFull;
    document.getElementsByClassName("activeThumbnail")[0].classList.remove("activeThumbnail");
    document.getElementById(id).classList.add("activeThumbnail");
    document.getElementById("counter").innerHTML = (id+1) + " of " + galleryData.length
    aanpassen(id)
}

const aanpassen = (id) => {
    let desc = document.getElementById("description");
    let cop = document.getElementById("copyright");
    let img = galleryData[id];

    let fCp = "<strong>Photos:</strong> " + img.copyright
    let fDescr = img.description;

    desc.innerHTML = fDescr;
    cop.innerHTML = fCp;
}

window.addEventListener("load", setup);