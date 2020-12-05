const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

function setup(){
    createCanvas(windowWidth/2,windowHeight/2);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world, mConstraint);

bob1 = new pendulum(160,height-60,30);
bob2 = new pendulum(220,height-60,30);
bob3 = new pendulum(280,height-60,30);
bob4 = new pendulum(340,height-60,30);
bob5 = new pendulum(400,height-60,30);

sling1 = new sling(bob1.body,{x:160,y:height-260});
sling2 = new sling(bob2.body,{x:220,y:height-260});
sling3 = new sling(bob3.body,{x:280,y:height-260});
sling4 = new sling(bob4.body,{x:340,y:height-260});
sling5 = new sling(bob5.body,{x:400,y:height-260});
    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}