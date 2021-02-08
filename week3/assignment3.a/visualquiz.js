let submitAnswerButton;
let startOverButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = '#0965CF';
let wrongResponse = Number(0);
let rightResponse = Number(0);
let heading;
let myQuiz = [
  { question: 'What kind of eggs are boiled in their shell until the yolk is solid?', answer: 'hard boiled'},
  { question: 'What kind of eggs are cooked in a skillet, have a runny yolk, and are not flipped over?', answer: 'sunny side up' },
  { question: 'What kind of eggs are boiled outside of their shell?', answer: 'poached' },
  { question: 'What kind of eggs are hardboiled, halved, and stuffed with a paste of the yolk, mayonnaise, and mustard?', answer: 'deviled' },
  { question: 'What kind of eggs are beaten, then cooked in a skillet with butter (and often milk, salt, and pepper)?', answer: 'scrambled' }
];
function next () {
  if (myQuiz.length < 1) {
    window.alert('You cracked it!');
    location.reload();
    return;
  }

  if (wrongResponse > 4) {
    window.alert('Darnit! Looks like you\'re a rotten egg');
    location.reload();
    return;
  }
  const randomIdx = Math.ceil(Math.random() * myQuiz.length - 1);
  return myQuiz[randomIdx];
}
function checkQuestion() {
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array
    myQuiz = myQuiz.filter(myQuizObj => {
      return currentQuestion.answer !== myQuizObj.answer;
    });
    // this is the correct answer condition
    response = 'correct! next question';
    responseColor = '#0965CF'
    rightResponse++;
  } else {
    // this is the wrong answer condition
    response = 'oops, that wasn\'t quite right! Try another';
    responseColor = '#333';
    wrongResponse++;
  }
  currentQuestion = next();
  questionInput.value('');
  if (currentQuestion) {
    message = currentQuestion.question;
  }
}

// start quiz over
function startOver () {
  location.reload();
  return;
}

currentQuestion = next();
let message = currentQuestion.question;
// console.log(next());

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Padauk');
  heading = createElement('h1', ['Eggcellent Questions']);
  heading.position(100, 80);
  questionInput = createInput('');
  questionInput.size(280, 75);
  questionInput.position(100, 250);
  submitAnswerButton = createButton('Submit');
  submitAnswerButton.size(280, 40);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 340);
  startOverButton = createButton('Start Over');
  startOverButton.size(200, 40);
  startOverButton.mousePressed(startOver);
  startOverButton.position(100, 500);
}

function draw () {
  background('#F5C95D');
  fill('white');
  noStroke();
  textSize(25);
  text(message, 100, 200);
  textSize(22);
  fill(responseColor);
  text(response, 100, 385);
  text(rightResponse + ' correct answers', 100, 560);

  // egg
  // yolk
  noStroke();
  fill(232, 100, 11, 200);
  ellipse(855, 375, 145, 150);
  // shape
  strokeWeight(4);
  stroke(232, 100, 11, 120);
  fill(250, 250, 200, 150);
  beginShape();
  bezier(1040, 520, 1000, 570, 660, 550, 750, 350, 790, 355);
  bezier(1040, 520, 1080, 420, 870, 80, 750, 350, 800, 390);
  endShape();
}