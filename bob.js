class Bob {
   constructor(x, y,r) {
      var options={
         //isStatic : true,
         restitution: 0.8,
         friction : 0.5,
         density : 1,
      }

       this.body = Bodies.circle(x, y, r/2, options);
       this.x = x;
       this.y = y;
       this.r = r;
       
       World.add(world, this.body);
   }


   display() {
   
   var pos = this.body.position;

   push();
   translate(pos.x, pos.y)
   ellipseMode(RADIUS);
   fill ("maroon")
   stroke("black");
   ellipse(0, 0,this.r);
   pop();
   }

   }





           
        
