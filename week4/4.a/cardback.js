function setup() {
    createCanvas(150, 250);
    background(27, 73, 148);

}

function draw() {
    stroke('#f7a394');
    fill(219, 42, 7, 255);
    rect(5, 5, 140, 240);

    strokeWeight(3);
    // triangle 1
    triangle(75, 125, 25, 5, 50, 5);
    // triangle 2
    triangle(75, 125, 50, 5, 75, 5);
    // triangle 3
    triangle(75, 125, 75, 5, 100, 5);
    // triangle 4
    triangle(75, 125, 100, 5, 125, 5);
    // triangle 5
    triangle(75, 125, 25, 245, 50, 245);
    // triangle 6
    triangle(75, 125, 50, 245, 75, 245);
    // triangle 7
    triangle(75, 125, 75, 245, 100, 245);
    // triangle 8
    triangle(75, 125, 100, 245, 125, 245);
    // bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(25, 5, 10, 100, 10, 150, 25, 245);
    bezier(125, 5, 140, 100, 140, 150, 125, 245);

    // middle line
    line(5, 125, 145, 125);

    strokeWeight(2);
    fill(27, 73, 148, 200);
    ellipse(40, 100, 18, 18);
    ellipse(40, 150, 18, 18);
    ellipse(110, 100, 18, 18)
    ellipse(110, 150, 18, 18);

}
