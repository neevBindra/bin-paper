
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,paper,ground;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,620,1200,10);
	paper = new Paper();
    bin = new Bin();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);

  paper.display();
  ground.display();
  bin.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})  }
}



