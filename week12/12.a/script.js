// FOR RECORDING
// let mic, recorder, soundFile;
// let state = 0;
var auroraSound;
var chirpSound;
var circlesSound;
var clangSound;
var correctSound;
var heroSound;
var laserSound;
var popSound;
var popcornSound;
var purrSound;
var successSound;
var twinkleSound;
var whooshSound;


function preload() {
    soundFormats('wav');

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(64);
    textAlign(CENTER);
    amplitude = new p5.Amplitude();
    auroraSound = loadSound('audio/aurora');
    chirpSound = loadSound('audio/chirp');
    circlesSound = loadSound('audio/circles');
    clangSound = loadSound('audio/clang');
    correctSound = loadSound('audio/correct');
    heroSound = loadSound('audio/hero');
    laserSound = loadSound('audio/laser');
    popSound = loudSound('audio/pop');
    popcornSound = loadSound('audio/popcorn');
    purrSound = loadSound('audio/purr');
    successSound = loadSound('audio/success');
    twinkleSound = loadSound('audio/twinkle');
    whooshSound = loadSound('audio/whoosh');
    
    // FOR RECORDING
    // mic = new p5.AudioIn(); // new audio in
    // mic.start(); // prompts user to enable browser mic
    // recorder = new p5.SoundRecorder(); // create recorder
    // recorder.setInput(mic); // connect recorder to mic
    // soundFile = new p5.SoundFile(); // for saving the recording

}
function draw() {
    background('#333');

    // FOR RECORDING
    // let rec = rect(40, 50, 100, 100);
    // // rec.mousePressed(recPressed); // see recPressed function below
    // // text('tap this square to record', 80, 80);

    // A
    if(keyIsPressed) {
        if (key == 'a') {
            popcornSound.play();
            stroke(242, 204, 12);
            strokeWeight(8);
        }
    }
    fill(255, 230, 0);
    text('a', 200, 100);
    // B
    if (keyIsPressed) {
        if (key == 'b') {
            clangSound.play();
            stroke(79, 53, 8);
            strokeWeight(8);
        }
    }
    fill(112, 77, 17);
    text('b', 300, 100);
    // C
    if (keyIsPressed) {
        if (key == 'c') {
            correctSound.play();
        }
    }
    fill(24, 37, 186);
    text('c', 400, 100);
    // D
    if (keyIsPressed) {
        if (key == 'd') {
            popcornSound.play();
        }
    }
    fill(9, 40, 143);
    text('d', 500, 100);
    // E
    if (keyIsPressed) {
        if (key == 'e') {
            popSound.play();
        }
    }
    fill(232, 209, 167);
    text('e', 600, 100);
    // F
    if (keyIsPressed) {
        if (key == 'f') {
            purrSound.play();
        }
    }
    fill(186, 128, 20);
    text('f', 700, 100);
    // G
    if (keyIsPressed) {
        if (key == 'g') {
            clangSound.play();
        }
    }
    fill(44, 112, 21);
    text('g', 800, 100);
    // H
    if (keyIsPressed) {
        if (key == 'h') {
            whooshSound.play();
        }
    }
    fill(222, 66, 9);
    text('h', 900, 100);
    // I
    if (keyIsPressed) {
        if (key == 'i') {
            twinkleSound.play();
        }
    }
    fill(255);
    text('i', 1000, 100);
    //
    // J
    if (keyIsPressed) {
        if (key == 'j') {
            circlesSound.play();
        }
    }
    fill(22, 201, 175);
    text('j', 250, 250);
    // K
    if (keyIsPressed) {
        if (key == 'k') {
            chirpSound.play();
        }
    }
    fill(252, 210, 199);
    text('k', 350, 250);
    // L
    if (keyIsPressed) {
        if (key == 'l') {
            laserSound.play();
        }
    }
    fill(204);
    text('l', 450, 250);
    // M
    if (keyIsPressed) {
        if (key == 'm') {
            successSound.play();
        }
    }
    fill(145, 42, 15);
    text('m', 550, 250);
    // N
    if (keyIsPressed) {
        if (key == 'n') {
            auroraSound.play();
        }
    }
    fill(199, 63, 28);
    text('n', 650, 250);
    // O
    if (keyIsPressed) {
        if (key == 'o') {
            heroSound.play();
        }
    }
    fill(0);
    text('o', 750, 250);
    // P
    if (keyIsPressed) {
        if (key == 'p') {
            popSound.play();
        }
    }
    fill(66, 130, 119);
    text('p', 850, 250);
    // Q
    if (keyIsPressed) {
        if (key == 'q') {
            chirpSound.play();
        }
    }
    fill(37, 97, 115);
    text('q', 950, 250);
    //
    // R
    if (keyIsPressed) {
        if (key == 'r') {
            auroraSound.play();
        }
    }
    fill(9, 143, 22);
    text('r', 200, 400);
    // S
    if (keyIsPressed) {
        if (key == 's') {
            successSound.play();
        }
    }
    fill(150, 36, 103);
    text('s', 300, 400);
    // T
    if (keyIsPressed) {
        if (key == 't') {
            correctSound.play();
        }
    }
    fill(180);
    text('t', 400, 400);
    // U
    if (keyIsPressed) {
        if (key == 'u') {
            circlesSound.play();
        }
    }
    fill(117, 118, 148);
    text('u', 500, 400);
    // V
    if (keyIsPressed) {
        if (key == 'v') {
            purrSound.play();
        }
    }
    fill(185, 187, 237);
    text('v', 600, 400);
    // W
    if (keyIsPressed) {
        if (key == 'w') {
            heroSound.play();
        }
    }
    fill(105, 87, 100);
    text('w', 700, 400);
    // X
    if (keyIsPressed) {
        if (key == 'x') {
            laserSound.play();
        }
    }
    fill(95);
    text('x', 800, 400);
    // Y
    if (keyIsPressed) {
        if (key == 'y') {
            twinkleSound.play();
        }
    }
    fill(222, 80, 189);
    text('y', 900, 400);
    // Z
    if (keyIsPressed) {
        if (key == 'z') {
            whooshSound.play();
        }
    }
    fill(179, 156, 82);
    text('z', 1000, 400);
}

function mousePressed() {
    if (mouseX >= 40 && mouseX <= 140 && mouseY >= 50 && mouseY <= 150) {
        console.log('pressed');
    }
    // (40, 50, 100, 100)
    }

// FOR RECORDING
// function recPressed() {
//     userStartAudio();
//     if(state === 0 && mic.enabled) {
//         recorder.record(soundFile);
//         background(255, 0, 0); // red = recording
//         text('Recording', 80, 80); // 80 w/h
//         state++;
// } else if (state === 1) {
//     background(0, 255, 0); // green otherwise
//     recorder.stop();
//     text('Done recording. Tap to play and download', 80, 80); // 80 w/h
//     state++;
// } else if (state === 2) {
//     soundFile.play(); // play the created recording
//     save(soundFile, 'mySound.wav');
//     state++;
// }
// }


// https://p5js.org/reference/#/p5.SoundRecorder












// need to create a class (like the card flip) in a situation where you want to reuse the same thing
// ! = bang, negates what immediately comes after it (a good way to turn the sound off in a mousePressed
