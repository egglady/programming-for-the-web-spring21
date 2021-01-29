const myQuiz = [
    {question: 'What color do you get from mixing red and blue?', answer: 'purple'},
    {question: 'What color do you get from mixing red and yellow?', answer: 'orange'},
    {question: 'What color do you get from mixing blue and yellow?', answer: 'green'},
    {question: 'What color do you get from mixing red and white?', answer: 'pink'},
    {question: 'What color do you get from mixing black and white?', answer: 'grey'}
];

console.log(myQuiz);

const randomIdx = Math.round(Math.random() * myQuiz.length - 1);
console.log(myQuiz[randomIdx].question);

const randomQuestion = prompt(myQuiz[0].question);