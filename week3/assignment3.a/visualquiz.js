let submitAnswerButton
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
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
    window.alert('you won');
    return;
  }
  const randomIdx = Math.ceil(Math.random() * myQuiz.length - 1);
  return myQuiz[randomIdx];
}
function checkQuestion() {
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array, you could also splice it out
    myQuiz = myQuiz.filter(myQuizObj => {
      return currentQuestion.answer !== myQuizObj.answer;
    });
    // this is the correct answer condition
    response = 'correct! next question';
    responseColor = 'green'
  } else {
    // this is the wrong answer condition
    response = 'oops, that wasn\'t quite right! Try another';
    responseColor = 'red';
  }
  currentQuestion = next();
  questionInput.value('');
  if (currentQuestion) {
    message = currentQuestion.question;
  }
}

currentQuestion = next();
let message = currentQuestion.question;
// console.log(next());

function setup() {
  createCanvas(1400, 1000);
  heading = createElement('h1', ['Eggcellent Questions']);
  heading.position(100, 100);
  questionInput = createInput('');
  questionInput.size(250, 20);
  questionInput.position(100, 325);
  submitAnswerButton = createButton('submit answer');
  submitAnswerButton.size(250, 20);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 350);
}

function draw() {
  background('lightblue');
  fill('purple');
  textSize(20);
  text(message, 100, 300);
  fill(responseColor);
  text(response, 100, 400);
}