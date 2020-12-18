
const Engine =Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var engine,world;
var box,ball,ground;
function setup() {
createCanvas(400,400);
engine = Engine.create();
world= engine.world;

box= Bodies.rectangle(320,280,50,100);
World.add(world,box);
var  ball_options={
  restitution:1
}
ball=Bodies.circle(120,150,20,ball_options);
World.add(world,ball);
console.log(box);
ground_options ={
  isStatic: true
}
ground= Bodies.rectangle(200,380,400,20,ground_options);
World.add(world,ground);


}

function draw() {
  background("pink");
  Engine.update(engine) ;
rectMode(CENTER);
rect(200,200,50,50);

rect(box.position.x,box.position.y,50,100);
rect(ground.position.x,ground.position.y,400,20);
circle(ball.position.x,ball.position.y,40);

}