// PARAMETERIZE

// "EYEROLL"

// vars for eyeroll 1.0
var angle = 0.0;
var offset = 40;
var scalar = 10;
var speed = 0.04;

// vars for eyeroll 2.0
var startI = 20; // x value
var stopI = 500;
var i = startI;
var step = 0.01;
var pct = 0.0;
var angle2 = 0.0;
var speed2 = 0.02;

// vars for eyeroll 3.0
var angle3 = 0.0;
var offset3 = 300;
var scalar3 = -60;
var speed3 = 0.05;


function setup() {
    createCanvas(500, 500);
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
  
    // eyeroll .0
    if (pct < 1.0) {
        i = startI + ((stopI - startI) * pct);
        pct += step;
    }
    fill(255);
    ellipse(i, 200, 50, 50);
    fill(0);
    ellipse(i, y + 160, 20, 20);
    angle2 += speed2;

    // eyeroll 3.0
    var m = offset3 + (cos(angle3)) * scalar3;
    var n = offset3 + (sin(angle3)) * scalar3;
    noStroke();
    fill(255);
    ellipse(m, n, 50, 50)
    fill(0);
    ellipse(m + 5, n + 5, 20, 20);
    angle3 += speed3;
    scalar3 += speed3;
    // }
}


// GRAVEYARD OF OTHER EYEROLLS
// attempt at eyeroll in which: white ellipse moves, black ellipse both rotates and moves (x is doing two things at once - how to represent that?
// x2 += speed2; // increase the value of x2
// fill(255);
// ellipse(x2, 350, 50, 50);
// fill(0);
// var x3 = offset + cos(angle2) * scalar;
// var y2 = offset + sin(angle2) * scalar;
// ellipse(x3, y2, 20, 20);
// // angle2 += speed2;

// eyeroll 2.1 ?
// noStroke();
// var x = offset + cos(angle) * scalar;
// var y = offset2 + sin(angle) * scalar;
// fill(255);
// ellipse(x, y, 50, 50);
// fill(0);
// ellipse(x, y, 20, 20);

// vars for eyeroll 2.1
// var offset2 = 200;