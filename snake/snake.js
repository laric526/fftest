const canvas = document.createElement("canvas");

canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
s
ctx.fillStyle = "bisque";
ctx.fillRect(16, 32, 8, 24);