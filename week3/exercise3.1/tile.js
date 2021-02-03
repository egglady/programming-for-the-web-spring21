function setup() {
 createCanvas(200, 200);
}

function createTile() {

    // checker background
    noStroke();
    fill(195, 240, 180);
    rect(0, 0, 100, 100);

    fill(26, 89, 13);
    rect(100, 0, 100, 100);

    rect(0, 100, 100, 100);

    fill(195, 240, 180);
    rect(100, 100, 100, 100);

    // hexagon
    fill(255);
    beginShape ();
    vertex(88, 80);
    vertex(112, 80);
    vertex(125, 100);
    vertex(112, 120);
    vertex(88, 120);
    vertex(75, 100);
    vertex(88, 80);
    endShape();

    // triangles top
    noStroke();
    fill(0, 128, 47);
    triangle(100, 30, 100, 80, 88, 80);
    fill(0, 190, 40);
    triangle(100, 30, 100, 80, 112, 80);
    // triangles at top right
    fill(0, 128, 47);
    triangle(157, 60, 118, 90, 112, 80);
    fill(0, 190, 40);
    triangle(157, 60, 118, 90, 125, 100);
    // triangles at bottom right
    fill(0, 128, 47);
    triangle(157, 140, 118, 110, 125, 100);
    fill(0, 190, 40);
    triangle(157, 140, 118, 110, 112, 120);

    // triangles at bottom
    fill(0, 128, 47);
    triangle(100, 170, 100, 120, 112, 120);
    fill(0, 190, 40);
    triangle(100, 170, 100, 120, 88, 120);

    // triangles at bottom left
    fill(0, 128, 47);
    triangle(42, 140, 82, 112, 88, 120);
    fill(0, 190, 40);
    triangle(42, 140, 82, 112, 75, 100);

    //triangles at top left
    fill(0, 128, 47);
    triangle(42, 60, 82, 90, 75, 100);
    fill(0, 190, 40);
    triangle(42, 60, 82, 90, 88, 80);

    // circle
    noFill();
    stroke('white');
    strokeWeight(2);
    circle(100, 100, 150);
}
// call the function
function draw() {
    createTile();
}


// use the noLoop method to stop the draw Loop


// translate(0, 0);
// fill('blue');
// rect(0, 0, 200, 200);
// stroke('white');
// strokeWeight(5);
// line(0, 0, 200, 200);
// line(200, 0, 0, 200);
// noStroke();
// fill('yellow');
// circle(100, 50, 50);
// circle(150, 100, 50);
// circle(100, 150, 50);
// circle(50, 100, 50);
// noFill();
// stroke('purple');
// circle(100, 100, 100); 