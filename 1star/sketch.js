let spritesheet;
let spritedata;
let animation = []; 

let x = 200; 
let y = 200; 
let moveDir = 1; 

function preload() {
  spritedata = loadJSON('assets/lr_penguin2.json');
  spritesheet = loadImage('assets/lr_penguin2.png');
}

function setup() {
  createCanvas(800, 1000);
  
  let frames = spritedata.frames; 
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
}
function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW)) {
    x -= 2;
    moveDir = -1; 
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 2;
    moveDir = 1; 
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 2;
    moveDir = 1; 



  }
  let index = floor(frameCount * 0.1) % animation.length;
  
  push(); 
  translate(x, y); 
  scale(moveDir, 1); 
  imageMode(CENTER);
  image(animation[index], 0, 0, 100, 100); 
  
  pop(); 
}