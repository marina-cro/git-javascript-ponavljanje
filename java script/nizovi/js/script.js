//NIZ OBJEKATA
[
    { name: "Pero", surname: "Perić"},
    { name: "", surname:""},
    { name: "", surname:""},
    { name: "", surname:""},
];

//NIZ BROJEVA
[1, 2, 3, 4, 6, 8, 5];

//NIZ STRINGOVA
var names = ["John", "Jane", "Mike"];
console.log(names);
console.log(typeof names);


var emptyArray = [ ];

var numbArray = [1, , 3];
console.log(numbArray);
console.log(typeof numbArray);

var stringArray = ["john", , "mike"];
console.log(typeof stringArray);

emptyArray = new Array();
console.log(emptyArray);

numbArray = new Array(1, 2, 3);
console.log(numbArray);

stringArray = new Array("john", "jane", "mike");
console.log(stringArray);

console.log(numbArray[0]);

stringArray[3] = "Holly";
console.log(stringArray);

console.log(stringArray.length);

for(var i = 0; i < stringArray.length; i++){
    console.log(stringArray[i]);
}

//push dodaje element na kraj niza
stringArray.push("Sara");
console.log(stringArray);

stringArray.pop();
console.log(stringArray);

//array.splice(početni index, broj elemenata za ukloniti, noviElementi1, ....., noviElementX)
stringArray.splice(1, 1);
stringArray.splice(1, 0, "perica1");

//negativni string kreće od kraja niza
stringArray.splice(-3, 1);
console.log(stringArray);

//filter
const parniBrojevi = numbArray.filter(( broj )=> broj % 2 === 0);

console.log(numbArray);
console.log(parniBrojevi);

const noviStringArray = stringArray.filter((element) => element.includes ("n")); //includes i filter za završni za webshopove
console.log(noviStringArray);

console.log(stringArray.reverse());

console.log(stringArray.sort().reverse())

console.log(numbArray.sort((a, b) => a - b)); //sortira brojeve od najmanjeg do najvećeg

const rezultat= numbArray.map((broj) => broj * 2);
console.log(rezultat);


