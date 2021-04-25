// inspired by Coding Train tutorial:  https://www.youtube.com/watch?v=NBWMtlbbOag&ab_channel=TheCodingTrain

let angle; // PI/4, or 45 degrees (from diagram of the right triangle)
let angleVelocity = 0;
let angleAcceleration = 0.001; // tied to force, F = m * a (force = mass times acceleration good god)
let planet;
let armLength;
let origin; // loc where the arm is "attached"
let easing = 0.05;
var slider;

var sun;


function preload() {
    sun = loadImage("img/sun_emoji.png");
}

function setup() {
    createCanvas(800, 600);
    angle = PI/4;
    planet = createVector(); // was bob
    armLength = 250;
    origin = createVector(400, 300);
    slider = createSlider(0, 2, 0.05, 0.05); // first 0.05  is default, second is the step
    slider.position(75, 320)
    slider.style('width', '200px')
}

function draw() {
    background(4, 4, 20);
    image(sun, 350, 250);

    angle += angleVelocity * easing;
    angleVelocity += angleAcceleration;
    console.log("angle velocity", angleVelocity);
    // before integrating angleVelocity and angleAcceleration, this was angle += 0.01;
    if (mouseIsPressed == true) {
        angleVelocity = 0;
        fill(255, 0, 0);
    } else {
        fill(163, 44, 21);
    }
  
    // To calculate the planet.x and planet.y:
    // remember that sin Angle = y / z (z is the hypotenuse side)
    planet.x = armLength * sin(angle) + origin.x; 
    planet.y = armLength * cos(angle) + origin.y;
    strokeWeight(0);
    line(origin.x, origin.y, planet.x, planet.y);

    stroke('rgba(250, 131, 107, 0.3)');
    strokeWeight(8);
    ellipse(planet.x, planet.y, 65, 65);
    
    easing = slider.value();

}