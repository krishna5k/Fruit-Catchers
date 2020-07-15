const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var backgroundImg
var score = 0

function preload (){
backgroundImg= loadImage("background.png.jpg")

}


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
ground1 = new Ground(600,380,1200,20)
truck = new Truck(400,200,20,20)
basket = new Basket(400,200,80,20)
strawberry1 = new Strawberry (400,200,80,80)
orange1 = new Orange(300,200,80,80)
tool = new Tool()
ground2 = new Ground(110,300,230,180)
ground2.debug = true;
slingshot = new Slingshot(orange1.body,{x:180, y:60})
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  ground1.display();
truck.display();
//strawberry1.display();
orange1.display();
basket.display();
tool.display();
ground2.display();
slingshot.display();


console.log(mouseY)

}

function mousePressed(){

  

}
function mouseDragged(){
Matter.Body.setPosition(orange1.body ,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}