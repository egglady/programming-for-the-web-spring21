var quizState = 'question';
var leftShape;
var rightShape;
var leftColor = 'red';
var rightColor = 'pink';
var responseArray = [];
let command = '';
let whichShape = 'first';
let submitAnswerButton;
let startOverButton;
let message = '';
let currentQuestion = 0;

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
}
// function ask(questionNumber) {
//     const response = 
// }
function startOver () {
  location.reload();
  return;
}
// currentQuestion = next();
// message = currentQuestion.question;
// console.log(next());

function setup() {
  createCanvas(600, 600);
  textFont('Lato');
  textSize(16);
  textAlign(CENTER);
  leftShape = new Left();
  rightShape = new Right();
  submitAnswerButton = createButton('Submit');
  submitAnswerButton.size(CENTER, 30);
  submitAnswerButton.position(CENTER, 600);
  submitAnswerButton.mousePressed(function () {
  currentQuestion++; // function to be eventHandler to update quiz state and move to next question until finish for eventHandler
 });
  startOverButton = createButton('Start Over');
  startOverButton.size(150, 30);
  startOverButton.mousePressed(startOver);
  startOverButton.position(250, 50);
}
function draw() {
  background(200);
  // left
  leftShape.show(leftColor);
  // right
  rightShape.show(rightColor);
  text(message, 45, 400, 500, 300)
  text(command, 45, 440, 500, 300);
  if (quizState === 'initialize') {
    // stop the loop of draw
    // ask the question
    // set quiz state to question
  }
  if (quizState === 'question') {
    // display question as message
    message = shapeQuiz[currentQuestion].question;
    // display first command
    // register click as leftShape or rightShape
    command = shapeQuiz[currentQuestion][whichShape];
    // display second command
    // register click as leftShape or rightShape
  }
  if (quizState === 'submit') {
    // add answers for first and second command to responseArray (make the submitButton an event Handler
    // return to quizState question with next idx in shapeQuiz array
  
  }
  if (quizState === 'finish') {
    //
  }
}

function mousePressed() {
    if (mouseX > 25 && mouseX < 250 && mouseY > 50 && mouseY < 300) {
        leftColor = 'blue';
        whichShape = 'second';
    } else {
        leftColor = 'red';
    }
    if (mouseX > 305 && mouseX < 525 && mouseY > 65 && mouseY < 300) {
        rightColor = 'green';
    } else {
        rightColor = 'pink';
    }
}


class Left {
  constructor() {
    this.color = 'red';
  }
  show(myColor) {
    console.log(this.color);
    push();
    fill(myColor);
    beginShape();
    vertex(80, 80);
    vertex(130, 122);
    vertex(185, 50);
    vertex(165, 145);
    vertex(245, 130);
    vertex(175, 172);
    vertex(250, 240);
    vertex(160, 205);
    vertex(130, 300);
    vertex(120, 205);
    vertex(50, 235);
    vertex(100, 180);
    vertex(25, 135);
    vertex(105, 140);
    endShape(CLOSE);
    pop();
  }
}

class Right {
  constructor() {
    this.color = 'pink';
  }
  show(myColor) {
    console.log(this.color);
    push();
    fill(myColor);
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
    pop();
  }
}