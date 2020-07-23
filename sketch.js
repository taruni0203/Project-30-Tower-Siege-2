const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,polygon,rope;

function setup() {
  var canvas = createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,580,width,20);
  platform1 = new Ground(700,450,300,20);
  platform2 = new Ground(1200,250,300,20);

  box1 = new Box(575,420,50,50);
  box2 = new Box(625,420,50,50);
  box3 = new Box(675,420,50,50);
  box4 = new Box(725,420,50,50);
  box5 = new Box(775,420,50,50);
  box6 = new Box(825,420,50,50);
  
  box7 = new Box(625,370,50,50);
  box8 = new Box(675,370,50,50);
  box9 = new Box(725,370,50,50);
  box10 = new Box(775,370,50,50);

  box11 = new Box(675,320,50,50);
  box12 = new Box(725,320,50,50);

  box13 = new Box(700,270,50,50);

  box14 = new Box(1075,220,50,50);
  box15 = new Box(1125,220,50,50);
  box16 = new Box(1175,220,50,50);
  box17 = new Box(1225,220,50,50);
  box18 = new Box(1275,220,50,50);
  box19 = new Box(1325,220,50,50);
  
  box20 = new Box(1125,170,50,50);
  box21 = new Box(1175,170,50,50);
  box22 = new Box(1225,170,50,50);
  box23 = new Box(1275,170,50,50);

  box24 = new Box(1175,120,50,50);
  box25 = new Box(1225,120,50,50);

  box26 = new Box(1200,70,50,50);

  var options={
    isStatic: false
  }

  polygon = new Polygon(150,200);

  rope = new Slingshot(polygon.body,{x:150,y:200});
}

function draw() {
  background(0);  
  Engine.update(engine);

  fill(78,195,117);
  ground.display();
  platform1.display();
  platform2.display();

  fill(235,111,169);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  fill(157,63,191);
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  fill(130,217,217);
  box11.display();
  box12.display();

  fill(255);
  box13.display();


  fill(235,111,169);
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  fill(157,63,191);
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  fill(130,217,217);
  box24.display();
  box25.display();

  fill(255);
  box26.display();


  polygon.display();
  rope.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(polygon.body);
  }
}