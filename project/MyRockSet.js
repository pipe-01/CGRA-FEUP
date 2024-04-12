import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyRock } from './MyRock.js';

export class MyRockSet extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} number - number of rocks
   * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
   */
  constructor(scene, number) {
    super(scene);
    this.numberRock = number;
    this.arrayRock = [];

    for(let aux = 0; aux < this.numberRock; aux++){
        let rock = new MyRock(scene, 16, 8, Math.random() * (20 - (-20) + 1) - 20, Math.random()* 0.1, Math.random()*(20 - (-20) + 1) - 20, Math.random()*(0.2 - 0.1) + 0.1, Math.random()*(0.2 - 0.1) + 0.1, Math.random()*(0.2 - 0.1) + 0.1);
        this.arrayRock.push(rock);
    }

  }


  display(){
    for(let aux = 0; aux < this.numberRock; aux++){
        this.scene.pushMatrix();
        this.scene.translate(this.arrayRock[aux].centerX, this.arrayRock[aux].centerY, this.arrayRock[aux].centerZ);
        this.scene.scale(this.arrayRock[aux].scaleX, this.arrayRock[aux].scaleY, this.arrayRock[aux].scaleZ);
        this.arrayRock[aux].display();
        this.scene.popMatrix();
    }
  }

  reset (){
    for(let aux = 0; aux < this.numberRock; aux++){
    this.arrayRock[aux].centerX = this.arrayRock[aux].startX;
    this.arrayRock[aux].centerY = this.arrayRock[aux].startY;
    this.arrayRock[aux].centerZ = this.arrayRock[aux].startZ;
    }
  }
}
