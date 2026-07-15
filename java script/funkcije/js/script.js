//definicija funkcije
function nazivFunkcije(value2){
    var value = 1;
    return value;
    //sljedeći kod se neće izvršiti zbog ključne riječi return
    value += 1;

}
function udaljenostKoordinata(x1, y1, x2, y2){
    var dx = x2 - x1;
    var dy = y2 - y1;
    console.log(Math.sqrt(dx*dx + dy*dy));
}

udaljenostKoordinata(3, 4, 6, 9);
udaljenostKoordinata(1, 1, 3, 4);
udaljenostKoordinata(2, 4, 6, 8);
udaljenostKoordinata(3, 4, 6, 9);
udaljenostKoordinata(3, 4, 6, 9);

function myFunction(a, b) {
    if (!b) {
        b = 1;
    }

    if (!a) {
        a = 1;
    }

    return a + b;
}

console.log(myFunction(6, 9));
console.log(myFunction(6));
console.log(myFunction(0, 2));

function myFunc(a, b) {
    b = b || 1;
    return a + b;
}

console.log(myFunc(6, 9));
console.log(myFunc(6));
console.log(myFunc(0, 2));

function myFunction(a = 1, b = 1) {
    return a + b;
}

console.log(myFunction(6, 9));
console.log(myFunction(6));
console.log(myFunction(0, 2));


//funkcija kao vrijednost
var addOne = function( value){
    return value +1;
};

var myVar = addOne(7);
console.log(myVar);

myVar =addOne(8);
console.log(myVar);