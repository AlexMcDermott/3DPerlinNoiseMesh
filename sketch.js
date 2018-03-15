let scl = 20;
let noiseScl = 0.0125;
let amp = 4;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  stroke(255);
  noFill();
}

function draw() {
  translate(-width/2, height/2, -50);
  rotateX(-(2*PI)/3);
  for (let y = 0; y <= height; y += scl) {
    beginShape(QUAD_STRIP);
    for (let x = 0; x <= width; x += scl) {
      noiseVal1 = noise(x*noiseScl, y*noiseScl);
      noiseVal2 = noise(x*noiseScl, (y+scl)*noiseScl);
      vertex(x, y, noiseVal1*scl*amp);
      vertex(x, y+scl, noiseVal2*scl*amp);
    }
    endShape();
  }
  noLoop();
}
