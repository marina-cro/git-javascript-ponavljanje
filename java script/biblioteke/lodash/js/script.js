let ucenici = [
    "Ana",
    "Marko",
    "Ivan",
    "Petra",
    "Luka",
    "sara",
    "karlo",
    "Mia",
    "Filip",
    "Mia2",
    "Filip2"
];

function podijeliGrupe() {
    const grupe = _.chunk (ucenici, 3);
    console.log(ucenici);
    console.log(grupe);

    document.getElementById("rezultat").inheritHTML = JASON.stringify(grupe);
}


function dodajUcenika() {
    ucenici= _.concat(ucenici, ["Pero", "Ivo", "Klara"]);
    console.log(ucenici);
}