import {CGFappearance, CGFobject, CGFshader} from '../lib/CGF.js';
import { MyPyramid } from './MyPyramid.js';

export class MyPyramidSet extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} number - number of rocks
   * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
   */
  constructor(scene, number) {
    super(scene);
    this.numberPyramid = number;
    this.arrayPyramid = [];

    this.positionX = Math.random() * (20 - (-20) + 1) - 20;
    this.positionZ = Math.random() * (20 - (-20) + 1) - 20;

    
    this.color = new CGFappearance(this.scene);
    this.color.setAmbient((Math.random() * (230 - 3) + 3)/255, 252/255, (Math.random() * (160 - 3) + 3)/255, 1);
    this.color.setDiffuse((Math.random() * (230 - 3) + 3)/255, 252/255, (Math.random() * (160 - 3) + 3)/255, 1);
    this.color.setSpecular((Math.random() * (230 - 3) + 3)/255, 252/255, (Math.random() * (160 - 3) + 3)/255, 1);
    this.color.setShininess(100);


    for(let aux = 0; aux < this.numberPyramid; aux++){
        var x = Math.random() * (0.5) + 0.5;
        var z = Math.random() * (0.5) + 0.5;
        let algae = new MyPyramid(scene, 3, 1, this.positionX + x, Math.random()* 0.1, this.positionZ + z, Math.random()*(0.2 - 0.1) + 0.1, Math.random()*(1.5 - 0.3) + 0.3, Math.random()*(0.2 - 0.1) + 0.1);
        this.arrayPyramid.push(algae);
    }

  }


  display(){
    for(let aux = 0; aux < this.numberPyramid; aux++){
        this.scene.pushMatrix();
        this.scene.translate(this.arrayPyramid[aux].centerX, this.arrayPyramid[aux].centerY, this.arrayPyramid[aux].centerZ);
        this.scene.scale(this.arrayPyramid[aux].scaleX, this.arrayPyramid[aux].scaleY, this.arrayPyramid[aux].scaleZ);
        this.color.apply();
        this.arrayPyramid[aux].display();
        this.scene.popMatrix();
    }
  }

}
