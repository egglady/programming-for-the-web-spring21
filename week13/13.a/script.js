// inspired by Coding Train tutorial:  https://www.youtube.com/watch?v=NBWMtlbbOag&ab_channel=TheCodingTrain

let angle; // PI/4, or 45 degrees (from diagram of the right triangle)
let angleVelocity = 0;
let angleAcceleration = 0.001; // tied to force, F = m * a (force = mass times acceleration good god)
let bob; 
let armLength;
let origin; // loc where the arm is "attached"
let easing = 0.05;
var slider;

function setup() {
    createCanvas(800, 600);
    angle = PI/4;
    bob = createVector();
    armLength = 250;
    origin = createVector(400, 300);
    slider = createSlider(0, 2, 0.05, 0.05); // first 0.05  is default, second is the step
}

function draw() {
    background('#222');

    angle += angleVelocity * easing;
    angleVelocity += angleAcceleration;
    console.log("angle velocity", angleVelocity);
    // before integrating angleVelocity and angleAcceleration, this was angle += 0.01;
    if (mouseIsPressed == true) {
        angleVelocity = 0;
        fill(255, 0, 0);
    } else {
        fill(255);
    }
  
    // To calculate the bob.x and bob.y:
    // remember that sin Angle = y / z (z is the hypotenuse side)
    bob.x = armLength * sin(angle) + origin.x; 
    bob.y = armLength * cos(angle) + origin.y;

    stroke(255);
    strokeWeight(4);
    line(origin.x, origin.y, bob.x, bob.y); // 
    ellipse(bob.x, bob.y, 60, 60);
    
    easing = slider.value();

}