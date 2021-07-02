var leftBulb,rightBulb;
var wire;

function preload(){
  offBulbImage= loadImage("bulb1.png")
  onBulbImage = loadImage("bulb2.png")
  cableImage = loadImage("wire.png")
}
function setup() {
  createCanvas(800,400);

  wire = createSprite(400,380,10,100)
  wire.addImage("wire", cableImage)
 
  leftBulb = createSprite(250, 200, 50, 50);
  leftBulb.addImage("b1", offBulbImage)
  leftBulb.addImage("b2", onBulbImage)

  rightBulb = createSprite(550, 200, 50, 50);
  rightBulb.addImage("b1", offBulbImage)
  rightBulb.addImage("b2", onBulbImage)

}

function draw() {
  background("lightyellow");  

  textSize(20)
  fill("red")
  text("Test the Bulb!", 350,30)

//CHOOSE THE CORRECT CODE FOR MOVING WIRE LEFT AND RIGHT

//Option1:
  // if(keyDown("left")){
  //   wire.x+=2
  // }
  // if(keyDown("right")){
  //   wire.x+=2
  // }

//Option2:
  // if(keyDown("left")){
  //   wire.x-=2
  // }
  // if(keyDown("right")){
  //   wire.x+=2
  // }

//Option3: 
  // if(keyDown("left")){
  //   wire.x-=2
  // }
  // if(keyDown("right")){
  //   wire.x-=2
  // }

//Option4:  
  // if(keyDown("left")){
  //   wire.x-=2
  // }
  // if(keyDown("left")){
  //   wire.x+=2
  // }
  
  if(wire.x - leftBulb.x < (wire.height + leftBulb.height)/2
  && leftBulb.x - wire.x < (wire.height + leftBulb.height)/2 &&
  wire.x - leftBulb.x < (wire.width + leftBulb.width)/2
  && leftBulb.x - wire.x < (wire.width + leftBulb.width)/2){

    leftBulb.changeImage("b2", offBulbImage)  
  }
  else{
    leftBulb.changeImage("b1", onBulbImage)
  }

//Choose the correct code block for rightBulb and wire collision

//Option1:
  // if(wire.x - rightBulb.y < (wire.height + rightBulb.height)/2
  // &&rightBulb.x - wire.y < (wire.height + rightBulb.height)/2 &&
  // wire.y - rightBulb.x < (wire.width + rightBulb.width)/2
  // && rightBulb.y - wire.x < (wire.width + rightBulb.width)/2){
 
  //   rightBulb.changeImage("b2", offBulbImage) 
  // } 
  // else{
  //   rightBulb.changeImage("b1", onBulbImage)
  // }

//Option2:
  // if(wire.y - rightBulb.y < (wire.height + rightBulb.height)/2
  // &&rightBulb.y - wire.y < (wire.height + rightBulb.height)/2 &&
  // wire.y - rightBulb.y < (wire.width + rightBulb.width)/2
  // && rightBulb.y - wire.y < (wire.width + rightBulb.width)/2){
 
  //   rightBulb.changeImage("b2", offBulbImage) 
  // } 
  // else{
  //   rightBulb.changeImage("b1", onBulbImage)
  // }

//Option3:
  // if(wire.x - rightBulb.x < (wire.height + rightBulb.height)/2
  // &&rightBulb.x - wire.x < (wire.height + rightBulb.height)/2 &&
  // wire.x - rightBulb.x < (wire.width + rightBulb.width)/2
  // && rightBulb.x - wire.x < (wire.width + rightBulb.width)/2){
 
  //   rightBulb.changeImage("b2", offBulbImage) 
  // } 
  // else{
  //   rightBulb.changeImage("b1", onBulbImage)
  // }

//Option4:
  // if(wire.x - rightBulb.x < (wire.height + rightBulb.width)/2
  // &&rightBulb.x - wire.x < (wire.width + rightBulb.height)/2 &&
  // wire.x - rightBulb.x < (wire.height + rightBulb.width)/2
  // && rightBulb.x - wire.x < (wire.width + rightBulb.height)/2){
 
  //   rightBulb.changeImage("b2", offBulbImage) 
  // } 
  // else{
  //   rightBulb.changeImage("b1", onBulbImage)
  // }

  drawSprites();
}
