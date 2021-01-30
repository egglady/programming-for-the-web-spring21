
// array
const myQuiz = [
    {question: 'What kind of eggs are boiled in their shell until the yolk is solid? Reply with the common cooking method.', answer: 'hard boiled'},
    {question: 'What kind of eggs are cooked in a skillet, have a runny yolk, and are not flipped over? Reply with the common cooking method.', answer: 'sunny side up'},
    {question: 'What kind of eggs are boiled outside of their shell? Reply with the common cooking method.', answer: 'poached'},
    {question: 'What kind of eggs are hardboiled, halved, and stuffed with a paste of the yolk, mayonnaise, and mustard? Reply with the common cooking method.', answer: 'deviled'},
    {question: 'What kind of eggs are beaten, then cooked in a skillet with butter (and often milk, salt, and pepper)? Reply with the common cooking method.', answer: 'scrambled'}
];

console.log(myQuiz);

// random question
const randomIdx = Math.round(Math.random() * (myQuiz.length - 1));
console.log(myQuiz[randomIdx].question);

const randomAnswer = prompt(myQuiz[randomIdx].question);

// alert
window.alert ('You answered ' + randomAnswer + '. The correct answer is ' + myQuiz[randomIdx].answer + '.');