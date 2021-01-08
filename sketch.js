
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Bodies are created here

	roof = new Roof(400, 100, 350, 40);

	bob1 = new Bob(300, 400, 25);
	bob2 = new Bob(350, 400, 25);
	bob3 = new Bob(400, 400, 25);
	bob4 = new Bob(450, 400, 25);
	bob5 = new Bob(500, 400, 25);

	//rope1 = new Rope (bob1.body, roof.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



