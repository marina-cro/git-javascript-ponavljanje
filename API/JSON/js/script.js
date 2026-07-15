document.addEventListener("DOMContentLoaded", function () {
  const trazilica = document.getElementById("trazilica");
  const filmoviPoNazivu = document.getElementById("filmovi-po-nazivu");

  trazilica.addEventListener("keyup", function () {
    const vrijednost = trazilica.value;
    console.log(vrijednost);

    if (vrijednost.trim() != "") {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var podaci, nazivFilma, godinaIzlaska, nazivZanra;
          const jsonData = JSON.parse(this.responseText);
          console.log(jsonData);

          if (jsonData.length > 0) {
            podaci = `<table border="1">
                    <tr><th>Naziv Filma</th><th>Godina izlaska</th><th>Naziv žanra</th></tr>`;
            
            for (let i = 0; i < jsonData.length; i++) {
              nazivFilma = jsonData[i].nazivFilma;
              godinaIzlaska = jsonData[i].godinaIzlaska;
              nazivZanra = jsonData[i].nazivZanra;
              podaci += `<tr>
                <td>${nazivFilma}</td><td>${godinaIzlaska}</td><td>${nazivZanra}</td>
              </tr>`;
            }
            podaci += `</table>
            `;
          } else {
            podaci = `<h3>Nisu pronađeni podaci niti o jednom filmu </h3>`;
          }
          filmoviPoNazivu.innerHTML = podaci;
        }
      };
      xhttp.open(
        "GET",
        `https://frodo.ess.hr/api/filmovi-po-nazivu-json.php?pojam=${vrijednost}`,
        true
      );
      xhttp.send();
    }
    else{
        filmoviPoNazivu.innerHTML = "";
    }
  });
});