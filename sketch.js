
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground
function setup() {
	createCanvas(800, 700);

   
	
	engine = Engine.create();
	world = engine.world;

	
  
	//Create the Bodies Here.
   var options= {
	isStatic : true ,
   }
    ground = Bodies.rectangle(400,680,800,7.0,options)
	World.add(world,ground)
	fill ("yellow")
	Engine.run(engine);
  


	paper1 = new paper(70,350,20)
	dustbinwall1 = new dustbin(600,655,200,30)
    dustbinwall2 = new dustbin(685,620,30,100)
	dustbinwall3 = new dustbin(515,620,30,100)
	
 
	
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("red");
 
  if(paper1.x>1){
	  paper1.collide(dustbinwall3)
  }

 keyPressed()

rect(ground.position.x,ground.position.y,1200,20)

paper1.display();
 dustbinwall1.display();
 dustbinwall2.display();
 dustbinwall3.display();
}

function keyPressed () {
	if (keyCode === UP_ARROW)  {
		      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.5,y:-5});
	}
} 