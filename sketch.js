let scl = 10;
let noiseScl = 0.05;
let mouseScl = 0.025;
let xoff;
let yoff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  xoff = mouseX*mouseScl;
  yoff = mouseY*mouseScl;
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
