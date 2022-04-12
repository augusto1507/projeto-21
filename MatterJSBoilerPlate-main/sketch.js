
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var leftSide
var rightSide
var ball

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_opitions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}	

	//Create the Bodies Here.
ground=new Ground(width/2,670,width,20)
leftSide=new Ground(1100,600,20,120)
rightSide=new Ground(1400,600,20,120)
ball=Bodies.circle(260,100,20,ball_opitions)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.show()
  leftSide.show()
  rightSide.show()
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		
Matter.Body.applyForce(ball,ball.position,{x:80,y:-80});
	}
}
