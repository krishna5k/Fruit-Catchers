class Basket {
    constructor(x,y,width,height){
    var options ={
        isStatic: true
    }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("basket.png.png")
        World.add(world, this.body);
        
    }
    
    display(){
     imageMode(CENTER);
        image(this.image,810,220,320,160);
    
    }
    
    }