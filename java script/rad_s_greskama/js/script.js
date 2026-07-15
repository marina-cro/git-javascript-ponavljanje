//1PRIMJER
try {
    var x;
    console.log(x);
    if(x === undefined) throw new Error("Greška kod definicije");
} catch (error) {
    console.log("Greška: " + error.name+ " , " + error.message);
}

//2.PRIMJER
var brojnik1 = 0;
var brojnik2 = 2;
try{
    brojnik1 = brojnik2 + 1;
    console.log("kraj bloka koda");
} catch (error) {
    console.log("Greška: " + error.name+ " , " + error.message);
}

finally{
    console.log("ja se uvijek izvršim");
}

//3. PRIMJER
var djeljenik = 10, 
djeljitelj = 20, 
količnik;

try{
    if(djeljitelj == 0) throw "Djeljitelj ne može biti nula 0";
    if(djeljitelj > 10) throw "Djeljitelj ne može biti veći od 10";
    količnik = djeljenik / djeljitelj;
    console.log(količnik);
} catch(error){
    console.log(error);
}

//*4. PRIMJER
try{ if(djelitelj ==0) {
    throw new Error("Djeljitelj ne može biti nula 0");
}

if(djeljitelj > 10) {
    throw new Error("Djeljitelj ne može biti veći od 10");
}
količnik = djeljenik / djeljitelj;
console.log(količnik);

}catch(error){
    console.log("Greška: " + error.message);
}

//5. PRIMJER
try{ 
    if(djeljitelj ==0) {
        const e1 = new Error ("Djeljitelj ne može biti nula 0");
        e1.name = "djeljitelj 0";
        throw e1;
}

if(djeljitelj > 10) {
    const e2 = new Error("Djeljitelj ne može biti veći od 10");
    e2.name = "djeljitelj veći od 10";
    throw e2;
}
količnik = djeljenik / djeljitelj;
console.log(količnik);
}catch(error){
    console.log("Greška: " + error.name + " , " + error.message);
}