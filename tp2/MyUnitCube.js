import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
            //quadrado de cima
			-0.5, 0.5, -0.5,	//0 esq frente
			0.5, 0.5, -0.5,	    //1 dir frente
			-0.5, 0.5, 0.5,	    //2 esq tras
			0.5, 0.5, 0.5,		//3 dir tas
            //quadrado baixo
            -0.5, -0.5, -0.5,	//4 esq frente
			0.5, -0.5, -0.5,	 //5 dir frente
			-0.5, -0.5, 0.5,	 //6 esq tras
			0.5, -0.5, 0.5,		//7 dir tas
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			1, 0, 2, //face de cima
            2, 3, 1, //
            3, 2, 6, //face da frente
            6, 7, 3, //
            1, 3, 7, //face da direta
            7, 5, 1, 
            0, 1, 5, // face de tras
            5, 4, 0,
            6, 2, 0, // face esquerda
            0, 4, 6,
            5, 7, 6, // face baixo
            6, 4, 5
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

		
		
		

	}
}

