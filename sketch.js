
var gardenImg,rabbitImg;

var orangeLeaf;
var redLeaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
  orangeLeaf = loadImage("orangeLeaf.png");
  redLeaf = loadImage("redImage.png");
  
}

function setup(){
  
  createCanvas(500,500);


  // Moving background
  garden=createSprite(250,250);
  garden.scale = 1.15
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,360,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(180);
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1, 3));
  
  
  
  
  
  
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}



function spawnOrangeLeaf() {
  orangeLeaf = createSprite(random (50, 350), 40, 10,10);
  orangeLeaf.addImage(orangeLeaf);
  orangeLeaf.scale = 0.06;
  orangeLeaf.velocityY = 3;  
}  
function spawnRedLeaf() {
  redLeaf = createSprite(random (50, 350), 40, 10, 10);
  redLeaf.addImage(redLeaf);
  redLeaf.scale = 0.04;
  redLeaf.velocityY = 3;  
}
