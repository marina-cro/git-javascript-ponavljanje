var idIntervala;
var idIntervala2;
function sat1() {
  idIntervala = window.setInterval(vrijeme, 1000);
  console.log(idIntervala);
}
function zaustaviSat() {
  clearInterval(idIntervala);
  console.log(idIntervala);
}
function vrijeme() {
  var datumVrijeme = new Date();
  var sat = datumVrijeme.getHours();
  var minute = datumVrijeme.getMinutes();
  var sekunde = datumVrijeme.getSeconds();
  if (sat <= 9) {
    sat = "0" + sat;
  }
  if (minute <= 9) {
    minute = "0" + minute;
  }
  if (sekunde <= 9) {
    sekunde = "0" + sekunde;
  }
  var ispisSata = sat + ":" + minute + ":" + sekunde;
  var ispis = document.getElementById("sat1");
  ispis.innerHTML = ispisSata;
}
function sat2() {
  var datumVrijeme = new Date();
  var sat = datumVrijeme.getHours();
  var minute = datumVrijeme.getMinutes();
  var sekunde = datumVrijeme.getSeconds();
  if (sat <= 9) {
    sat = "0" + sat;
  }
  if (minute <= 9) {
    minute = "0" + minute;
  }
  if (sekunde <= 9) {
    sekunde = "0" + sekunde;
  }
  var ispisSata = sat + ":" + minute + ":" + sekunde;
  var ispis = document.getElementById("sat2");
  ispis.innerHTML = ispisSata;
  idIntervala2 = setTimeout(sat2, 1000);
}
function zaustaviSat2() {
  clearTimeout(idIntervala2);
}
///alert
function pozdrav() {
  alert("Pozdrav, \ndobrodošli na moju stranicu");
}
//confirm
function odabirOpcije() {
  var odgovor = confirm("Odaberite jednu opciju");
  console.log(odgovor);
  if (odgovor == true) {
    alert("Odabrali ste U redu");
  } else {
    alert("Odabrali ste Odustani");
  }
}
//prompt
function ocjena() {
  var odgovor = prompt(
    "Kako Vam se sviđa naša stranica?",
    "Najbolja stranica ikada!"
  );
  if (odgovor != null && odgovor.trim() != "") {
    alert("Vaš odgovor je " + odgovor);
  } else {
    alert("Niste ocjenili našu stranicu");
  }
}
//prozor - open(), close()
var prozor;
function otvoriProzor() {
  prozor = open("https://uciliste-brod.hr/");
  console.log(prozor);
  //   open("https://uciliste-brod.hr/", "_self");
  //_self - otvara u trenutnom prozoru
  //   prozor = open(
  //     "https://uciliste-brod.hr/",
  //     "Novi prozor",
  //     "width=600px, height = 200px, left=50%, top=50%"
  //   );
}
function zatvoriProzor() {
  if (!prozor || prozor.closed) {
    alert("Kako bi zatvorili prozor najprije ga otvorite");
  } else {
    prozor.close();
  }
}
//navigator object
function navigator() {
  console.log(navigator.appName);
  console.log(navigator.appCodeName);
  console.log(navigator.appVersion);
}
function karakteristikeZaslona() {
  var p = document.getElementById("karakteristike-zaslona");
  p.innerHTML = "Dimenzije zaslona: " + screen.availWidth + "px X" + screen.availHeight + "px \n Prikaz boja:" + screen.colorDepth + "bita";
}
 //location.href - otvara novi prosliđeni url
function zaslon(){
    location.href = "karakteristike_zaslona.html";
}

//histor.back - vraća nas na predhodnu stranicu - ZA STRANICU
function natrag(){
    history.back();
}