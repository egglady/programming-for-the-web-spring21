function setup() {
    createCanvas(500, 500);
}

function draw() {
background(7, 21, 117);
  for (x = 0; x < width; x += 50) {
    for (y = 0; y < width; y += 50) {
        rotate(mouseX / 100.0);
        stroke(255);
        strokeWeight(2);
        fill(255, 124, 163);
        ellipse(x + 25, y + 25, 40, 40);
    }
  }
}