const myQuiz = [
    {question: 'What color do you get from mixing red and blue? Reply with  common color name.', answer: 'purple'},
    {question: 'What color do you get from mixing red and yellow? Reply with  common color name.', answer: 'orange'},
    {question: 'What color do you get from mixing blue and yellow? Reply with  common color name.', answer: 'green'},
    {question: 'What color do you get from mixing red and white? Reply with  common color name.', answer: 'pink'},
    {question: 'What color do you get from mixing black and white? Reply with  common color name.', answer: 'grey'}
];

console.log(myQuiz);

const randomIdx = Math.round(Math.random() * (myQuiz.length - 1));
console.log(myQuiz[randomIdx].question);

const random = prompt(myQuiz[randomIdx].question);
