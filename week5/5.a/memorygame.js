// let myCard;

const DOWN = 'down';
const UP = 'up';

let cards = [];
let startingX = 120;
let startingY = 100;

let cardback;
let cardfaceArray = [];


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
  let selectedFaces = [];
  for (let a = 0; a < 8; a++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    // each card appears twice in the grid, 16 total
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove cardface
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let b = 0; b < 2; b++) { // 2 rows
    for (let c = 0; c < 8; c++) { // 8 cards each
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
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
  constructor (x, y, cardFaceImage) {
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 220;
    this.face = DOWN;
    this.cardFaceImage = cardFaceImage;
    this.show();
  }
  show () {
    if (this.face === DOWN) {
      // fill(200, 200, 200);
      rect(this.x, this.y, this.width, this.height, 5);
      image(cardback, this.x, this. y);
    } else {
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

// Grid from 4.a
// const rectWidth = 120;
// const rectHeight = 220;
// let myCards = [];
// let startingX = 100;
// let startingY = 100;
// let startingId = 0;
// let clickCount = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
//   for (let k = 0; k < 2; k++) {
//     for (let i = 0; i < 8; i++) {
//       rect(startingX, startingY, rectWidth, rectHeight);
//         myCards.push({ x: startingX, y: startingY, id: startingId }); // pushes these objects into our array, id: i is the loop variable
//         startingX += 150;
//         startingId++;
//     }
//     startingY += 250;
//     startingX = 100;
//   }
//   console.log(myCards);
// }

// function mousePressed() {
//   for (let j = 0; j < myCards.length; j++) {
//       let distance = dist(mouseX, mouseY, myCards[j].x, myCards[j].y);
//       if (distance < rectWidth - 30) {
//         clickCount++;
//         console.log('card has been clicked', myCards[j].id);
//     }
//   }
// }

// function draw () {
//   if(startingId > 0) {
//       noLoop();
//       fill(200);
//       textSize(20);
//       text('Tally: ' + clickCount, 1200, 600);
//   }
// }
