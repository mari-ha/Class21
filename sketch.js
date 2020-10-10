var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;
  movingRect=createSprite(500, 300, 80, 30);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;

}

function draw() {
  background("white");  
  
  
  bounceOff(movingRect, fixedRect);
  drawSprites();
 
}
function bounceOff(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2 && 
    
    {
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object2.width/2+object1.height/2 && 
      object2.y-object2.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }
}