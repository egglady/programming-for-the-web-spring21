// const circleDiameter = 100;
const rectWidth = 120;
const rectHeight = 220;
let myCards = [];
let startingX = 100;
let startingY = 100;
let startingId = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 8; i++) {
     rect(startingX, startingY, rectWidth, rectHeight);
        myCards.push({ x: startingX, y: startingY, id: startingId }); // pushes these objects into our array, id: i is the loop variable
        startingX += 150;
        startingId++;
    }
    startingY += 250;
    startingX = 100;
  }
  console.log(myCards);
}

function mousePressed() {
  for (let j = 0; j < myCards.length; j++) {
      let distance = dist(mouseX, mouseY, myCards[j].x, myCards[j].y);
      if (distance < rectWidth - 30 && rectHeight - 30) {
        console.log('card has been clicked', myCards[j].id);
    }
  }
}


// target zone of where the mouse presses to the rect