const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // sun
ctx.arc(20, 20, 100, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath(); // clouds
ctx.fillStyle = "rgb(70, 175, 224)";
ctx.arc(200, 70, 30, 0, Math.PI * 2);
ctx.arc(240, 70, 30, 0, Math.PI * 2);
ctx.arc(280, 70, 30, 0, Math.PI * 2);

ctx.arc(400, 70, 30, 0, Math.PI * 2);
ctx.arc(440, 70, 30, 0, Math.PI * 2);
ctx.arc(480, 70, 30, 0, Math.PI * 2);
ctx.fill();

for (let i = 120; i < canvas.height; i = i + 20) { // rain
    for (let j = 205; j < 500; j = j + 10) {
        ctx.beginPath();
        ctx.moveTo(j, i);
        ctx.lineTo(j,i + 10)
        ctx.strokeStyle = "blue";
        ctx.stroke(); 
    }    
}

ctx.beginPath(); // lightning
ctx.moveTo(220, 100);
let posX = 220;
let posY = 100;
for(let i = 0; i < 5; i++) {
    posX = posX + 40;
    ctx.lineTo(posX, posY);
    posX = posX - 20;
    posY = posY + 60;
    ctx.lineTo(posX, posY);
}
posY = posY - 40;
console.log(posY);
ctx.lineTo(posX, posY);
posX = posX - 45;
ctx.lineTo(posX, posY);
console.log(posX, posY);
for(let i = 0; i < 4; i++) {
    posX = posX + 15;
    posY = posY - 60;
    ctx.lineTo(posX, posY);
    posX = posX - 35;
    ctx.lineTo(posX, posY);
}
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.fillStyle = "red"; // house
ctx.fillRect(0, 350, 200, 150);

ctx.beginPath(); // roof
ctx.moveTo(0, 350);
ctx.lineTo(200, 350);
ctx.lineTo(100, 220);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.fillStyle = "black"; // window-frame
ctx.fillRect(20, 370, 50, 50);
ctx.fillStyle = "white"; // window-panel
ctx.fillRect(25, 375, 17, 17);
ctx.fillRect(47, 375, 17, 17);
ctx.fillRect(25, 397, 17, 17);
ctx.fillRect(47, 397, 17, 17);

ctx.fillStyle = "black";
ctx.fillRect(130, 370, 50, 50);
ctx.fillStyle = "white";
ctx.fillRect(135, 375, 17, 17);
ctx.fillRect(157, 375, 17, 17);
ctx.fillRect(135, 397, 17, 17);
ctx.fillRect(157, 397, 17, 17);

ctx.fillStyle = "orange"; // door
ctx.fillRect(140, 450, 30, 50);
ctx.beginPath(); // doorknob
ctx.arc(162, 478, 3, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();

ctx.fillStyle = "rgb(82, 7, 7)"; // ground
ctx.fillRect(0, canvas.height - 100, canvas.width, canvas.height);

ctx.fillStyle = "white"; // fence-lining
ctx.fillRect(220, 470, 360, 10);

for (let i = 220; i < canvas.width; i = i + 50) { // fence picket
    ctx.beginPath();
    ctx.moveTo(i, canvas.height - 100);
    ctx.lineTo(i, canvas.height - 150);
    ctx.lineTo(i + 5, canvas.height - 170);
    ctx.lineTo(i + 10, canvas.height - 150);
    ctx.lineTo(i + 10, canvas.height - 100);
    ctx.closePath();
    ctx.fillStyle = "gray";
    ctx.fill();
}

for (let i = 200; i < canvas.width; i = i + 5) {
    ctx.beginPath();
    ctx.moveTo(i, 500);
    ctx.lineTo(i + 3, 490);
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.lineWidth = 3;
}