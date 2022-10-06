let norge = document.querySelector("#norge");
let flagg1= norge.getContext("2d");

flagg1.fillStyle = "#FFFFFF"; // hvit
flagg1.fillRect(0,0,220,150);
flagg1.fillStyle = '#EF2B2D'; // rød
flagg1.fillRect(0,0,60,60);
flagg1.fillStyle = '#002868'; // blå v
flagg1.fillRect(70,0,20,150);
flagg1.fillStyle = '#002868'; // blå h
flagg1.fillRect(0,70,220,20);
flagg1.fillStyle = '#EF2B2D'; // rød
flagg1.fillRect(0,100,60,60);
flagg1.fillStyle = '#EF2B2D'; // rød
flagg1.fillRect(100,0,120,60);
flagg1.fillStyle = '#EF2B2D'; // rød
flagg1.fillRect(100,100,120,60);

let island = document.querySelector("#island");
let flagg2 = island.getContext("2d");

flagg2.fillStyle = '#FFFFFf'; // hvit
flagg2.fillRect(0,0,217,150);
flagg2.fillStyle = '#024f9c'; // blå
flagg2.fillRect(0,0,60,60);
flagg2.fillStyle = '#dc1e35'; // rød v
flagg2.fillRect(70,0,20,150);
flagg2.fillStyle = '#dc1e35'; // rød h
flagg2.fillRect(0,70,217,20);
flagg2.fillStyle = '#024f9c'; // blå
flagg2.fillRect(0,100,60,60);
flagg2.fillStyle = '#024f9c'; // blå
flagg2.fillRect(100,0,117,60);
flagg2.fillStyle = '#024f9c'; // blå
flagg2.fillRect(100,100,117,60);

let sverige = document.querySelector("#sverige");
let flagg3 = sverige.getContext("2d");

flagg3.fillStyle = '#006AA7'; // blå
flagg3.fillRect(0,0,75,60);
flagg3.fillStyle = '#FECC02'; // gul v
flagg3.fillRect(60,0,30,150);
flagg3.fillStyle = '#FECC02'; // gul h
flagg3.fillRect(0,60,240,30);
flagg3.fillStyle = '#006AA7'; // blå
flagg3.fillRect(0,90,60,75);
flagg3.fillStyle = '#006AA7'; // blå
flagg3.fillRect(90,0,150,60);
flagg3.fillStyle = '#006AA7'; // blå
flagg3.fillRect(90,90,150, 60);
