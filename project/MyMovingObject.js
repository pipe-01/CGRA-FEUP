import {CGFobject} from '../lib/CGF.js';
import {MyPyramid} from './MyPyramid.js';
/**
// * MyPyramid
// * @constructor
//  * @param scene - Reference to MyScene object
//  * @param slices - number of divisions around the Y axis
//  * @param stacks - number of divisions along the Y axis
*/
export class MyMovingObject extends CGFobject {
    constructor(scene, object, angle, velocity, centerX, centerY, centerZ) {
        super(scene);

        this.angle = angle; //Angle with y axis

        this.velocity = 0;
        
        this.centerX = centerX;
        this.centerY = centerY;
        this.centerZ = centerZ;
        this.upVelocity = 0;
        
        this.direction = 0; //Z axis, turn right or left
        
        this.pyramid = object;
        


        this.initBuffers();
    }

    display () {
        
        this.scene.pushMatrix();
        
        this.scene.translate(0 + this.centerX , this.centerY , 0 + this.centerZ  );
        this.scene.rotate(Math.PI / 2, 1, 0, 0); 
        this.scene.rotate( this.direction, 0, 0, 1);
        this.scene.rotate( this.angle, 0, 1, 0);
        
        this.direction // angulo
        
        
        

        this.pyramid.display();
        
        this.scene.popMatrix();
    }

    update(t){
        this.centerZ += this.velocity * this.scene.speedFactor * Math.cos(-this.direction);
        this.centerX += this.velocity * this.scene.speedFactor * Math.sin(-this.direction);
        this.centerY += this.upVelocity;
        
    }

    
    accelarate(val){
        this.velocity += val;
    }

    turn (val) { //Rodar sobre si mesmo?
        
        // this.angle += val;
        this.direction += val;
    }

    reset (){
        this.angle = 0;
        this.velocity = 0;
        this.centerX = 0;
        this.centerY = 0;
        this.centerZ = 0;
        this.direction = 0;  
        this.upVelocity = 0;
    }

    
}


