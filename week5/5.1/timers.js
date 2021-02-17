let squareX = 0;
let squareY = 0;
let squareColor = 255;
let drawTimer;
const speed = 10;
const distance = 2;

function setup() {
    createCanvas(600, 600);
    background(0);
}

function drawSquare(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

drawTimer = window.setInterval(() => {
    if (squareX - 50 <= width) {
        drawSquare(squareX, squareY, squareColor);
        squareX += distance;
    } else {
        squareX = 0;
        squareY += 50;
    }
    if (squareX - 50 > width && squareY - 50 > height) {
        window.clearInterval(drawTimer);
        // alert('done'); do I have to put this?
    }
}, speed);
