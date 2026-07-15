async function ucitajPodatke (){
    //prikaz swola za učitavanje
    Swal.fire({
        title:"Učitavanje...",
        text: "Dohvaćam podatke o učenicima",
        icon:"info"
    });

//dohvaćanje podataka
try{
    const odgovor = await axios.get("https://jsonplaceholder.typicode.com/users");

    const korisnici = odgovor.data;

    const ocjene = [5 ,4, 5, 5, 2, 4, 3, 3, 4, 5]

    const danas= dayjs();

    let html = "<h2>Popis učenika</h2>";

    korisnici.forEach((korisnik, index) => {
        const datumRodenja = dayjs().subtract(15 + index, "year");

        const dob = danas.diff(datumRodenja, "year");

        html += `<p>${korisnik.name} - ${dob} godine - Ocjena: ${ocjene[index]}</p>`;
    });


    document.getElementById("ucenici") .innerHTML = html;

    const grupirano = _.countBy(ocjene);

//prikaz grafa
prikazGrafa(grupirano);


//prikaz swala ako je dohvaćanje podataka uspjelo
    Swal.fire({
        title:"Uspješno..",
        text: "Podatci učitani",
        icon:"success"
    });


}catch (error) {
     Swal.fire({
        title:"Greška",
        text: "nemogu dohvatiti podatke",
        icon:"error"
    });   
}
}

function prikazGrafa (grupiraniPodaci){
    const ctx = document.getElementById("graf");
    console.log(grupiraniPodaci);

    new Chart (ctx, {
        type: "bar",
        data:{
            labels: Object.keys(grupiraniPodaci),
            datasets: [
                {
                label: "Broj učenika",
                data: Object.values(grupiraniPodaci)
                }
            ]
        }
    });
}