function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(220);

    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 80, 80);
    }
    let c = color('hsl(15, 70%, 50%)');
    fill(c);
    noStroke();
}
