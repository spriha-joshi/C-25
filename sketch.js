const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rd;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  rd= new RainDrop(400, 200, 50, 50);
  

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  rd.display(); 
  
}