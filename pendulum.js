class pendulum{
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':1,
            'friction':0,
            'density':1.5,
           'fricitonAir':0.0,
           'slop':1,
        }
        this.body = Bodies.circle(x,y,30,options);
        this.color = ("red");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill(this.color);
        ellipse(0,0,60);
        pop();
    }
}