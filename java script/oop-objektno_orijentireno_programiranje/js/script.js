//deklaracija funkcije konstruktora
function Ucenik(imePrezime, adresa, datumRođenja, ocjena1, ocjena2, ocjena3) {
  //deklaracija i inicijalizacija svojstava
  this.imePrezime = imePrezime;
  this.adresa = adresa;
  this.datumRođenja = datumRođenja;
  this.ocjena1 = ocjena1;
  this.ocjena2 = ocjena2;
  this.ocjena3 = ocjena3;
  //deklaracija metoda
  this.ispisOpcihPodataka = function () {
    console.log(
      "Opći podaci: " +
        this.imePrezime +
        ", " +
        adresa +
        ", " +
        this.datumRođenja
    );
  };
  this.prosjekOcjena = function () {
    return (this.ocjena1 + this.ocjena2 + this.ocjena3) / 3;
    // console.log("Prosjek učenika " + this.imePrezime + " je " + );
  };
}
//kreiranje objekta iz konstruktora funkcije
const pero = new Ucenik(
  "Pero Perić",
  "avenija dubrovnik",
  "01.01.2000.",
  1,
  3,
  5
);
//pero = new Ucenik("Ana Anićć", "avenija dubrovnik 1", "02.02.2000.", 4, 4, 5);
const ana = new Ucenik("Ana Anić", "Matija Mesić 4", "20.02.1989", 5, 2, 3);
//ispis objekta konstruktora
console.log(pero);
//ispis svojstava iz objekta konstruktora
console.log(
  "Opći podaci svojstava objekta: " +
    pero.imePrezime +
    pero.datumRođenja +
    pero.adresa
);
console.log(
  "Opći podaci svojstava objekta: " +
    ana.imePrezime +
    ana.datumRođenja +
    ana.adresa +
    " i ocjene: " +
    ana.ocjena1 +
    ", " +
    ana.ocjena2 +
    ", " +
    ana.ocjena3
);
//poziv metode unutar objetka konstruktora
pero.ispisOpcihPodataka();
ana.ispisOpcihPodataka();
console.log(
  "Prosjek učenika " + pero.imePrezime + " je " + pero.prosjekOcjena()
);
console.log("Prosjek učenika " + ana.imePrezime + " je " + ana.prosjekOcjena());