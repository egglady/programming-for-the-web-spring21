let grid = undefined; 
let fill1 = prompt("enter a basic color name for your snowman's bowtie", "red");

function setup ()  {
    createCanvas(windowWidth, windowHeight);
    background(200);
}

function draw () {
    // street
    line(1, 600, 2000, 600);
    line(1, 675, 2000, 675);
    // snowman body
    fill(255);
    strokeWeight(4);
    ellipse(500, 100, 100, 100);
    ellipse(500, 250, 200, 200);
    ellipse(500, 500, 300, 300);
    // snowman arms
    line(354, 390, 412, 201);
    line(587, 201, 635, 300);
    line(635, 300, 552, 362);
    // bowtie
    fill(fill1);
    triangle(500, 160, 550, 140, 550, 175);
    triangle(500, 160, 450, 140, 450, 175);
    // eyes
    fill(0);
    ellipse(475, 90, 10, 10);
    ellipse(525, 90, 10, 10);
    // smile
    noFill();
    strokeWeight(3);
    arc(500, 110, 30, 30, TWO_PI, PI);
    // home
    fill(255, 205, 20);
    strokeWeight(2);
    rect(800, 399, 300, 200);
    triangle(770, 399, 950, 250, 1130, 399);
}
