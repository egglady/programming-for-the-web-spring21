// let circleX = 40;
let circleY = 0;
let circleX;
let circleWidth = 80;
let circleHeight = 80;
let clickCount = 0;
let speed;

function setup() {
  createCanvas(500, 500);
  circleX = random(width - circleWidth);
  speed = random(1, 4);
}

function draw() {
  background('#0737a8');
  drawShape();
  circleY++;
  circleY += speed;
  if(circleY > height) {
    noLoop();
    text('BADABING! that\'s ' + clickCount, 200, 250); 
  }
}

function mousePressed() {
  if((mouseX >= circleX && mouseX <= circleX + circleWidth) && (mouseY >= circleY && mouseY <= circleY + circleHeight)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('#6b97ff');
  noStroke();
  ellipse(circleX, circleY, circleWidth, circleHeight);
}