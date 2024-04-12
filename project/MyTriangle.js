import {CGFobject} from '../lib/CGF.js';

export class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0 baixo esq
			0, 0, 0,	//1 centro
			-1, 1, 0,	//2 esq cima
			-1, -1, 0,	//3
			0, 0, 0,	//4
			-1, 1, 0	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
			
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];

		this.texCoords = [
			1, 0,
			0.5 , 0.5,
			0, 0 ,
			1, 0,
			0.5 , 0.5,
			0, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}