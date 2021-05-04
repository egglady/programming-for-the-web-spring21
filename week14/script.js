var leftShape;
var rightShape;
let submitAnswerButton;
let startOverButton;

let shapeQuiz = [
  {question: 'Which shape is called kiki and which is called bouba?', first: 'Click on kiki', second: 'Click on bouba'},
  {question: 'Which shape is called takete and which is called maluma?', first: 'Click on takete', second: 'Click on maluma'},
  {question: 'Which shape is called kitiki and which is called lomba?', first: 'Click on kitki', second: 'Click on lomba'},
  {question: 'Which shape is called piki and which is called nooma?', first: 'Click on piki', second: 'Click on nooma'},
  {question: 'Which shape is named Kate and which is named Molly?', first: 'Click on Kate', second: 'Click on Molly' },
  {question: 'Which shape is named Tucker and which is named Ben?', first: 'Click on Tucker', second: 'Click on Ben'},
  {question: 'Which shape is named Kira and which is named Gunner?', first: 'Click on Kira', second: 'Click on Gunner'}
];

function next () {
  if (shapeQuiz.length < 1) {
    window.alert('Check out your results below');
    location.reload;
    return;
  }
  // If I don't want to randomize the questions, what should I put?
  const randomIdx = Math.ceil(Math.random() * shapeQuiz.length - 1);
  return shapeQuiz[randomIdx];
}
function startOver () {
  location.reload();
  return;
}
currentQuestion = next();
let message = currentQuestion.question;
console.log(next());

function setup() {
  createCanvas(600, 600);
  background(200);
  leftShape = new Left();
  rightShape = new Right();
  submitAnswerButton = createButton('Submit');
  submitAnswerButton.size(150, 30);
  submitAnswerButton.position(225, 600);
//  submitAnswerButton.mousePressed(function to add to results);
startOverButton= createButton('Start Over');
startOverButton.size(150, 30);
startOverButton.mousePressed(startOver);
startOverButton.position(250, 50);
}


function draw() {
  // left
  leftShape.show();
  // right
  rightShape.show();
}

function mousePressed() {
 leftShape.clicked();
}
class Left {
  consructor(x, y, r) {
    this.x = 150;
    this.y = 200;
    this.r = 100;
    this.show();
  }
  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.r) {
        console.log('clicked');
    }
}
  show() {
      ellipse(this.x, this.y, this.r * 2);
    // beginShape();
    // vertex(90, 90);
    // vertex(130, 122);
    // vertex(185, 50);
    // vertex(165, 145);
    // vertex(230, 140);
    // vertex(175, 172);
    // vertex(230, 230);
    // vertex(155, 200);
    // vertex(135, 280);
    // vertex(125, 195);
    // vertex(50, 235);
    // vertex(100, 180);
    // vertex(30, 135);
    // vertex(110, 145);
    // endShape(CLOSE);
  }
}

class Right {
  constructor() {
    this.show();
  }
  show() {
    beginShape();
    curveVertex(362, 145); //
    curveVertex(362, 145); //
    curveVertex(370, 70);
    curveVertex(395, 65);
    curveVertex(410, 138); //
    curveVertex(416, 142); //
    curveVertex(480, 95);
    curveVertex(500, 125);
    curveVertex(455, 182); //
    curveVertex(458, 184); //
    curveVertex(510, 180);
    curveVertex(525, 240);
    curveVertex(455, 235); //
    curveVertex(450, 237); //
    curveVertex(460, 285);
    curveVertex(435, 300);
    curveVertex(410, 250); //
    curveVertex(408, 245); //
    curveVertex(360, 295);
    curveVertex(350, 265);
    curveVertex(365, 225); //
    curveVertex(360, 222); //
    curveVertex(308, 255);
    curveVertex(306, 205);
    curveVertex(350, 175); //
    curveVertex(350, 172); //
    curveVertex(305, 160)
    curveVertex(325, 125);
    curveVertex(362, 145); //
    endShape(CLOSE);
  }
}