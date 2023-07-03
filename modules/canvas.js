export function createCanvas() {
    const canvasFrame = document.createElement('canvas');
    canvasFrame.setAttribute('id', 'canvasImg');
    canvasFrame.width = '800';
    canvasFrame.height = '300';
    document.querySelector('#image').appendChild(canvasFrame);
}

export function makeGallowsFrame() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(250, 2);
    ctx.lineTo(250, 250);
    ctx.stroke();
    ctx.moveTo(250, 2);
    ctx.lineTo(400, 2);
    ctx.stroke();
    ctx.moveTo(400, 2);
    ctx.lineTo(400, 50);
    ctx.stroke();
}

export function drowHead() {
    const canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');
    const pi = Math.PI;
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'yellow';
    ctx.arc(400, 75, 25, 2*pi, false);
    ctx.stroke();
}

export function drowBody() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(400, 100);
    ctx.lineTo(400, 200);
    ctx.stroke();
}

export function drowArms() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(400, 125);
    ctx.lineTo(380, 150);
    ctx.stroke();
    ctx.moveTo(400, 125);
    ctx.lineTo(420, 150);
    ctx.stroke();
}

export function drowLegs() {
    let canvas = document.getElementById('canvasImg');
    const ctx = canvas.getContext('2d');       
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.moveTo(400, 175);
    ctx.lineTo(380, 225);
    ctx.stroke();
    ctx.moveTo(400, 175);
    ctx.lineTo(420, 225);
    ctx.stroke();
}