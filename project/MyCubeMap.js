import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
	constructor(scene, texty, textz, textx, textny, textnz, textnx) {
        
		super(scene);
        
        
        this.quad = new MyQuad(this.scene);
        this.quad.initBuffers();

    
    //Texture CIma
    this.text2 = new CGFappearance(this.scene);
    this.text2.setAmbient(0, 0, 0, 1);
    this.text2.setDiffuse(0, 0, 0, 1);
    this.text2.setSpecular(0, 0, 0, 1);
    this.text2.setEmission(1, 1, 1, 1);
    this.text2.setShininess(10.0);
    this.text2.loadTexture(texty);
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    //Texture Z
    this.text3 = new CGFappearance(this.scene);
    this.text3.setAmbient(0, 0, 0, 1);
    this.text3.setDiffuse(0, 0, 0, 1);
    this.text3.setSpecular(0, 0, 0, 1);
    this.text3.setEmission(1, 1, 1, 1);
    this.text3.setShininess(10.0);
    this.text3.loadTexture(textz);
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    //Texture X
    this.text4 = new CGFappearance(this.scene);
    this.text4.setAmbient(0, 0, 0, 1);
    this.text4.setDiffuse(0, 0, 0, 1);
    this.text4.setSpecular(0, 0, 0, 1);
    this.text4.setEmission(1, 1, 1, 1);
    this.text4.setShininess(10.0);
    this.text4.loadTexture(textx);
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    //Texture -X
    this.text5 = new CGFappearance(this.scene);
    this.text5.setAmbient(0, 0, 0, 1);
    this.text5.setDiffuse(0, 0, 0, 1);
    this.text5.setSpecular(0, 0, 0, 1);
    this.text5.setEmission(1, 1, 1, 1);
    this.text5.setShininess(10.0);
    this.text5.loadTexture(textnx);
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    //Texture -Z
    this.text6 = new CGFappearance(this.scene);
    this.text6.setAmbient(0, 0, 0, 1);
    this.text6.setDiffuse(0, 0, 0, 1);
    this.text6.setSpecular(0, 0, 0, 1);
    this.text6.setEmission(1, 1, 1, 1);
    this.text6.setShininess(10.0);
    this.text6.loadTexture(textnz);
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    //Texture baixo
    this.text7 = new CGFappearance(this.scene);
    this.text7.setAmbient(0, 0, 0, 1);
    this.text7.setDiffuse(0, 0, 0, 1);
    this.text7.setSpecular(0, 0, 0, 1);
    this.text7.setEmission(1, 1, 1, 1);
    this.text7.setShininess(10.0);
    this.text7.loadTexture(textny);
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

        
	}
	
	display() {
	
    //figura toda
    this.scene.pushMatrix();
    
    this.scene.translate(0, 0, 0.5);
    
    //face frente
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1, 0, 0); //Lado de dentro
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.text3.apply();
    if(this.scene.displayFilter)
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    //face direita
    this.scene.pushMatrix();
    this.text4.apply();
    this.scene.rotate(Math.PI/2, 0, 1, 0);
    this.scene.rotate(Math.PI, 0, 1, 0); // Lado dentro
    this.scene.translate(-1, 0, -1);

    this.scene.translate(0.5, 0, 0.5);
    if(this.scene.displayFilter)
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();
    
    //face esquerda
    this.scene.pushMatrix();
    this.text5.apply();
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.scene.rotate(Math.PI, 0, 1, 0); // Lado dentro
    this.scene.translate(1, 0, -1);
    this.scene.translate(-0.5, 0, 0.5);
    if(this.scene.displayFilter)
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    //face tras
    this.scene.pushMatrix();
    this.text6.apply();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.rotate(Math.PI, 1, 0, 0); //Lado de dentro
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.translate(0, 0, -2);
    
    this.scene.translate(0, 0, 1);
    if(this.scene.displayFilter)
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.quad.display();
    this.scene.popMatrix();

    //face cima
    this.scene.pushMatrix();
    this.text2.apply();
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.translate(0, -1, -1);

    this.scene.translate(0, 0.5, 0.5);
    if(this.scene.displayFilter)
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    
    this.quad.display();
    this.scene.popMatrix(); 

    //face baixo
    this.scene.pushMatrix();
    this.text7.apply();
    if(this.scene.displayFilter)
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.translate(0, 1, -1);

    this.scene.translate(0, -0.5, 0.5);
    this.quad.display();
    this.scene.popMatrix();

    //figura toda
    this.scene.popMatrix();
	}
}