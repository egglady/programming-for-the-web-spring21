const DOWN = 'down';
const UP = 'up';

let startingX = 120;
let startingY = 100;

const cards = [];

let cardback;
let cardfaceArray = [];

const gameState = {
  totalPairs: 8,
  flippedCards: [],
  matched: 0,
  attempts: 0,
  waiting: false
};

function preload() {
  cardback = loadImage('images/cardback.png');
  cardfaceArray = [
    loadImage('images/brie.png'),
    loadImage('images/feta.png'),
    loadImage('images/cheddar.png'),
    loadImage('images/gorgonzola.png'),
    loadImage('images/manchego.png'),
    loadImage('images/gouda.png'),
    loadImage('images/parmesan.png'),
    loadImage('images/swiss.png')
    ]
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  let flippedFaces = [];
  for (let a = 0; a < 8; a++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    // each card appears twice in the grid, 16 total
    flippedFaces.push(face);
    flippedFaces.push(face);
    // remove cardface
    cardfaceArray.splice(randomIdx, 1);
  }
  flippedFaces = shuffleArray(flippedFaces);
  for (let b = 0; b < 2; b++) { // 2 rows
    for (let c = 0; c < 8; c++) { // 8 cards each
      const cardfaceImage = flippedFaces.pop();
      cards.push(new Card(startingX, startingY, cardfaceImage));
        startingX += 140;
      }
        startingY += 250;
        startingX = 120; // restarting X in the second row
    }
}
function draw() {
  background('#222');
  // winning
  if (gameState.matched === gameState.totalPairs) {
    fill('magenta');
    textSize(40);
    text('Booyah! You win', 520, 650);
    noLoop();
  }
  // not matching
  for (let d = 0; d < cards.length; d++) {
    if(!cards[d].isMatch) {
      cards[d].face = DOWN;
    }
    cards[d].show(); // keep the cards up if they are a match
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill(255);
  textSize(30);
  text('matches: ' + gameState.matched, 100, 620);
  text('attempts: ' + gameState.attempts, 100, 670);
}
function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let d = 0; d < cards.length; d++) {
    if (gameState.flippedCards.length < 2 && cards[d].didHit(mouseX, mouseY)) {
      gameState.flippedCards.push(cards[d]);
      console.log('flipped', cards[d]); // which cards in the array are flipped over
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++; // increment an attempt
    if (gameState.flippedCards[0].cardFaceImage === gameState.flippedCards[1].cardFaceImage) {
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      gameState.flippedCards.length = 0;
      gameState.matched++; // increment a match
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000) // keep the unmatched cards up for 1 sec before flipping them over again
    }
    }
}
class Card {
  constructor (x, y, cardfaceImage) {
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 220;
    this.face = DOWN;
    this.cardFaceImage = cardfaceImage;
    this.show();
  }
  show () {
    if (this.face === DOWN) {
      // the cardback
      rect(this.x, this.y, this.width, this.height, 5);
      image(cardback, this.x, this. y);
    } else {
      // the blue background and the cheese image
      fill(27, 73, 148);
      rect(this.x, this.y, this.width, this.height, 5);
      image(this.cardFaceImage, this.x, this.y);
    }
  }
  didHit (mouseX, mouseY) {
    if((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height)) {
      this.flip();
      return true;
    } else {
        return false;
    }
  }
  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    } 
    this.show();
  }
}
// SHUFFLE FUNCTION
function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}




// NOTES
// naming key:
// cardback - the back of the card that I designed
// cardfaceArray - the array where all my images of cheeses are loaded, to be spliced out when matched
// cards []
// face
// flippedFaces - the cards someone clicked on to see if they’re a match
// cardfaceImage - the cheese picture on the card face
// flippedCards - for verifing Matches

// naming for Loops:
// a - for randomizing the cards, pushing them to flippedFaces, and removing them from the array
// b - sets up the grid of cards with two rows
// c - sets up the grid of cards with 8 cards in each row
// d - in draw and mousePressed: what cards were flipped, and are they a match, if so, keep them up