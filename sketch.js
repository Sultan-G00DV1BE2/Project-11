var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,energyDrinkImg;
var i;
var energyDrink
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  energyDrinkImg=loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

energyDrink=createSprite(200,30);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale=0.2
energyDrink.velocityY=6
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }
 



if(energyDrink.y>430){
energyDrink.y=-30
}

if(boy.isTouching(energyDrink)){
  path.velocityY=path.velocityY*4
  
}
  drawSprites();
}
