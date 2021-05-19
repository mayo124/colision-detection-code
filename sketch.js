//collision detection algorithm

var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(100, 200, 100, 50);
  movingrect.debug=true;
  movingrect.shapeColor="green";
  fixedrect=createSprite(200,200,50,100)         
  fixedrect.shapeColor="green"
  fixedrect.debug=true
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
//conditions to check the collision detection
if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
 fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
 fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 &&
 movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
 ) {
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
                                             
}else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}

  drawSprites();
}