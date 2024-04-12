import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        
		super(scene);
        
        
        this.quad = new MyQuad(this.scene);
        this.quad.initBuffers();

    // //Texture CIma
    // this.text2 = new CGFappearance(this.scene);
    // this.text2.setAmbient(0.1, 0.1, 0.1, 1.0);
    // this.text2.setDiffuse(0.9, 0.9, 0.9, 1.0);
    // this.text2.setSpecular(1.0, 1.0, 1.0, 1.0);
    // this.text2.setShininess(10.0);
    // this.text2.loadTexture('images/mineTop.png');
    // // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    // //Texture
    // this.text3 = new CGFappearance(this.scene);
    // this.text3.setAmbient(0.1, 0.1, 0.1, 1.0);
    // this.text3.setDiffuse(0.9, 0.9, 0.9, 1.0);
    // this.text3.setSpecular(1.0, 1.0, 1.0, 1.0);
    // this.text3.setShininess(10.0);
    // this.text3.loadTexture('images/mineSide.png');
    // // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    // //Texture
    // this.text4 = new CGFappearance(this.scene);
    // this.text4.setAmbient(0.1, 0.1, 0.1, 1.0);
    // this.text4.setDiffuse(0.9, 0.9, 0.9, 1.0);
    // this.text4.setSpecular(1.0, 1.0, 1.0, 1.0);
    // this.text4.setShininess(10.0);
    // this.text4.loadTexture('images/mineSide.png');
    // // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    // //Texture
    // this.text5 = new CGFappearance(this.scene);
    // this.text5.setAmbient(0.1, 0.1, 0.1, 1.0);
    // this.text5.setDiffuse(0.9, 0.9, 0.9, 1.0);
    // this.text5.setSpecular(1.0, 1.0, 1.0, 1.0);
    // this.text5.setShininess(10.0);
    // this.text5.loadTexture('images/mineSide.png');
    // // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    // //Texture
    // this.text6 = new CGFappearance(this.scene);
    // this.text6.setAmbient(0.1, 0.1, 0.1, 1.0);
    // this.text6.setDiffuse(0.9, 0.9, 0.9, 1.0);
    // this.text6.setSpecular(1.0, 1.0, 1.0, 1.0);
    // this.text6.setShininess(10.0);
    // this.text6.loadTexture('images/mineSide.png');
    // // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    // //Texture baixo
    // this.text7 = new CGFappearance(this.scene);
    // this.text7.setAmbient(0.1, 0.1, 0.1, 1.0);
    // this.text7.setDiffuse(0.9, 0.9, 0.9, 1.0);
    // this.text7.setSpecular(1.0, 1.0, 1.0, 1.0);
    // this.text7.setShininess(10.0);
    // this.text7.loadTexture('images/mineBottom.png');
    // // this.text1.setTextureWrap('REPEAT', 'REPEAT');

        
	}
	
	display() {
	
    //figura toda
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    
    //face frente
    this.scene.pushMatrix();
    this.quad.display();
    this.scene.popMatrix();

    //face direita
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0, 1, 0);
    this.scene.translate(0.5, 0, 0.5);
    this.quad.display();
    this.scene.popMatrix();
    
    //face esquerda
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.scene.translate(-0.5, 0, 0.5);
    this.quad.display();
    this.scene.popMatrix();

    //face tras
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.translate(0, 0, 1);
    this.quad.display();
    this.scene.popMatrix();

    //face cima
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    this.scene.translate(0, 0.5, 0.5);
    // this.text2.apply();
    this.quad.display();
    this.scene.popMatrix(); 

    //face baixo
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.translate(0, -0.5, 0.5);
    this.quad.display();
    this.scene.popMatrix();

    //figura toda
    this.scene.popMatrix();
	}
}