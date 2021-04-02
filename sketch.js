var car,wall
var speed,weight,thickness

function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random (22,83)

  car=createSprite(50,200,50,50);

  car.velocityX=speed;

  car.shapeColor="red";


  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
}

function draw() {
  background(0);  
  var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
 
    if(deformation>180);
  {
    car.shapeColor="yellow";
  }
  if(deformation>180 && deformation>100);
  {
    car.shapeColor="green";
  }
  if(deformation<100);
{
  car.shapeColor="blue";
}
  
  drawSprites();
}