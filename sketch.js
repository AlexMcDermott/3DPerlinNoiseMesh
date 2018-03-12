scl = 10;
noiseScl = 0.05;
mouseScl = 0.025;
xoff = 0;
yoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
}

function draw() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      noiseVal = noise((x*noiseScl)+xoff, (y*noiseScl)+yoff);
      fill(noiseVal*255);
      noStroke();
      rect(x*scl, y*scl, scl, scl);
    }
  }
  xoff = mouseX*mouseScl;
  yoff = mouseY*mouseScl;
}
