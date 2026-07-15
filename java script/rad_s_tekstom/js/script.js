var mystring = "      ";

//lenght - vraća duljinu znakovnog niza
//trim - miče razmake sa početka i kraja znakovnog niza
console.log(mystring.length);

var x = "hello," + "world";
var y = "3" +"5";
console.log(x);
console.log(y);
var viseRedova = 
"ovo je \\\vrlo dug tekst \n "+
 "koji je u dva reda \n" + 
"jer se inače ne može čitati \r\npozdrav";

console.log(viseRedova);
console.log(viseRedova.charAt(10));
console.log(viseRedova.indexOf("čitati"));

var voce = "banana jabuka jagoda višnja" ;
var nizVoce = voce.split("j");
console.log(nizVoce);
//console.log(nizVoce[2]);

var divElement = document.getElementsByTagName("div");
divElement[0].innerText = "div element";
console.log(divElement[0]);

divElement[0].innerText += " div element";
divElement[0].innerHTML += "<h1>Naslov stranice</h1>";

var brojac = 1;
console.log(brojac);

console.log(voce);
console.log(voce.replace("jabuka", "naranča"));
console.log(voce.replaceAll("jabuka", "naranča"));
console.log(div);
console.log(voce.toUpperCase());
console.log(voce.search("jabuka"));
var mixVoce= voce.concat(" Šljiva, kruška, šipak");
console.log(mixVoce);
console.log(voce.replaceAll(" ,", " "));