let circleX = 40;
let circleY = 0;

let circleWidth = 80;
let circleHeight = 80;
let clickCount = 0;
// let speed;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#0737a8');
  drawShape();
  circleY++;
  if(circleY > height) {
    noLoop();
    text('BADABING! that\'s ' + clickCount, 200, 250); 
  }
}

function mousePressed() {
  if((mouseX >= 40 && mouseX <= 80) && (mouseY >= circleY && mouseY <= circleY + circleHeight)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('#6b97ff');
  noStroke();
  ellipse(40, circleY, 80, circleHeight);
}