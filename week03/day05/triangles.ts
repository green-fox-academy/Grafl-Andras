'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 0;
let y: number = 334;
let h: number = 357;
let q: number = 334;

function drawLines1 (x, y, h, q) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(h, q);
    ctx.stroke();
}

for (let i: number = 0; i < 21; i++) {
    drawLines1(x,y,h,q);
    x += 8.5;
    y -= 15.866666666666666666666666666667;
    h -= 8.5;
    q -= 15.866666666666666666666666666667;
}

x = 0;
y = 334;
h = 178.5;
q = 0.8;
for (let j: number = 0; j < 21; j++) {
    drawLines1(x,y,h,q);
    x += 17;
    h += 8.5;
    q += 15.87;
}

x = 178.5;
y = 0.8;
h = 357;
q = 334;
for (let k: number = 21; k > 0; k--) {
    drawLines1(x,y,h,q);
    x -= 8.5;
    y += 15.866666666666666666666666666667;
    h -= 17;
}