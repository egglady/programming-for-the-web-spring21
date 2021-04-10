// PARAMETERIZE

// EYEROLL

// vars for eyeroll 1.0
var angle = 0.0;
var offset = 40;
var scalar = 10;
var speed = 0.04;

// vars for eyeroll 2.0
var offset2 = 200;

// vars for eyeroll 2.1
var radius = 40;
var x2 = -radius;
var speed2 = 0.5;
var y2 = 400;
var angle2 = 0.0;


function setup() {
    createCanvas(500, 500);
    // frameRate needed for movement?
    // frameRate(10);
    ellipseMode(RADIUS);

}
function draw() {
    background(200);
    // eyeroll 1.0
    noStroke();
    fill(255);
    ellipse(40, 40, 50, 50);
    fill(0);
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    ellipse(x, y, 20, 20);
    angle += speed;
    // eyeroll 2.0 ?
    noStroke();
    var x = offset + cos(angle) * scalar;
    var y = offset2 + sin(angle) * scalar;
    fill(255);
    ellipse(x, y, 50, 50);
    fill(0);
    ellipse(x, y, 20, 20);
    angle += speed;
    // eyeroll 2.1
    x2 += speed2; // increase the value of x2
    fill(255);
    ellipse(x2, 400, 50, 50);
    fill(0);
    // var x = offset + cos(angle2) * scalar;
    // var y2 = offset + sin(angle2) * scalar;
    ellipse(x2, y2, 20, 20);
    angle2 += speed2;
}

