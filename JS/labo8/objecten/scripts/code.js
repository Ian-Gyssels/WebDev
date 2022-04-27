const setup = () => {
    let text = createStudent();
    console.log(text);
    createStudentJSONString(text);
}

const createStudent = () => {
    const student = {
        voornaam: "Ian",
        familienaam: "Gyssels",
        geboorteDatum: new Date("2003‐07‐12"),
        adres: { // een object
            straat: "straatnaam",
            postcode: "8500",
            gemeente: "stad"
        },
        isIngeschreven: true,
        jaarStudie: 1
    }
    return JSON.stringify(student) ;
}

const createStudentJSONString = (studenttext) => {
    let student = JSON.parse(studenttext);
    console.log(student.voornaam);
}

window.addEventListener("load", setup);