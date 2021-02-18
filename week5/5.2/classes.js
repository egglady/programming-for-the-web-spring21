let quad1;

function setup() {
    createCanvas(600, 600);
    quad1 = new Quad();
    print(quad1.x, quad1.y);
}

function draw() {
    background(0);
    quad1.move();
    quad1.show();
}

class Quad {
    constructor () {
        // this.x = 50;
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
        quad(50, 50, 80, 50, 85, this.y, 45, this.y);
}
}