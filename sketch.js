var helicopterIMG, helicopterSprite,package,packageIMG,wall,wall1,wall2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	package = createSprite(200,400, 20,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)

	wall = createSprite (400,650, 200,40)
	wall.shapeColor = ("red")


	wall1 = createSprite (500,590,40,200)
	wall1.shapeColor = ("red")


	wall2 = createSprite (300,590,40,200)
	wall2.shapeColor = ("red")




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
 
	wall = Bodies.rectangle(400, 650, 200, 40 , {isStatic:true} );
	World.add(world,wall);




	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y
  package.display();
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody , false);
	
	var packageBody_options = {


		restitution : 0.3
	
	 }
	
	
  }
}



