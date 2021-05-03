let shapeQuiz = [
    {question: 'Which shape is called kiki and which is called bouba?', first: 'Click on kiki', second: 'Click on bouba'},
    {question: 'Which shape is called takete and which is called maluma?', first: 'Click on takete', second: 'Click on maluma'},
    {question: 'Which shape is called kitiki and which is called lomba?', first: 'Click on kitki', second: 'Click on lomba'},
    {question: 'Which shape is called piki and which is called nooma?', first: 'Click on piki', second: 'Click on nooma'},
    {question: 'Which shape is named Kate and which is named Molly?', first: 'Click on Kate', second: 'Click on Molly' },
    {question: 'Which shape is named Tucker and which is named Ben?', first: 'Click on Tucker', second: 'Click on Ben'},
    {question: 'Which shape is named Kira and which is named Gunner?', first: 'Click on Kira', second: 'Click on Gunner'}
];

function next () {
    if (shapeQuiz.length < 1) {
        window.alert('Check out your results below');
        location.reload;
        return;
    }
    const randomIdx = Math.ceil(Math.random() * shapeQuiz.length - 1);
    return shapeQuiz[randomIdx];
}

// const vm = new Vue ({
//     el: '#shapeQuiz',
//     data: {
//         left: '',
//         right: '',
//         firstQuestion: [
//             {value: 'Kiki', name: 'kiki'},
//             {value: 'Bouba', name: 'bouba'}
//         ],
//         secondQuestion: [
//             {value: 'Takete', name: 'takete'},
//             {value: 'Maluma', name: 'maluma'}
//         ]

//     }
// })