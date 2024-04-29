const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 220, 25, 160);
ctx.fillRect(400, 220, 25, 160);
ctx.fillRect(258, 230, 110, 100);
ctx.fillRect(270, 330, 25, 140);
ctx.fillRect(330, 330, 25, 140);

ctx.arc(312, 190, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(295, 180, 7, Math.PI, 2 * Math.PI);
ctx.arc(330, 180, 7, Math.PI, 2 * Math.PI);
ctx.fill();
