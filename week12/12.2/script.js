var airdropSound;
var slackSound;
var chimeSound;
var level;

function preload() {
    soundFormats ('wav');
    airdropSound = loadSound('audio/airdrop.wav');
    slackSound = loadSound('audio/slack');
    chimeSound = loadSound('audio/zoom_chime');
}

function setup() {
    createCanvas(500, 500);
    airdropSound.play();
    // slackSound.play();
    // chimeSound.play();
}

function draw () {
    level = airdropSound.getLevel();
    console.log(level);
}