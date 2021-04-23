var slider;
var slider2;
var pos;

function setup() {
  createCanvas(550, 550);
  angleMode(DEGREES);
  slider = createSlider(0, 15, 2); // 2 is default
  slider2 = createSlider(0, 10, 2);

  pos = 0.0;
  pos2 = 20.0;
}

function draw () {
  clear (); // to clear the background in draw
  translate(width/2, height/2);

  var mySinVal = sin(pos); 
  var mySinVal2 = sin(pos2); 

  amplified = mySinVal * 30 // multiply to make sin value larger (sin <= 1)
  amplified2 = mySinVal2 * 60;

  for (x = 0; x <= 360; x = x + 10) {
    noStroke(0);
    fill(52, 125, 235);
    ellipse(amplified, 50, amplified, 6);
    fill(235, 64, 52);
    ellipse(amplified2, 100, amplified2, 12);
    fill(245, 212, 66);
    ellipse(amplified, 150, amplified, 10);
    fill(235, 127, 226);
    ellipse(amplified2, 200, amplified2, 16);
    fill(255);
    ellipse(amplified, 250, amplified, 6);
    rotate(x);
  }
  pos = pos + slider.value();
  pos2 = pos2 + slider2.value();
}
