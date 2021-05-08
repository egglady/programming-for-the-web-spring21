var quizState = {
  state: 0, // initialize, question, next answer, complete, display record
  currentQuestionIndex: 0
}
var responseArray = []; // answers recorded here
var leftShape;
// var leftNames = ['kiki', 'takete', 'kitiki', 'piki', 'Kate', 'Tucker', 'Kira'];
var rightShape;
// var rightNames = ['bouba', 'maluma', 'lomba', 'nooma', 'Molly', 'Ben', 'Gunner']
var leftColor = 'red';
var rightColor = 'pink';

let startButton;
let submitAnswerButton;
let startOverButton;

let shapeQuiz = [
  {question: 'Which shape is called kiki and which is called bouba?', first: 'Click on kiki', second: 'Click on bouba', title: 'Kiki vs. Bouba'},
  {question: 'Which shape is called takete and which is called maluma?', first: 'Click on takete', second: 'Click on maluma', title: 'Takete vs. Maluma'},
  {question: 'Which shape is called kitiki and which is called lomba?', first: 'Click on kitki', second: 'Click on lomba', title: 'Kitiki vs. Lomba'},
  {question: 'Which shape is called piki and which is called nooma?', first: 'Click on piki', second: 'Click on nooma', title: 'Piki vs. Nooma'},
  {question: 'Which shape is named Kate and which is named Molly?', first: 'Click on Kate', second: 'Click on Molly', title: 'Kate vs. Molly' },
  {question: 'Which shape is named Tucker and which is named Ben?', first: 'Click on Tucker', second: 'Click on Ben', title: 'Tucker vs. Ben'},
  {question: 'Which shape is named Kira and which is named Gunner?', first: 'Click on Kira', second: 'Click on Gunner', title: 'Kira vs. Gunner'}
];

function next () {
  if (shapeQuiz.length < 1) {
    location.reload;
    return;
  }
}
function startOver () {
  location.reload();
  return;
}
function setup() {
  createCanvas(600, 600);
  textFont('Lato');
  textSize(16);
  textAlign(CENTER);
  leftShape = new Left('kiki');
  rightShape = new Right('bouba');
  startButton = createButton('Start');
  startButton.position((width / 2) - (startButton.width / 2), height / 2 - (startButton.height / 2));
  startButton.mousePressed(startQuiz);
  submitAnswerButton = createButton('Submit');
  submitAnswerButton.size(150, 30);
  submitAnswerButton.position((width / 2) - (submitAnswerButton.width / 2), 600);
  startOverButton = createButton('Start Over');
  startOverButton.size(150, 30);
  startOverButton.mousePressed(startOver);
  startOverButton.position(250, 50);
}
function draw() {
  console.log('working?');
  background(200);
  // first state: after initialization, show the shapes and the quiz question
  if (quizState.state > 0 && quizState.state < 3) {
      // left
    leftShape.show(leftColor);
    // right
    rightShape.show(rightColor);
    text(shapeQuiz[quizState.currentQuestionIndex].question, 0, 400, width, 300)
  }
  if (quizState.state === 1) {
    text(shapeQuiz[quizState.currentQuestionIndex].first, 0, 450, width, 400)
  }
  if (quizState === 2) {
    text(shapeQuiz[quizState.currentQuestionIndex].second, 0, 300, width, 400)
    // add answers for first and second command to responseArray (make the submitButton an event Handler
    // return to quizState question with next idx in shapeQuiz array
  }
  if (quizState === 3) {
    text("Complete!", 10, 10);
    text(responseArray.join(','), 50, 50, 100, width - 50)
    // end quizState question and quizState response loop
    // indicate that quiz is complete
    // show all results in responseArray 
  }
}
function startQuiz() {
  quizState.state = 1; // moves to question state
}

function mousePressed() {
  if ((mouseX > 25 && mouseX < 250 && mouseY > 50 && mouseY < 300) && quizState.state > 0) {
    recordResponses(leftShape);
    leftColor = 'blue';
  } else {
    leftColor = 'red';
  }
  if ((mouseX > 305 && mouseX < 525 && mouseY > 65 && mouseY < 300) && quizState.state > 0) {
    recordResponses(rightShape);
    rightColor = 'green';
  } else {
    rightColor = 'pink';
  }
}

function recordResponses(shape) {
  // to push responses into responseArray
  let order;
  if (quizState.state === 1) {
    order = 'first';
  }
  if (quizState.state === 2) {
    order = 'second';
  }
  responseArray.push('For ' + shapeQuiz[quizState.currentQuestionIndex].title + ', you chose' + shapeQuiz[quizState.currentquestionIndex][order] + shape.name);

  if (shapeQuiz[quizState.currentQuestionIndex + 1] !== undefined) {
    if (order === 'first') {
      quizState.state = 2;
    } else if (order === 'second') {
      quizState.currentQuestionIndex++;
      quizState.state = 1; 
    }
  } else {
    quizState.state = 3; // no more questions in Array, move to show responses
  }
}

class Left {
  constructor() {
    this.color = 'red';
    this.name = 'a spiky shape';
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
    this.name = 'a round shape';
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