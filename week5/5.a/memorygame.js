let myCard;

const DOWN = 'down';
const UP = 'up';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  myCard = new Card();
}

function mousePressed() {
  console.log(myCard.didHit(mouseX, mouseY));
}

// function draw () {
//   if(startingId > 0) {
//       noLoop();
//       fill(200);
//       textSize(20);
//   }
// }

class Card {
  constructor () {
    this.x = 100;
    this.y = 100;
    this.width = 80;
    this.height = 100;
    this.face = DOWN;
    this.show();
  }
  show () {
    if (this.face === DOWN) {
      fill(200, 200, 200);
      rect(this.x, this.y, this.width, this.height, 5);
    } else {
      fill(255, 0, 0);
      rect(this.x, this.y, this.width, this.height, 5);
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