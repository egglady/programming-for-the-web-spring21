// let myCard;

const DOWN = 'down';
const UP = 'up';

let cards = [];
let startingX = 120;
let startingY = 100;

let cardback;
let cardfaceArray = [];

// const gameState = {
//   totalPairs: 8,
//   flippedCards: [],
//   numMatched: 0,
//   attempts: 0,
//   waiting: false

// };


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
  background(0);
 // myCard = new Card();
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

function mousePressed() {
  // console.log(myCard.didHit(mouseX, mouseY));
  for (let d = 0; d < cards.length; d++) {
    if(cards[d].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[d]); // which cards in the array are flipped over
    }
  }
}

// function draw () {
//   if(startingId > 0) {
//       noLoop();
//       fill(200);
//       textSize(20);
//   }
// }

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

// naming key:
// cardback - the back of the card that I designed
// cardfaceArray - the array where all my images of cheeses are loaded, to be spliced out when matched
// cards []
// face
// flippedFaces - the cards someone clicked on to see if they’re a match
// cardfaceImage - the cheese picture on the card face

// naming for Loops:
// a
// b
// c
// d
