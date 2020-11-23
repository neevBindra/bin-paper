class Paper{
    constructor(){
    var op ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

       this.body = Bodies.circle(120,250,70,op)
        this.image = loadImage("paper.png");
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
     
        fill ("white")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,70);
        imageMode (CENTER);
        image(this.image,pos.x,pos.y,150,190);
    }

}