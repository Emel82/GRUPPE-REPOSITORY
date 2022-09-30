

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.fillStyle ="#BC002D";
ctx.arc(300, 200, 120, 0, 2 * Math.PI);
ctx.fill();
