function izracunajGodine(){

    const datum = document.getElementById("datum") .value;

    const godine = dayjs().diff(dayjs(datum), "year");

    document.getElementById("rezultat").innerHTML = `Imate ${godine} godina`;
}