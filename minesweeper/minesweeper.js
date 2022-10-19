const canvas = document.createElement("canvas");

// W: 240, H: 228
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "bisque";
ctx.fillRect(16, 32, 64, 128);