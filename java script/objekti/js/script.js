var dog = { 
breed: "Golden retriver",
objekt: {
    podatciObjekta: "podatakObjekta"
},
bark: function () {
    return "wuf wuf";
}
};

console.log(dog.objekt.podatciObjekta);
console.log(dog.bark());

var newObject = new Object ();
newObject.breed = "golden retriver";
console.log (newObject.breed);


var dog = {
    breed: "Golden retriever",
    objekt: {
        podaciObjekta: "podatakObjekta"
    },
    bark: function (breed) {
        return this.breed;
    }
};

console.log(dog.objekt.podaciObjekta);
console.log(dog.bark());

var newObject = new Object();

// newObject = {
//     breed: "GoldenRetriver"
// };

// primjer postavljanja svojstva i vrijednost objekta
newObject.breed = "Golden retriever";
console.log(newObject.breed);

newObject["otherBreed"] = "chihuahua";
console.log(newObject["otherBreed"]);
console.log(newObject.otherBreed);
console.log(newObject);
delete newObject.otherBreed;
console.log(newObject);

console.log(newObject.propertyIsEnumerable("breed"));
console.log(newObject.propertyIsEnumerable("bark"));

console.log(JSON.stringify(newObject));


var auto= {
    boja: "crvena",
    brzina: 60,
    maxBrzina:160,
    godinaProizvodnje:2018,
    ubrzaj: function() {
        while(brojSekundi > 0 && this.brzina < this.maxBrzina )
        {this.brzina +=5;
        brojSekundi--;
        }}
};