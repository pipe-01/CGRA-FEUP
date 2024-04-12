/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0 esquerda
			0, -1, 0,	//1 baixo
			0, 1, 0,	//2 cima
			1, 0, 0		//3 direta
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 2, 1
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.texCoords = [
			0.25, 0.25, //esq
			0, 0.5, //baix
			0.5, 0.5, //cima
			0.25, 0.75 //direita
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

		
		
		

	}
}

import {CGFobject} from '../lib/CGF.js';
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0 esquerda
			0, -1, 0,	//1 baixo
			0, 1, 0,	//2 cima
			1, 0, 0		//3 direta
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 2, 1
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.texCoords = [
			0.25, 0.25, //esq
			0, 0.5, //baix
			0.5, 0.5, //cima
			0.25, 0.75 //direita
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

		
		
		

	}
}

