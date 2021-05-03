// // audio variables
// var kiki;
// var bouba;
// var takete;
// var maluma;
// var kitiki;
// var lomba;
// var nooma;
// var piki;
// var kate;
// var molly;
// var tucker;
// var ben;
// var kira;
// var gunner;


// function preload() {
//     soundFormats('wav');
//     kikiSound = loadSound('audio/kiki');
//     boubaSound = loadSound('audio/bouba');
//     taketeSound = loadSound('audio/takete');
//     malumaSound = loadSound('audio/maluma');
//     kitikiSound = loadSound('audio/kitiki');
//     lombaSound = loadSound('audio/lomba');
//     noomaSound = loadSound('audio/nooma');
//     pikiSound = loadSound('audio/piki');
//     kateSound = loadSound('audio/kate');
//     mollySound = loadSound('audio/molly');
//     tuckerSound = loadSound('audio/tucker');
//     benSound = loadSound('audio/ben');
//     kiraSound = loadSound('audio/kira');
//     gunnerSound = loadSound('audio/gunner');
// }

var leftShape;
var rightShape;

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
function startOver () {
    location.reload();
    return;
  }
  currentQuestion = next();
  let message = currentQuestion.question;
  console.log(next());


function setup() {
    createCanvas(600, 600);
    background(200);
    leftShape = new Left();
    rightShape = new Right();
    submitAnswerButton = createButton('Submit');
    submitAnswerButton.size(150, 30);
    submitAnswerButton.position(225, 600);
//  submitAnswerButton.mousePressed(function to add to results);
 }
function draw() {
    // left
    leftShape.show();
    // right
   rightShape.show();
}


class Left {
    consructor()  {
        this.show();
    }
    show() {
        beginShape();
        vertex(100, 100);
        vertex(130, 122);
        vertex(175, 60);
        vertex(160, 145);
        vertex(220, 142);
        vertex(170, 170);
        vertex(215, 220);
        vertex(150, 195);
        vertex(130, 250);
        vertex(125, 190);
        vertex(55, 225);
        vertex(105, 168);
        vertex(30, 135);
        vertex(115, 145);
        endShape(CLOSE);
    }
}

class Right {
    constructor() {
        this.show();
    }
    show() {
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
    }
}