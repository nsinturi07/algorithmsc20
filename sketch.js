
var fixedrect,movingrect;
var shapedge1,shapedge2;
function setup() {
  createCanvas(800,400);

  fixedrect=createSprite(400, 200, 30, 80);
  movingrect=createSprite(600,200,80,30);
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue";
  shapedge1=createSprite(10,100,30,80);
  shapedge1.debug=true;
  shapedge2=createSprite(790,100,30,80);
  shapedge2.debug=true;
  shapedge1.velocityX=6;
  shapedge2.velocityX=-6;
}

function draw() {
  background(0,0,0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.width/2+fixedrect.width/2>movingrect.x-fixedrect.x&&movingrect.width/2+fixedrect.width/2>fixedrect.x-movingrect.x&&fixedrect.height/2+movingrect.height/2>movingrect.y-fixedrect.y&&fixedrect.height/2+movingrect.height/2>fixedrect.y-movingrect.y){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="green";
  } 
  else{
    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  if(shapedge1.width/2+shapedge2.width/2>shapedge1.x-shapedge2.x&&shapedge1.width/2+shapedge2.width/2>shapedge2.x-shapedge1.x){
    shapedge1.velocityX=shapedge1.velocityX*(-1);
    shapedge2.velocityX=shapedge2.velocityX*(-1);
  }
  if(shapedge1.height/2+shapedge2.height/2>shapedge1.y-shapedge2.y&&shapedge1.height/2+shapedge2.height/2>shapedge2.y-shapedge1.y){
    shapedge1.velocityY=shapedge1.velocityY*(-1);
    shapedge2.velocityY=shapedge2.velocityY*(-1);
  }
  drawSprites();
}
