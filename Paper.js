class Paper {
    constructor(x,y,r){

    
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.cirlce(this.x,this.y,this.r/2,options);
World.add(world,this.body);

    }
    if(keyPressed=UP_ARROW){
        paper.VelocityX=100;
        paper.VelopcityY=40;
   paper.body.position(x=100,y=40);
    }

display(){


  
var paper= this.body.position;
push()







}
}