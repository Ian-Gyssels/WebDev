const setup = () => {
    let img = document.getElementById("img");
    let button = document.getElementById("start");
    button.addEventListener("click", startGame);
    img.addEventListener("click", hit);

}

let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

let startGame = () => {
    setInterval(() => {
        console.log("interval");
        changePosition();
    }, 1000);
}

let getRandomPosition = () => {
    let div = document.getElementById("playField");
    let x = Math.floor(Math.random() * (div.offsetWidth - global.IMAGE_SIZE));
    let y = Math.floor(Math.random() * (div.offsetHeight - global.IMAGE_SIZE));
    return {x: x, y: y};
}

let changePosition = () => {
    let img = document.getElementById("img");
    //change image
    img.setAttribute("src", global.IMAGE_PATH_PREFIX + (Math.floor(Math.random() * global.IMAGE_COUNT)) + global.IMAGE_PATH_SUFFIX);

    //update location
    let pos = getRandomPosition();
    img.style.marginLeft = pos.x + "px";
    img.style.marginTop = pos.y + "px";
}

let hit = () => {
    global.score++;
    document.getElementById("score").innerHTML = "Score: " + global.score;
}

window.addEventListener("load", setup);