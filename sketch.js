const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var corda;
var fruit;
var conection
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
var optionsfruit={
   density:0.001
}

//criar corpo da fruta 
 fruit=Bodies.circle(200,100,20,optionsfruit)
 //World.add(world,fruit)
  corda=new Rope(5,{x:250,y:30})
  //chamando a classe rope 5 é a medida e o resto é posição

  Matter.Composite.add(corda.body,fruit)
  conection=new Link(corda,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
   corda.show()
   ellipse(fruit.position.x,fruit.position.y,20,20)
  Engine.update(engine);


  

 
   
}
