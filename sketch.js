const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Ground1=new Ground(600,490,500,500);


}

function draw(){
    Engine.update(engine);
    strokeWeight(10);
    Ground1.display();



}