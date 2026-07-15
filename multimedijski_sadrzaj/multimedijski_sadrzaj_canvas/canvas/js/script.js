function crtez() {
    //linija
    var c1 = document.getElementById("platno 1");
    var ctx1 = c1.getContext("2d");

    ctx1.beginPath();
    ctx1.moveTo(70, 100);
    ctx1.lineTo(500, 80);
    ctx1.lineWidth = 3;
    ctx1.strokeStyle ="blue";
    ctx1.stroke()


    //kvadrat
    var c2 = document.getElementById("platno 2");
    var ctx2 = c2.getContext("2d");

    ctx2.beginPath();
    ctx2.rect(20, 20, 150, 150);
    ctx2.fillStyle = "blue";
    ctx2.fill();    
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 2;
    ctx2.stroke();

    //krug
    var c3 = document.getElementById("platno 3");
    var ctx3 = c3.getContext("2d");

    var centerX = c3.width / 2;
    var centerY = c3.height / 2;
    var radius = 80;

    ctx3.beginPath();
    ctx3.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx3.fillStyle = "red";
    ctx3.fill();
    ctx3.strokeStyle = "green";
    ctx3.lineWidth = 10;
    ctx3.stroke();

    //proizvoljni oblici
    var c4 = document.getElementById("platno 4");
    var ctx4 = c4.getContext("2d");

    ctx4.beginPath();
    ctx4.moveTo(170, 80);
    ctx4.bezierCurveTo(130, 100, 130, 150, 150, 230, 150);
    ctx4.bezierCurveTo(250, 180, 320, 180, 340, 150);
    ctx4.bezierCurveTo(420, 150, 420, 120, 390, 100);
    ctx4.bezierCurveTo(430, 40, 370, 30, 340, 50);
    ctx4.bezierCurveTo(320, 5, 250, 20, 250, 50);
    ctx4.bezierCurveTo(200, 5, 150, 20, 170, 80);
    ctx4.closePath();
    ctx4.fillStyle = "green";
    ctx4.fill();
    ctx4.strokeStyle = "blue";
    ctx4.lineWidth = 5;
    ctx4.stroke();

    //tekst sa sjenom
    var c5 = document.getElementById("platno 5");
    var ctx5 = c5.getContext("2d");

    ctx5.save();
    ctx5.shadowColor = "grey";
    ctx5.shadowBlur = 4;
    ctx5.shadowOffsetX = 7;
    ctx5.shadowOffsetY = 7;
    
    ctx5.font = "Italic small-caps bold 40px 'Courier New'";
    ctx5.fillStyle = "orange";
    ctx5.fillText("Hello World!", 10, 90);
   // ctx5.strokeStyle = "orange";
    //ctx5.strokeText("Hello World!", 10, 90);
    ctx5.restore();

    ctx5.save();
    ctx5.shadowColor = "grey";
    ctx5.shadowBlur = 1;
    ctx5.shadowOffsetX = 1;
    ctx5.shadowOffsetY = 1;
   
    ctx5.font = "Italic small-caps bold 30px 'Courier New'";
    ctx5.fillStyle = "gold";
    ctx5.fillText("Pozdrav svijete!", 10, 150);
    ctx5.restore();

//Gradijent
  var c6 = document.getElementById("platno 6");
  var ctx6 = c6.getContext("2d");

  ctx6.beginPath();
  var grd = ctx6.createLinearGradient(0, 0, 600, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(0.25, "yellow");
  grd.addColorStop(0.5, "green");
  grd.addColorStop(0.75, "purple");
  grd.addColorStop(1, "blue");
  ctx6.fillStyle = grd;
  ctx6.fillRect(0, 0, 600, 200);

//slika
 var c7 = document.getElementById("platno 7");
  var ctx7 = c7.getContext("2d");
  ctx7.beginPath();
  var slika = new Image();
  slika.onload = function () {
    ctx7.drawImage(slika, 10, 10, 320, 200);
  };
  slika.src = "../slike/POUB-logo.jpg";
  ctx7.beginPath();
  ctx7.font = "italic bold 40px 'Courier new'";
  ctx7.fillStyle = "purple";
  ctx7.fillText("POUB", 400, 200);

}