import { MyFish } from "./MyFish.js";;
import { MyMovingObject } from "./MyMovingObject.js";

export class MyAnimatedFish extends MyMovingObject {
    constructor(scene, angle, centerX, centerY, centerZ, time) {
        super(scene);

        this.angle = angle; //Angle with y axis

        this.centerX = centerX;
        this.centerY = centerY;
        this.centerZ = centerZ;
        this.radius = 5;
        this.time = time;

        this.velocity = (2 * Math.PI) / this.time;
        
        this.direction = 0; //Z axis, turn right or left
        
        if(time > 5){   
            this.fish = new MyFish(this.scene, 0/255, (Math.random() * (255 - 21) + 21)/255, (Math.random() * (255 - 170) + 170)/255, Math.random()* (0.8 - 0.3) + 0.3, 'images/bluescales.jpg');
        }
        else{
            this.fish = new MyFish(this.scene, 255/255, (Math.random() * (190 - 170) + 170)/255, 0/255,  Math.random()* (0.8 - 0.3) + 0.3, 'images/orangescales.jpg');
        }
        this.initTime = 0;

    }

    display () {
        this.scene.pushMatrix();
        this.scene.translate(Math.sin(this.angle) * this.radius, 0, Math.cos(this.angle) * this.radius);
        this.scene.translate(this.centerX, this.centerY , this.centerZ);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.fish.display();
        this.scene.popMatrix();
    }

    update(t){
        var inc = (t - this.initTime) * 0.001;
        this.initTime = t;
        this.angle += this.velocity * inc;
        this.fish.velocity = this.velocity;
        this.fish.update(t);
    }
}