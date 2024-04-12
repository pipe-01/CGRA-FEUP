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
		this.vertices = [];
        this.indices = [];
        this.normals = [];
		
		this.vertices = [
		//face de cima
		-0.5, 0.5, -0.5,	//0 esq frente
		0.5, 0.5, -0.5,	    //1 dir frente
		-0.5, 0.5, 0.5,	    //2 esq tras
		0.5, 0.5, 0.5,		//3 dir tras
		//face da frente
		-0.5, 0.5, 0.5,	    //4 cima esq
		0.5, 0.5, 0.5,		//5 cima dir
		-0.5, -0.5, 0.5,	//6 baixo esq
		0.5, -0.5, 0.5, 	//7 baixo dir
		//face de trás
		-0.5, 0.5, -0.5,	 //8 cima esq
		0.5, 0.5, -0.5,		//9 cima dir
		-0.5, -0.5, -0.5,	//10 baixo esq
		0.5, -0.5, -0.5, 	//11 baixo dir
		//face de baixo
		-0.5, -0.5, -0.5,	//12 esq frente
		0.5, -0.5, -0.5,	 //13 dir frente
		-0.5, -0.5, 0.5,	 //14 esq tras
		0.5, -0.5, 0.5,		//15 dir tas
		//face da esquerda
		-0.5, 0.5, -0.5,    //16 esq cima tras
		-0.5, 0.5, 0.5,      //17 esq cima frente
		-0.5, -0.5, -0.5,    //18 esq baixo atras
		-0.5, -0.5, 0.5,     //19 esq baixo frente

		//face direita
		0.5, 0.5, -0.5,      //20 dir cima tras
		0.5, 0.5, 0.5,       //21 dir cima frente
		0.5, -0.5, -0.5,     //22 dir baixo tras
		0.5, -0.5, 0.5      //23 dir baixo frente
		];

		this.normals = [
		//face de cima
		0, 1, 0,
		0, 1, 0,
		0, 1, 0,
		0, 1, 0,
		//face da frente
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		//face de tras
		0, 0, -1,
		0, 0, -1,
		0, 0, -1,
		0, 0, -1,
		// face de baixo
		0, -1, 0,
		0, -1, 0,
		0, -1, 0,
		0, -1, 0,
		// face da esquerda
		-1, 0, 0,
		-1, 0, 0,
		-1, 0, 0,
		-1, 0, 0,
		// face direta
		1, 0, 0,
		1, 0, 0,
		1, 0, 0,
		1, 0, 0,
		];
		
		this.indices = [
		//face de cima
		1, 0, 2,
		2, 3, 1,
		//face da frente
		5, 4, 6,
		6, 7, 5,
		//face de tras
		10, 8, 9,
		9, 11, 10,
		// face de baixo
		15, 14, 12,
		12, 13, 15,
		// face da esquerda
		17, 16, 19,
		18, 19, 16,
		// face direta
		20, 21, 22,
		23, 22, 21
		];
			
	
	
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

		
		
		

	}
}

