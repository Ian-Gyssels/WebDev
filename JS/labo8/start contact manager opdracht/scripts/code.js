let personen = [{
    voornaam: 'Jan',
    familienaam: 'Janssens',
    geboorteDatum: new Date('2010-10-10'),
    email: 'jan@example.com',
    aantalKinderen: 0
},
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }];

const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
}

const showPerson = () => {
    clearAllErrors();
    let select = document.getElementById('lstPersonen');
    let person = personen[select.selectedIndex];
    document.getElementById('txtVoornaam').value = person.voornaam;
    document.getElementById('txtFamilienaam').value = person.familienaam;
    try {
        document.getElementById('txtGeboorteDatum').value = formatDate(person.geboorteDatum);
    } catch (e) {
        document.getElementById('txtGeboorteDatum').value = person.geboorteDatum
    }
    document.getElementById('txtEmail').value = person.email;
    document.getElementById('txtAantalKinderen').value = person.aantalKinderen;
}

const addStandardPerson = () => {
    let select = document.getElementById('lstPersonen');
  for (let i = 0; i < personen.length; i++) {
    let person = personen[i];
    let personOption = new Option(person.voornaam + " " + person.familienaam, person.voornaam + " " + person.familienaam);
    personOption.dataset.index = i;
    personOption.addEventListener('click', showPerson);
    select.appendChild(personOption);
  }
}

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let select = document.getElementById('lstPersonen');

    // valideer alle input data en controleer of er geen errors meer zijn
    if(valideer()) {

        // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
        let person = personen[select.selectedIndex];
        person.voornaam = document.getElementById('txtVoornaam').value;
        person.familienaam = document.getElementById('txtFamilienaam').value;
        person.geboorteDatum = new Date(document.getElementById('txtGeboorteDatum').value);
        person.email = document.getElementById('txtEmail').value;
        person.aantalKinderen = document.getElementById('txtAantalKinderen').value;

        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
        let personOption = document.getElementById('lstPersonen').options[select.selectedIndex];
        personOption.text = person.voornaam + " " + person.familienaam;
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let select = document.getElementById('lstPersonen');
    personen.push({
        voornaam: '',
        familienaam: '',
        geboorteDatum: "YYYY-MM-DD",
        email: '',
        aantalKinderen: 0
    });
    let person = personen[personen.length - 1];
    let personOption = new Option("--STEL DEZE PERSOON IN--");
    personOption.dataset.index = personen.length - 1;
    personOption.addEventListener('click', showPerson);
    select.appendChild(personOption);
    select.selectedIndex = personen.length - 1;
};


// onze setup functie die de event listeners registreert
const setup = () => {
    addStandardPerson();
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);