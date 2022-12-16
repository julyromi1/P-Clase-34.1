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
var ball;
var ball1;
var blower;
var blower2;
var blower3;
var blowerMouth;
var button;

var leftBoundary,rightBoundary;
var upBoundary,downBoundary;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  rightBoundary=createSprite(0,0,10,1000);
rightBoundary.visible = false;

leftBoundary=createSprite(500,0,10,1000);
leftBoundary.visible = true;

upBoundary=createSprite(0,0,1000,10);
upBoundary.visible = false;

downBoundary=createSprite(0,500,1000,10);
downBoundary.visible = true;


  ball = new Ball(width / 2 + 80, height / 2 - 110, 80, 80);
  ball1 = new Ball(width / 2, height / 2, 50, 50);
  blower = new Blower(width / 2 - 50, height / 2 + 250, 150, 20);
  blower2 = new Blower(width / 2 + 170, height / 2 + 50, 100, 40);
  blower3 = new Blower(width / 2 - 200, height / 2 + 170, 90, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 - 90, 100, 50);


  button = createButton("Haz clic para soplar");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  blower2.show();
  blower3.show();
  ball.show();
  ball1.show();
  blowerMouth.show();

  //
  drawSprites();

  ball.bounceOff(upBoundary);
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  Matter.Body.applyForce(ball1.body, {x:0, y:0}, {x:0, y:0.05});
}

