function setup() {
    createCanvas(120, 220);

}

function draw() {
    noStroke();
    fill(27, 73, 148);
    rect(0, 0, 120, 220, 5);
    stroke('#f7a394');
    fill(219, 42, 7, 255);
    rect(5, 5, 110, 210);

    strokeWeight(3);
    // triangle 1
    triangle(60, 110, 20, 5, 40, 5);
    // triangle 2
    triangle(60, 110, 40, 5, 60, 5);
    // triangle 3
    triangle(60, 110, 60, 5, 80, 5);
    // triangle 4
    triangle(60, 110, 80, 5, 100, 5);
    // triangle 5
    triangle(60, 110, 20, 215, 40, 215);
    // triangle 6
    triangle(60, 110, 40, 215, 60, 215);
    // triangle 7
    triangle(60, 110, 60, 215, 80, 215);
    // triangle 8
    triangle(60, 110, 80, 215, 100, 215);
    // bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(18, 5, 8, 80, 8, 120, 18, 215);
    bezier(102, 5, 112, 80, 112, 120, 102, 215);

    // middle line
    line(5, 110, 115, 110);

    strokeWeight(2);
    fill(27, 73, 148, 200);
    ellipse(30, 90, 16, 16);
    ellipse(30, 130, 16, 16);
    ellipse(90, 90, 16, 16)
    ellipse(90, 130, 16, 16);

}
