const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.clientWidth = window.innerWidth;
canvas.clientHeight = window.innerHeight;

ctx.fillStyle = "bisque";
ctx.fillRect(16, 32, 8, 24);