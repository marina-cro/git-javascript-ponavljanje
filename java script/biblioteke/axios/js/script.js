//https://leafletjs.com/ - biblioteka za apije?
//sweetalert - ZA UPOZORENJA, PREUZETI VEC SA STRANICE  ZA ZAVRŠNI

function ucitajKorisnike(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        const lista = document.getElementById("lista");

        console.log(response.data);
        response.data.forEach((korisnik) =>{
            lista.innerHTML += `<li>${korisnik.name}, company:${korisnik.company.name}</li>`;
        });
    });
}
