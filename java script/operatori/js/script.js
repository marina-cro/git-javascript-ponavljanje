var  broj1 = 10, 
broj2 = 7, 
broj3 = 3, 
broj4 = 5, 
broj5 =2;

const pi = 3.14;
var istinitavarijabla = true;

//LOGIČKI OPERATORI
//&& (operator i) - obje tvrdnje moraju biti točne da bi izraz bio točan
// || (operator ili) - jedna tvrdnja mora biti točna da bi iuzraz bio točan - altgr+w
//! (operator ne) - vraća suprotnu vrijednost i negira tvrdnju u uvjetovanju
console.log(
    broj1 < 10 || broj3 == 3 && broj4 < broj5 || broj4 + broj5 == broj2
);

console.log(!istinitavarijabla);
var laznaVarijabla = !istinitavarijabla;

console.log(laznaVarijabla);


//ARITMETIČKI OPERATORI
// + ZBRAJANJE
// - ODUZIMANJE
// * MNOŽENJE
// / DIJELJENJE
// % MODULO - vraća ostatak nakon dijeljenja
//** POTENCIRANJE - vraća rezultat potenciranja
//++ INKREMENT - povećava vrijednost varijable za 1
//-- DEKREMENT - smanjuje vrijednost varijable za 1

//4/2 = rezultat je 2 a ostatk je 0
//3/2 = rezultat je 1 a ostatak je 1

console.log (4 % 2);
console.log(7 % 4);
var novibroj = broj2 **4;
console.log(novibroj);
console.log(novibroj **3);
console.log(--broj1);

for(var i = 0; i<10; i++){
    var rezultat = i;
    console.log(rezultat);
}