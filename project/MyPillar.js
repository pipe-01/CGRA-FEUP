import {CGFobject, CGFappearance, CGFtexture, CGFshader} from '../lib/CGF.js';

import { MyCylinder } from "./MyCylinder.js";

export class MyPillar extends CGFobject {
    constructor(scene, x, z) {
        super(scene);

        this.centerX = x;
        this.centerY = 0;
        this.centerZ = z;
        this.pillar = new MyCylinder(this.scene, 16, 8, 1);
        
        this.piltex = new CGFappearance(this.scene);
		this.piltex.setAmbient(1, 1, 1, 1);
        this.piltex.loadTexture('images/wood.png');
        this.piltex.setTextureWrap('REPEAT', 'REPEAT');


        this.initBuffers();
    }

    display () {

        this.scene.pushMatrix();
        this.scene.translate(this.centerX, this.centerY, this.centerZ);
        this.piltex.apply();
        this.scene.scale(0.5, 11, 0.5);
        this.scene.translate(0, 0.5, 0);
        this.pillar.display(); 

        this.scene.popMatrix();
    }

    update(t){
        
    }




}


