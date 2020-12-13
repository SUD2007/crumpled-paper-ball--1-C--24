
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(10000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    dustbin1Sprite = createSprite( 1400 , 650 ,400,30 , {isStatic:true});
	dustbin1Sprite.scale=0.5;
	dustbin1Sprite.shapeColor=color("white");

	dustbin2Sprite = createSprite(1300,575,20,135);
	dustbin2Sprite.shapeColor =color("white");

	dustbin3Sprite = createSprite(1500,575,20,135);
	dustbin3Sprite.shapeColor = color("white");

	paperSprite=createSprite(100,400,30,30);
	Matter.Bodies.circle(600,300,30,50);
	paperSprite.shapeColor=color("red")
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:85,y:-85});
	}
}



