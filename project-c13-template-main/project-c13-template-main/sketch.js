var garden,rabbit,orangeL,applE,redL;
var gardenImg,rabbitImg,orangeImg,appleImg,redImg;

var select_sprites = Math.round(random(1, 3));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX

  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  if (frameCount % 80 === 0) {
    if(select_sprites == 1){
      createApples();
   }else if(select_sprites == 2) {
        createLeafs();
      }else {
    createRLeafs();
   }
  }
  console.log(frameCount)
}



function createApples() {
  apple = createSprite(random(50,350), 0);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createLeafs() {
  orangeL = createSprite(random(50,350), 0);
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.07;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150
}

function createRLeafs() {
  redL = createSprite(random(50,350), 0);
  redL.addImage(redImg);
  redL.scale = 0.07;
  redL.velocityY = 3;
  redL.lifetime = 150;
}