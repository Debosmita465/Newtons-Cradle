class sling{
   constructor(bodyA,pointB){
       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness:1,
           angularStiffness:1,
           length:210
       }
       this.pointB = pointB;
       this.sling = Constraint.create(options);
       World.add(world,this.sling);
    
   }
   display(){
       if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           push();
           strokeWeight(2);
           stroke("#fff");
           line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
           pop();
       }
   } 
}