const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    iron = new Iron(700,120,100,80);
    ground = new Ground(600,height,1200,20)
    rubber = new Rubber(810,150);
    sand1 = new Sand(810,260,20,20)
    sand2 = new Sand(810,180,20,20)
    sand3 = new Sand(760,120,20,20)
    sand4 = new Sand(870,120,20 ,20)
    hammer = new Hammer(100,100)
    stone = new Stone(500,100,50,50)
}

function draw(){
    background("cyan");
    Engine.update(engine);
    iron.display();
    ground.display();
    sand1.display()
    sand2.display();
    sand3.display()
    sand4.display()
    hammer.display();
    rubber.display();
    stone.display();
}