function setup ()  {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background(200);
    fill(255);
    ellipse(500, 100, 100, 100);
    ellipse(500, 250, 200, 200);
    ellipse(500, 500, 300, 300);
    strokeWeight(4);
    line(354, 390, 412, 201);
    line(587, 201, 635, 300);
    line(635, 300, 552, 362);
    // bowtie
    fill(255, 65, 0);
    triangle(500, 160, 550, 140, 550, 175);
    triangle(500, 160, 450, 140, 450, 175);
}
