/* eslint-disable no-undef */
function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(220);

    if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80);
    let c = color('hsl(15, 70%, 50%)');
    fill(c);
    noStroke();
    }

    point(80, 40);
    stroke('hsl(200, 80%, 40%)');
    strokeWeight(10);

}

const age = window.prompt("What's your favorite color?");
if (age === "red") {
    console.log("correct");
} else {
    console.log("incorrect");
}
