const setup = () => {
    let verjaardag = new Date(2003, 6, 12);
    console.log(berekenDagenTotVerjaardag(verjaardag ) + " dagen tot je verjaardag");
}

const berekenDagenTotVerjaardag = (verjaardag) => {
    let vandaag = new Date();

    verjaardag.setFullYear(vandaag.getFullYear());
    if(vandaag > verjaardag){
        verjaardag.setFullYear(vandaag.getFullYear() + 1);
    }

    let dagenTotVerjaardag =  verjaardag - vandaag;
    let dag = 1000 * 60 * 60 * 24;
    return Math.floor(dagenTotVerjaardag / dag);
}

    window.addEventListener("load", setup);