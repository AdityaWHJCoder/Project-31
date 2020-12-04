const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

//console.log(divisions);

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480, 800);
  //var canvas = createCanvas(900, 900);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  ground = new Ground(600,height,1200,20);

  /*division5 = new Division(560, 639, 10, 300);
  division6 = new Division(480, 639, 10, 300);
  division7 = new Division(400, 639, 10, 300);
  division8 = new Division(320, 639, 10, 300);
  division1 = new Division(240, 639, 10, 300);
  division2 = new Division(160, 639, 10, 300);
  division3 = new Division(80, 639, 10, 300);
  division4 = new Division(1, 639, 10, 300);*/
  
  //test = new Plinko(240, 400, 10);
  
}

function draw() {
  background(0);
  Engine.update(engine);  

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/ 2 +10), 10, 10 ));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[k].display();
  }

  ground.display();
  /*division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();*/
  //test.display();
  //spawnWalls();

  drawSprites();
}

//function spawnWalls(){
//}

/*for (var k = 0; k <= 10; k = k + 80){
  divisions.push(new Division(k, 300 - divisionHeight/2, 10, divisionHeight));
}*/
