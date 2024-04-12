import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, 0.5, 0,	    //0 esquerda cima
			0.5, 0.5, 0,	//1 direita cima
			-0.5, -0.5, 0,	//2 esquerda baixo
			0.5, -0.5, 0		//3 direita baixo
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			1, 0, 2, //
			2, 3, 1
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

		
		
		

	}
}

