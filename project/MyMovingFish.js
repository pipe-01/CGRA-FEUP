import { MyFish } from "./MyFish.js";;
import { MyMovingObject } from "./MyMovingObject.js";

export class MyMovingFish extends MyMovingObject {
    constructor(scene, angle, velocity, centerX, centerY, centerZ) {
        super(scene);

        this.angle = angle; //Angle with y axis

        this.velocity = 0;
        
        this.pickable = [];
        this.picked = false;
        this.centerX = centerX;
        this.centerY = centerY;
        this.centerYInit = centerY;
        this.centerZ = centerZ;
        this.upVelocity = 0;
        this.dist = 10;
        
        this.direction = 0; //Z axis, turn right or left
        
        this.fish = new MyFish(this.scene, 1, 0, 0, 0.4, 'images/scales.png');
        


        this.initBuffers();
    }

    display () {
        
        this.scene.pushMatrix();
        
        this.scene.translate(0 + this.centerX , this.centerY , 0 + this.centerZ  );
        this.scene.rotate( this.direction, 0, 0, 1);
        this.scene.rotate( this.angle, 0, 1, 0);
        
        this.direction // angulo
        
        
        

        this.fish.display();
        
        this.scene.popMatrix();
    }

    update(t){
        this.centerZ += this.velocity * this.scene.speedFactor * Math.cos(this.angle);
        this.centerX += this.velocity * this.scene.speedFactor * Math.sin(this.angle);
        this.centerY += this.upVelocity;
        if(this.centerY >= 4.9 )
            this.upVelocity = 0;
        if(this.centerY <= 1.1)
            this.upVelocity = 0;
        
        this.fish.velocity = this.velocity;
        this.fish.update(t);
        
        

        
       

    }

    
    accelarate(val){
        this.velocity += val;
    }

    turn (val) { //Rodar sobre si mesmo?
        
        this.angle += val;
        // this.direction += val;
    }

    reset (){
        this.angle = 0;
        this.velocity = 0;
        this.centerX = 0;
        this.centerY = this.centerYInit;
        this.centerZ = 0;
        this.direction = 0;  
        this.upVelocity = 0;
    }

    up (){
        if(this.centerY >= 1.0 && this.centerY <= 4.9)
        this.upVelocity = 0.25 / 3;
    }

    down () {
        if(this.centerY >= 1.1 && this.centerY <= 5.0)
        this.upVelocity = -0.25 / 3;
    }

    
}


