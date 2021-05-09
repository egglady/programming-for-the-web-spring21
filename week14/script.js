var quizState = {
  state: 0, // initialize, question, next answer, complete, display record
  currentQuestionIndex: 0
}
var responseArray = []; // answers recorded here
var leftShape;
var rightShape;
var leftColor = '#e83f07';
var rightColor = '#e83f07';

let startButton;
let resetButton;
// for making the buttons responsive
const buttonCircle = {
  xPercent: 0.33, // 33%
  yPercent: 0.5, // 50%
  widthPercent: 0.25,
  heightPercent: 0.25
};
// for making the buttons responsive
const buttonState = {
  // 0 intro -- show button
  // 1 quiz -- button is hidden off screen
  phase: 0
};
const shapeQuiz = [
  { question: 'Which shape is called kiki and which is called bouba?', first: 'Click on kiki', second: 'Click on bouba', title: 'Kiki vs. Bouba', firstName: 'kiki', secondName: 'bouba' },
  { question: 'Which shape is called takete and which is called maluma?', first: 'Click on takete', second: 'Click on maluma', title: 'Takete vs. Maluma', firstName: 'takete', secondName: 'maluma' },
  { question: 'Which shape is called kitiki and which is called lomba?', first: 'Click on kitiki', second: 'Click on lomba', title: 'Kitiki vs. Lomba', firstName: 'kitiki', secondName: 'lomba' },
  { question: 'Which shape is called piki and which is called nooma?', first: 'Click on piki', second: 'Click on nooma', title: 'Piki vs. Nooma', firstName: 'piki', secondName: 'nooma' },
  { question: 'Which shape is named Kate and which is named Molly?', first: 'Click on Kate', second: 'Click on Molly', title: 'Kate vs. Molly', firstName: 'Kate', secondName: 'Molly' },
  { question: 'Which shape is named Tucker and which is named Ben?', first: 'Click on Tucker', second: 'Click on Ben', title: 'Tucker vs. Ben', firstName: 'Tucker', secondName: 'Ben' },
  { question: 'Which shape is named Kira and which is named Gunner?', first: 'Click on Kira', second: 'Click on Gunner', title: 'Kira vs. Gunner', firstName: 'Kira', secondName: 'Gunner' },
  { question: 'Click to see your results', first: '', second: '', title: '', firstName: '', secondName: '' }
];

function resetQuiz () {
  location.reload();
}
function setup() {
  createCanvas(600, 650);
  textFont('Lato');
  textSize(16);
  textAlign(CENTER);
  fill(255);
  leftShape = new Left();
  rightShape = new Right();
  startButton = createButton('Start');
  startButton.size(150, 30);
  startButton.position((width / 2 - startButton.width / 2 - 20), 550);
  startButton.mousePressed(startQuiz);
  resetButton = createButton('Reset Quiz');
  resetButton.size(100, 30);
  resetButton.mousePressed(resetQuiz);
  resetButton.position((width / 2 - resetButton.width / 2 - 20), 600);
}
function draw () {
  background('#222');
  // for responsive buttons
  if(buttonState.phase !== 0) {
    circle(width * buttonCircle.xPercent, 550, width * buttonCircle.widthPercent, 550)
  }
  // first state: after initialization, show the shapes and the quiz question
  if (quizState.state > 0 && quizState.state < 3) {
    // left
    leftShape.show(leftColor);
    // right
    rightShape.show(rightColor);
    text(shapeQuiz[quizState.currentQuestionIndex].question, 0, 400, width, 300)
  }
  if (quizState.state === 1) { // first "Click on"
    text(shapeQuiz[quizState.currentQuestionIndex].first, 0, 450, width, 400)
    console.log('first click', quizState.state)
  }
  if (quizState.state === 2) { // second "Click on"
    text(shapeQuiz[quizState.currentQuestionIndex].second, 0, 450, width, 400)
    console.log('second click', quizState.state);
    // add answers for first and second command to responseArray (make the submitButton an event Handler
    // return to quizState question with next idx in shapeQuiz array
  }
  if (quizState.state === 3) {
    text('Complete! You answered:', (width / 2), 50);
    text(responseArray.join(' '), (width / 2), 100)
    // text(responseArray.join(' '), 50, 50, 500, width - 50)
    // end quizState question and quizState response loop
    // indicate that quiz is complete
    // show all results in responseArray
    console.log('state = 3', quizState.state);
  }
}
function startQuiz () {
  quizState.state = 1; // moves to question state
}

function mousePressed () {
  if ((mouseX > 25 && mouseX < 250 && mouseY > 50 && mouseY < 300) && quizState.state > 0) {
    recordResponses(leftShape);
    leftColor = '#669eed'; // blue if clicked
  } else {
    leftColor = '#e83f07'; // red
  }
  if ((mouseX > 305 && mouseX < 525 && mouseY > 65 && mouseY < 300) && quizState.state > 0) {
    recordResponses(rightShape);
    rightColor = '#669eed'; // blue if clicked
  } else {
    rightColor = '#e83f07'; // red
  }
}

function recordResponses (shape) {
  // to push responses into responseArray
  let order;
  if (quizState.state === 1) {
    order = 'firstName';
  }
  if (quizState.state === 2) {
    order = 'secondName';
  }
  responseArray.push(shapeQuiz[quizState.currentQuestionIndex][order] + ' as the ' + shape.name + ' in ' + shapeQuiz[quizState.currentQuestionIndex].title + '\n' + '\n');
  if (shapeQuiz[quizState.currentQuestionIndex + 1] !== undefined) {
    if (order === 'firstName') {
      quizState.state = 2;
    } else if (order === 'secondName') {
      quizState.currentQuestionIndex++; // increment the quiz state
      quizState.state = 1; // return back to first Click on of next question
    }
  } else {
    quizState.state = 3; // no more questions in Array, move to show responses
  }
}
// for responsive buttons
function windowResized () {
  resizeCanvas(windowWidth / 2, 650);
  if (buttonState.phase === 0) {
    startButton.position((width / 2 - startButton.width / 2 - 20), 550);
    resetButton.position((width /2 - resetButton.width / 2 - 20), 600);
  }
}
class Left {
  constructor () {
    this.color = '#e83f07';
    this.name = 'angular shape';
  }
  show (myColor) {
    push();
    fill(myColor);
    strokeWeight(0);
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
    this.color = '#e83f07';
    this.name = 'round shape';
  }
  show (myColor) {
    push();
    fill(myColor);
    strokeWeight(0);
    beginShape();
    curveVertex(362, 145); // comment = outer edge of curve
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