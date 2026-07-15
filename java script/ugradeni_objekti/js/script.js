//date
var vrijeme = new Date();
console.log(vrijeme);
var dan = vrijeme.getDate();
console.log(dan);
if (dan <= 9){
    dan = "0" +dan;
}

dan = vrijeme.getDate(2);
dan = new Date (dan); 

var datum4 = vrijeme.setDate(2);
datum4 = new Date (datum4);
console.log(datum4.toLocaleString("hr-HR"));


console.log(dan);
var mjesec = vrijeme.getMonth() + 1;
    if (mjesec <= 9 ){
        mjesec = "0" + mjesec;
    }
console.log(mjesec);
var godina = vrijeme.getFullYear();
console.log(godina);
console.log(dan + "/" + mjesec + "/" + godina);

var datum = new Date (2018, 11, 24, 10, 33, 30, 0);
console.log (datum);
var datum2 = new Date ("october 13, 2014");
console.log(datum2);

var datum3 = new Date (-10000030002);
console.log(datum3);