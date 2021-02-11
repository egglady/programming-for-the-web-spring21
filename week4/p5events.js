// let circleX;
// let circleY;
// let circleWidth;
// let circleHeight;
// let clickCount;
// let speed;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#0737a8');
  drawShape();
}

function mousePressed() {
  if((mouseX >= 0 && mouseX <= 60) && (mouseY >= 0 && mouseY <= 60)) {
    console.log('hit');
  }
}

function drawShape() {
  fill('#6b97ff');
  noStroke();
  ellipse(30, 30, 60, 60);
}