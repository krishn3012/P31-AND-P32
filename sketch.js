const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  

    box1 = new Box(740,350,70,70);
    box2 = new Box(880,350,70,70);
    pig1 = new Pig(810, 350);
    

    box3 = new Box(740,350,70,70);
    box4 = new Box(880,350,70,70);
    pig3 = new Pig(810, 350);

    

    box5 = new Box(810,260,70,70);

    pig10 = new Pig(810, 200);
    pig11 = new Pig(740, 300);
    pig12 = new Pig(880, 300);


    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
 

    box3.display();
    box4.display();
    pig3.display();
  

    box5.display();

    pig10.display();
    pig11.display();
    pig12.display();
    

    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}