function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, darkGreenSquareX, darkGreenSquareSize, triangleOutline) {
  translate(originX, originY);
  // square background
  noStroke();
  fill(40, 250, 130, 160);
  square(0, 0, 200);

  // checker squares
  noStroke();
  fill(220, 255, 195, 220);
  square(5, 5, 90);
  square(105, 105, 90);
  fill(26, 89, 53);
  square(darkGreenSquareX, 5, darkGreenSquareSize);
  square(5, 105, 90);

  // hexagon
  fill(255, 255, 255);
  beginShape();

  // reusing same values
  var a = 88;
  var b = 80;
  var c = 112;
  var d = 125;
  var e = 100;
  var f = 120;
  var g = 75;

  vertex(88, 80);
  vertex(112, 80);
  vertex(125, 100);
  vertex(112, 120);
  vertex(88, 120);
  vertex(75, 100);
  vertex(88, 80);
  endShape();

  // triangles top
  stroke('white');
  strokeWeight(triangleOutline);
  fill(0, 128, 47);
  triangle(e, 30, e, b, a, b);
  fill(0, 190, 40);
  triangle(e, 30, e, b, c, b);
  // triangles at top right
  fill(0, 128, 47);
  triangle(157, 60, 118, 90, c, b);
  fill(0, 190, 40);
  triangle(157, 60, 118, 90, d, e);
  // triangles at bottom right
  fill(0, 128, 47);
  triangle(157, 140, 118, 110, d, e);
  fill(0, 190, 40);
  triangle(157, 140, 118, 110, c, f);
  // triangles at bottom
  fill(0, 128, 47);
  triangle(e, 170, e, f, c, f);
  fill(0, 190, 40);
  triangle(e, 170, e, f, a, f);
  // triangles at bottom left
  fill(0, 128, 47);
  triangle(42, 140, 82, c, a, f);
  fill(0, 190, 40);
  triangle(42, 140, 82, c, g, e);
  // triangles at top left
  fill(0, 128, 47);
  triangle(42, 60, 82, 90, g, e);
  fill(0, 190, 40);
  triangle(42, 60, 82, 90, a, b);

  // circle
  noFill();
  stroke('white');
  strokeWeight(2);
  circle(100, 100, 150);
}

// call the function
/*  1   2   3
    4   5   6
    7   8   9 */

function draw() {
  noLoop();
  // 1
  createTile(0, 0, 105, 90, 0);
  // 2
  createTile(0, 200, 5, 190, 1);
  // 3
  createTile(0, 200, 105, 90, 0);
  // 4
  createTile(200, -400, 5, 190, 1);
  // 5
  createTile(0, 200, 105, 90, 0);
  // 6
  createTile(0, 200, 5, 190, 1);
  // 7
  createTile(200, -400, 105, 90, 0);
  // 8
  createTile(0, 200, 5, 190, 1);
  // 9
  createTile(0, 200, 105, 90, 0);
}
