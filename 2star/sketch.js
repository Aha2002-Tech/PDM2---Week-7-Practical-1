let myTiles;
let tileSheet;

function preload() {
  tileSheet = loadImage('assets/Sprout Lands - Sprites - Basic pack.png');
}

function setup() {
  createCanvas(400, 400);
  myTiles = new EnvironmentTiles(tileSheet);
}

function draw() {
  background(220);

  
  for (let i = 0; i < width; i += 40) {
    myTiles.drawGrass(i, 300); 
  }

  myTiles.drawStone(100, 280); 
}