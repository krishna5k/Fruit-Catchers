class Orange {
    constructor(x,y,width,height){
    var options ={
        //'restitution':1.0,
        'friction':1.0,
        'density':1.0
    }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("fruit2.png.png")
        World.add(world, this.body);
        
    }
    
    display(){
        text("SCORE:"+score,600,200);
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
        if(this.body.position.x>685&&this.body.position.y>=185&&this.body.position.x<930&&this.body.position.y<250){
            score = score + 1
            
            }
    }
    
    }