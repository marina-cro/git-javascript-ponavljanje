document.addEventListener("DOMContentLoaded", function () {
  const zanrovi = document.getElementById("zanrovi");
  const filmoviPoZanru = document.getElementById("filmovi-po-zanru");
  const rukujPodacima = function (podaci) {
    var ispis = "",
      nazivFilma,
      godinaIzlaska,
      nazivZanra;
    for (let i = 0; i < podaci.length; i++) {
      nazivFilma = podaci[i].nazivFilma;
      godinaIzlaska = podaci[i].godinaIzlaska;
      nazivZanra = podaci[i].nazivZanra;
      ispis += `<p><strong>Naziv filma: </strong> ${nazivFilma}<br>
                 <strong>Godina izlaska: </strong> ${godinaIzlaska}<br>
                 <strong>Naziv žanra: </strong> ${nazivZanra}<br></p><hr>`;
    }
    filmoviPoZanru.innerHTML = ispis;
  };
  const rukujGreskom = function (greska) {
    filmoviPoZanru.innerHTML = `<p>Greška kod obrade zahtjeva: ${greska}</p>`;
  };
  zanrovi.addEventListener("change", function () {
    const vrijednost = zanrovi.value;
    fetch(
      `https://frodo.ess.hr/api/filmovi-po-zanru-json.php?zanr=${vrijednost}`
    )
      .then((response) => response.json())
      .then((podaci) => rukujPodacima(podaci))
      .catch((greska) => rukujGreskom(greska));
  });
});