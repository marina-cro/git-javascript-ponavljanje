document.addEventListener('DOMContentLoaded', function() {
    const sviFilmovi = document.getElementById("sviFilmovi");
    const btnDohvati = document.getElementById("btn-dohvati");
    const btnObrisi = document.getElementById("btn-obrisi");

    btnDohvati.addEventListener("click", function() {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    const xml = xhttp.responseXML;
                    const filmKolekcija = xml?.getElementsByTagName("film") || [];
                    let podaci = "";

                    for (let i = 0; i < filmKolekcija.length; i++) {
                        const nazivFilma = filmKolekcija[i].getElementsByTagName("nazivFilma")[0]?.textContent || "";
                        const godinaIzlaska = filmKolekcija[i].getElementsByTagName("godinaIzlaska")[0]?.textContent || "";
                        const nazivZanra = filmKolekcija[i].getElementsByTagName("nazivZanra")[0]?.textContent || "";

                        podaci += `<li>${nazivFilma} (${godinaIzlaska}) - ${nazivZanra}</li>`;
                    }

                    sviFilmovi.innerHTML = podaci;
                } else {
                    sviFilmovi.innerHTML = `<li>Greška kod obrade zahtjeva: ${xhttp.status}, ${xhttp.statusText}</li>`;
                }
            }
        };

        xhttp.onerror = function() {
            sviFilmovi.innerHTML = `<li>Greška kod obrade zahtjeva: ${xhttp.status}, ${xhttp.statusText}</li>`;
        };

        xhttp.open("GET", "https://frodo.ess.hr/api/svi-filmovi.php", true);
        xhttp.send();
    });

    btnObrisi.addEventListener("click", function() {
        sviFilmovi.innerHTML = "";
    });
});