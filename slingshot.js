class Slingshot {

    constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
              pointB: pointB,
              stiffness: 1,
              length: 10
}             
    this.slingshot = loadImage("slingshot.png");
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;


    }
    


display(){
image(this.slingshot,170,120,200,200);
if(this.sling.bodyA){
    strokeWeight(7);
console.log(mouseX)
stroke(0,0,0);
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;
line(pointA.x, pointA.y+5, pointB.x+25, pointB.y+5);
line(pointA.x-20,pointA.y-5,pointB.x-25,pointB.y-5);

}
}

}
