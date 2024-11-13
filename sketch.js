let font;
let myArray = [];

function preload() {
  myArray[0] = loadImage("/assets/chibisonic.png");
  myArray[1] = loadImage("/assets/chibitails.png");
  myArray[2] = loadImage("/assets/chibiknux.png");
  ring = loadImage("/assets/chibiring.png");
  bumper = loadImage("/assets/chibibumper.png");
  font = loadFont("/assets/Plaster-Regular.ttf");
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvoid");

  let button1 = createButton("Make a Sonic");
  button1.parent("buttoid");
  button1.mousePressed(sonicDraw);

  let button2 = createButton("Make a Tails");
  button2.parent("buttoid");
  button2.mousePressed(tailsDraw);

  let buttonrandom1 = createButton("Random & Knuckles");
  buttonrandom1.parent("buttoid");
  buttonrandom1.mousePressed(randomDraw);

  let buttonclear = createButton("Clear the board");
  buttonclear.parent("buttoid");
  buttonclear.mousePressed(clearDraw);

  let buttonsave = createButton("Save your work");
  buttonsave.parent("buttoid");
  buttonsave.mousePressed(saveDraw);
  background(0);
  rectMode(CENTER);
  textFont(font);
  textSize(15);
  textAlign(CENTER, CENTER);
}

function draw() {}

function sonicDraw() {
  image(myArray[0], random(width), random(height), 20, 20);
}

function tailsDraw() {
  image(myArray[1], random(width), random(height), 20, 20);
}

function randomDraw() {
  let ranImg = int(random(myArray.length));
  image(myArray[ranImg], random(width), random(height), 20, 20);
}

function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(ring, mouseX, mouseY, 15, 15);
    }
  }
}

function keyPressed() {
  if (key === "l") {
    image(bumper, 110, 250, 40, 40);
  }
  if (key === "r") {
    image(bumper, 260, 250, 40, 40);
  }
}

function clearDraw() {
  background(0);
}

function saveDraw() {
  saveCanvas("yougotanemerald.jpg");
}
