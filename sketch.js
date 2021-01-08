
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


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

	rope1 = new Rope (bob1.body, roof.body, -100, 25);
	rope2 = new Rope (bob2.body, roof.body, -50, 25);
	rope3 = new Rope (bob3.body, roof.body, 0, 25);
	rope4 = new Rope (bob4.body, roof.body, 50, 25);
	rope5 = new Rope (bob5.body, roof.body, 100, 25);

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
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.setStatic(bob1.body, false);
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-30, y:-30})
	}
  }
