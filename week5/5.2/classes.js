let x = 100;
let y = 150; 
let rectArray = [];


function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 3; i++) {
        const rect1 = new Rect(x, y);
        rectArray.push(rect1);
        x += 100;
    }
}

function draw() {
    background(0);
    for (let j = 0; j < 3; j++) {
        rectArray[j].move();
        rectArray[j].show();
    }
}

class Rect {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.show();
        this.move();
    }
    move() {
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(200);
        strokeWeight(2);
        fill(255);
        rect(this.x, this.y, 100, 100);
    }
}