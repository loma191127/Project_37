class Obj{
    constructor(x, y) {
     this.body = Bodies.rectangle(x, y, 100,100, options);
     this.radius = 20/2;
     this.color=color(255,255,255);
    }
    display(){
     var pos =this.body.position;
     var angle=this.body.angle;
     fill(this.color);
     push ();
     translate (pos.x,pos.y);
     rotate(angle);
     strokeWeight(5);
     stroke(this.color);
     pop ();
    }
   }