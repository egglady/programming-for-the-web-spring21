let rect1;
let rect2;
// let startingX = 100;
// let startingY = 120;
// let rects = [];

function setup() {
    createCanvas(600, 600);
    rect1 = new Rect();
    rect2 = new Rect(); // (startingX, startingY)??
}

function draw() {
    background(0);
    for (i = 0; i < 3; i++) {
        // console.log([i]);
        rect1.move();
        rect1.show();
        rect2.move();
        rect2.show();
        // rects.push(new Rect(startingX, startingY));
        // startingX += 150;
    }
}

class Rect {
    constructor (x, y) {
        this.x = 50;
        this.y = 80;
    }
    move() {
        // this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(200);
        strokeWeight(2);
        fill(255);
        rect(50, this.y, 100, 100);
    }
}