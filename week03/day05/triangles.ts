'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/*háromszög alsó oldala
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(121.5, 389);
ctx.lineTo(478.5, 389);
ctx.stroke();*/
let x: number = 121.5;
let y: number = 389;
let h: number = 478.5;
let q: number = 389;

function drawLines1 (x, y, h, q) {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(h, q);
    ctx.stroke();
}

for (let i: number = 0; i < 21; i++) {
    drawLines1(x,y,h,q);
    x += 7.5;
    y -= 15.87;
    h -= 7.5;
    q -= 15.87;
}

x = 121.5;
y = 389;
h = 454.7;
q = 55.8;
for (let j: number = 0; j < 21; j++) {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(h, q);
    ctx.stroke();
}