function setup() {
  createCanvas(200, 200);
  noLoop();
}

function createTile() {
  translate(0, 0);
  // square
  noStroke();
  fill(40, 250, 130, 180);
  // 40, 250, 130
  square(0, 0, 200);
  // checker squares
  noStroke();
  fill(210, 240, 180, 220);
  rect(5, 5, 90, 90);

  fill(26, 89, 13);
  rect(105, 5, 90, 90);

  rect(5, 105, 90, 90);

  fill(210, 240, 180, 220);
  rect(105, 105, 90, 90);

  // hexagon
  fill(255);
  beginShape ();

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
  noStroke();
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

  //triangles at top left
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
function draw() {
    createTile();
}