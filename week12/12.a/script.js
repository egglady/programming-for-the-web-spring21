// FOR RECORDING
// let mic, recorder, soundFile;
// let state = 0;

var airdropSound;
var slackSound;
var chimeSound;

function preload() {
    soundFormats('wav');
    airdropSound = loadSound('audio/airdrop');
    slackSound = loadSound('audio/slack');
    slackSound.setVolume(0.2);
    chimeSound = loadSound('audio/zoom_chime');
    chimeSound.setVolume(0.2);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(64);
    textAlign(CENTER);
    amplitude = new p5.Amplitude();

    
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
            airdropSound.play();
            stroke(242, 204, 12);
            strokeWeight(8);
        }
    }
    fill(255, 230, 0);
    text('a', 200, 100);
    if (keyIsPressed) {
        if (key == 'b') {
            slackSound.play();
            stroke(79, 53, 8);
            strokeWeight(8);
        }
    }
    fill(112, 77, 17);
    text('b', 300, 100);
    fill(24, 37, 186);
    text('c', 400, 100);
    fill(9, 40, 143);
    text('d', 500, 100);
    fill(232, 209, 167);
    text('e', 600, 100);
    fill(186, 128, 20);
    text('f', 700, 100);
    fill(44, 112, 21);
    text('g', 800, 100);
    fill(222, 66, 9);
    text('h', 900, 100);
    fill(255);
    text('i', 1000, 100);
    //
    fill(22, 201, 175);
    text('j', 250, 250);
    fill(252, 210, 199);
    text('k', 350, 250);
    fill(204);
    text('l', 450, 250);
    fill(145, 42, 15);
    text('m', 550, 250);
    fill(199, 63, 28);
    text('n', 650, 250);
    fill(0);
    text('o', 750, 250);
    fill(66, 130, 119);
    text('p', 850, 250);
    fill(37, 97, 115);
    text('q', 950, 250);
    //
    fill(9, 143, 22);
    text('r', 200, 400);
    fill(150, 36, 103);
    text('s', 300, 400);
    fill(180);
    text('t', 400, 400);
    fill(117, 118, 148);
    text('u', 500, 400);
    fill(185, 187, 237);
    text('v', 600, 400);
    fill(105, 87, 100);
    text('w', 700, 400);
    fill(95);
    text('x', 800, 400);
    fill(222, 80, 189);
    text('y', 900, 400);
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
