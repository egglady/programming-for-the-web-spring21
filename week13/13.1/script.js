var slider;
var slider2;
var pos;

function setup() {
  createCanvas(550, 550);
  angleMode(DEGREES);
  slider = createSlider(0, 15, 2); // 1 - default
  slider2 = createSlider(0, 10, 2);

  pos = 0.0;
  pos2 = 20.0;
}

function draw () {
  clear (); // clear the background in draw
  translate(width/2, height/2);

  var mySinVal = sin(pos); 
  var mySinVal2 = sin(pos2); 

  amplified = mySinVal * 30 // sin values aren't larger than one, so multiplying them makes the movement visible
  amplified2 = mySinVal2 * 60;

  for (x = 0; x <= 360; x = x + 10) {
    // ellipse(0, 50, 5, 5);
    noStroke(0);
    fill(52, 125, 235);
    ellipse(amplified, 50, amplified, 10);
    fill(235, 64, 52);
    ellipse(amplified2, 95, amplified2, 12);
    fill(245, 212, 66);
    ellipse(amplified, 140, amplified, 10);
    fill(235, 127, 226);
    ellipse(amplified2, 185, amplified2, 16);
    fill(255);
    ellipse(amplified, 230, amplified, 10);
    rotate(x);
  } // need translate too

  // ellipse(width/2, height/2, amplified + 100, amplified + 10);
  pos = pos + slider.value();
  pos2 = pos2 + slider2.value();

}
