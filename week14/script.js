var quizState = {
    state: 0, // initialize, question, next answer, complete, display record
    currentQuestionIndex: 0
}
var responseArray = []; // answers recorded here
var leftShape;
var rightShape;
var leftColor = 'red';
var rightColor = 'pink';
let command = '';
let whichShape = 'first';
let submitAnswerButton;
let startOverButton;
let message = '';
let currentQuestion = 0;

let shapeQuiz = [
  {question: 'Which shape is called kiki and which is called bouba?', first: 'Click on kiki', second: 'Click on bouba', name: 'Kiki vs. Bouba'},
  {question: 'Which shape is called takete and which is called maluma?', first: 'Click on takete', second: 'Click on maluma', name: 'Takete vs. Maluma'},
  {question: 'Which shape is called kitiki and which is called lomba?', first: 'Click on kitki', second: 'Click on lomba', name: 'Kitiki vs. Lomba'},
  {question: 'Which shape is called piki and which is called nooma?', first: 'Click on piki', second: 'Click on nooma', name: 'Piki vs. Nooma'},
  {question: 'Which shape is named Kate and which is named Molly?', first: 'Click on Kate', second: 'Click on Molly', name: 'Kate vs. Molly' },
  {question: 'Which shape is named Tucker and which is named Ben?', first: 'Click on Tucker', second: 'Click on Ben', name: 'Tucker vs. Ben'},
  {question: 'Which shape is named Kira and which is named Gunner?', first: 'Click on Kira', second: 'Click on Gunner', name: 'Kira vs. Gunner'}
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
  let cvn = createCanvas(600, 600);
  textFont('Lato');
  textSize(16);
  textAlign(CENTER);
  leftShape = new Left();
  rightShape = new Right();
  startButton = createButton('Start');
  startButton.position((width/2) - (startButton.width/2), height/2 - (startButton.height/2));
  startButton.mousePressed(startQuiz);
  submitAnswerButton = createButton('Submit');
  submitAnswerButton.size(150, 30);
  submitAnswerButton.position((cvn.width / 2) - (submitAnswerButton.width / 2), 600);
  // currentQuestion++; do i no longer need this?
  startOverButton = createButton('Start Over');
  startOverButton.size(150, 30);
  startOverButton.mousePressed(startOver);
  startOverButton.position(250, 50);
}
function draw() {
  background(200);

  text(message, 45, 400, 500, 300)
  text(command, 45, 440, 500, 300);
  if (quizState.state > 0 && quizState.state < 3) {
      // left
    leftShape.show(leftColor);
    // right
    rightShape.show(rightColor);
    text(shapeQuiz[quizState.currentQuestionIndex].question, 0, 400, width, 300)
    // stop the loop of draw
    // ask the question
    // set quiz state to question
  }
  if (quizState.state === 1) {
    text(shapeQuiz[quizState.currentQuestionIndex].first, 0, 450, width, 400)

    // // display question as message
    // message = shapeQuiz[currentQuestion].question;
    // // display first command
    // // register click as leftShape or rightShape
    // command = shapeQuiz[currentQuestion][whichShape];
    // // display second command
    // // register click as leftShape or rightShape
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

function recordResponses() {
  // to push responses into responseArray
  let order;
  if (quizState.state === 1) {
    order = 'first'; 
  }
  if (quizState.state === 2) {
    order = 'second';
}
  responseArray.push('You chose' + shapeQuiz[quizState.currentquestionIndex][order] + 'for' + shapeQuiz[quizState.currentQuestionIndex].name);
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