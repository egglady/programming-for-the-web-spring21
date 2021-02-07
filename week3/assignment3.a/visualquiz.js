let submitAnswerButton
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
  if(myQuiz.length < 1) {
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
function startOver() {
  location.reload();
  return;
}

currentQuestion = next();
let message = currentQuestion.question;
// console.log(next());

function setup() {
  createCanvas(windowWidth, windowHeight);
  heading = createElement('h1', ['Eggcellent Questions']);
  heading.position(100, 100);
  questionInput = createInput('');
  questionInput.size(250, 60);
  questionInput.position(100, 250);
  submitAnswerButton = createButton('Submit');
  submitAnswerButton.size(200, 40);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 325);
  startOverButton = createButton('Start Over');
  startOverButton.size(200, 40);
  startOverButton.mousePressed(startOver);
  startOverButton.position(100, 450);
}

function draw() {
  background('#F5C95D');
  fill('white');
  textSize(22);
  text(message, 100, 220);
  textSize(18);
  fill(responseColor);
  text(response, 100, 375);
  text(rightResponse + ' correct answers', 100, 510);
}