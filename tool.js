class Tool {
    constructor(){
     

                
        this.body = Bodies.rectangle(50,50,50,50);
        this.width = width;
        this.height = height;
        this.image = loadImage("tool.png.png");
        World.add(world, this.body);
        
    }
   

    display(){
        imageMode(CENTER);
        image(this.image,mouseX,mouseY,50,50);
    
    }
    
    }
