let rect1;

function setup() {
    createCanvas(600, 600);
    rect1 = new Rect();
    // console.log(quad1.x, quad1.y);
}

function draw() {
    background(0);
    for (i = 0; i < 2; i++) {
        rect1.move();
        rect1.show();
    }
    // for (i = 0; i < 5; i++) {
    //     //console.log(i)
    //     startingX += 150;
    // }
}

class Rect {
    constructor () {
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