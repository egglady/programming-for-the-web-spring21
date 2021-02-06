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
    alert('you won');
    return;
  }
  const randomIdx = Math.ceil(Math.random() * myQuiz.length - 1);
  return myQuiz[randomIdx];
}
function checkQuestion() {
  if (currentQuestion.answer === input.value()) {
    // remove correct answer from array, you could also splice it out
    myQuiz = myQuiz.filter(myQuizObj => {
      return currentQuestion.answer !== myQuizObj.answer;
    });
  }
}

currentQuestion = next();
let message = currentQuestion.question;
// console.log(next());

function setup() {
  createCanvas(1200, 1000);
  background('lightblue');
  heading = createElement('h1', ['Color Quiz']);
  heading.position(100, 100);
  questionInput = createInput('');
  questionInput.size(250, 20);
  questionInput.position(100, 325);
  submitAnswerButton = createButton('submit answer');
  submitAnswerButton.size(250, 24);
  submitAnswerButton.position(100, 350);
}

function draw() {
  fill('purple');
  textSize(24);
  text(message, 100, 300);
}

