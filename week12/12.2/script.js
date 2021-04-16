var airdropSound;
var slackSound;
var chimeSound;
let level;

function preload() {
    soundFormats ('wav');
    airdropSound = loadSound('audio/airdrop');
    slackSound = loadSound('audio/slack');
    slackSound.setVolume(0.2);
    chimeSound = loadSound('audio/zoom_chime');
    chimeSound.setVolume(0.2);
}

function setup() {
    createCanvas(500, 500);
    amplitude = new p5.Amplitude();
    airdropSound.play();
}

function draw () {
    background('#222');

    level = amplitude.getLevel();
    console.log(level);
    var diameterX = level * 2500;
    var diameterY = level * 2500;
    stroke(100, 0, 0);
    strokeWeight(4);
    fill(255, 0, 0);
    ellipse(250, 250, diameterX + 100, diameterY + 100);
    if (mouseIsPressed) {
        chimeSound.play();
    } else {
  
    }
    if (keyIsPressed) {
        slackSound.play();
    }  else {

    }
}