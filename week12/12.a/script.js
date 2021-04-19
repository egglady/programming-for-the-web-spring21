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
  auroraSound = loadSound('audio/aurora');
  chirpSound = loadSound('audio/chirp');
  chirpSound.setVolume(0.2);
  circlesSound = loadSound('audio/circles');
  clangSound = loadSound('audio/clang');
  correctSound = loadSound('audio/correct');
  heroSound = loadSound('audio/hero');
  laserSound = loadSound('audio/laser');
  laserSound.setVolume(0.3);
  popSound = loadSound('audio/pop');
  popcornSound = loadSound('audio/popcorn');
  purrSound = loadSound('audio/purr');
  successSound = loadSound('audio/success');
  twinkleSound = loadSound('audio/twinkle');
  whooshSound = loadSound('audio/whoosh');
}
function setup() {
  createCanvas(1200, 500);
  textSize(84);
  textAlign(CENTER);
  amplitude = new p5.Amplitude;
}
function draw() {
  background('#424646');
  // alphabet colors and locations
  strokeWeight(0);
  // A
  fill(255, 230, 0);
  text('a', 200, 100);
  // B
  fill(130, 69, 4);
  text('b', 300, 100);
  // C
  fill(24, 37, 186);
  text('c', 400, 100);
  // D
  fill(9, 40, 143);
  text('d', 500, 100);
  // E
  fill(232, 209, 167);
  text('e', 600, 100);
  // F
  fill(186, 128, 20);
  text('f', 700, 100);
  // G
  fill(5, 51, 2);
  text('g', 800, 100);
  // H
  fill(222, 66, 9);
  text('h', 900, 100);
  // I
  fill(255);
  text('i', 1000, 100);
  //
  // J
  fill(22, 201, 175);
  text('j', 250, 250);
  // K
  fill(252, 210, 199);
  text('k', 350, 250);
  // L
  fill(204);
  text('l', 450, 250);
  // M
  fill(173, 35, 10);
  text('m', 550, 250);
  // N
  fill(222, 95, 35);
  text('n', 650, 250);
  // O
  fill(0);
  text('o', 750, 250);
  // P
  fill(31, 148, 128);
  text('p', 850, 250);
  // Q
  fill(10, 100, 128);
  text('q', 950, 250);
  //
  // R
  fill(24, 122, 6);
  text('r', 200, 400);
  // S
  fill(150, 36, 103);
  text('s', 300, 400);
  // T
  fill(180);
  text('t', 400, 400);
  // U
  fill(117, 118, 148);
  text('u', 500, 400);
  // V
  fill(185, 187, 237);
  text('v', 600, 400);
  // W
  fill(61, 48, 59);
  text('w', 700, 400);
  // X
  fill(115, 105, 105);
  text('x', 800, 400);
  // Y
  fill(222, 80, 189);
  text('y', 900, 400);
  // Z
  fill(179, 156, 82);
  text('z', 1000, 400);
  // for the highlighted letters
  fill(255);
  strokeWeight(8);
  stroke(0);
  // for what letters get highlighted while sound is playing
  // AURORA - R & N
  if (auroraSound.isPlaying() === true) {
    text('r', 200, 400);
    text('n', 650, 250);
  }
  // CHIRP - K & Q
  if (chirpSound.isPlaying() === true) {
    text('k', 350, 250);
    text('q', 950, 250);
  }
  // CIRCLES - J & U
  if (circlesSound.isPlaying() === true) {
    text('j', 250, 250);
    text('u', 500, 400);
  }
  // CLANG - G & B
  if (clangSound.isPlaying() === true) {
    text('g', 800, 100);
    text('b', 300, 100);
  }
  // CORRECT - T & C
  if (correctSound.isPlaying() === true) {
    text('t', 400, 400);
    text('c', 400, 100);
  }
  // HERO - W & 0
  if (heroSound.isPlaying() === true) {
    text('o', 750, 250);
    text('w', 700, 400);
  }
  // LASER - X & L
  if (laserSound.isPlaying() === true) {
    text('x', 800, 400);
    text('l', 450, 250);
  }
  // POP - E & P
  if (popSound.isPlaying() === true) {
    text('e', 600, 100);
    text('p', 850, 250);
  }
  // POPCORN - A & D
  if (popcornSound.isPlaying() === true) {
    text('a', 200, 100);
    text('d', 500, 100);
  }
  // PURR - F & V
  if (purrSound.isPlaying() === true) {
    text('f', 700, 100);
    text('v', 600, 400);
  }
  // SUCCESS - S & M
  if (successSound.isPlaying() === true) {
    text('s', 300, 400);
    text('m', 550, 250);
  }
  // TWINKLE - Y & I
  if (twinkleSound.isPlaying() === true) {
    text('y', 900, 400);
    text('i', 1000, 100);
  }
  // WHOOSH - H & Z
  if (whooshSound.isPlaying() === true) {
    text('h', 900, 100);
    text('z', 1000, 400);
  }
}
function keyPressed() {
  if ((key == 'r') || (key == 'n')) {
    auroraSound.play();
  }
  if ((key == 'k') || (key == 'q')) {
    chirpSound.play();
  }
  if ((key == 'j') || (key == 'u')) {
    circlesSound.play();
  }
  if ((key == 'g') || (key == 'b')) {
    clangSound.play();
  }
  if ((key == 't') || (key == 'c')) {
    correctSound.play();
  }
  if ((key == 'w') || (key == 'o')) {
    heroSound.play();
  }
  if ((key == 'x') || (key == 'l')) {
    laserSound.play();
  }
  if ((key == 'p') || (key == 'e')) {
    popSound.play();
  }
  if ((key == 'a') || (key == 'd')) {
    popcornSound.play()
  }
  if ((key == 'v') || (key == 'f')) {
    purrSound.play()
  }
  if ((key == 'm') || (key == 's')) {
    successSound.play()
  }
  if ((key == 'y') || (key == 'i')) {
    twinkleSound.play()
  }
  if ((key == 'z') || (key == 'h')) {
    whooshSound.play()
  }
}
