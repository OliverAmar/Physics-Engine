const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,790,800,50,groundOptions);

  World.add(world,ground)

  var ballOptions = {
    restitution: 2
  }

  ball = Bodies.circle(680,120,10,ballOptions);

  World.add(world,ball)

}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,800,50);

  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,10,10);

  drawSprites();
}