import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
            3, 1, 0,    //2
            1, 1, 0,    //3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
            3, 2, 0,
            1, 2, 0,
            0, 2, 3
		];

		this.normals = [
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];


		this.texCoords = [
			1, 1,// esq baixo
			0.5, 1,// dir baixo
			0.25, 0.75,// dir cima
			0.75, 0.75// esq cima
		];


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
            3, 1, 0,    //2
            1, 1, 0,    //3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
            3, 2, 0,
            1, 2, 0,
            0, 2, 3
		];

		this.normals = [
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];


		this.texCoords = [
			1, 1,// esq baixo
			0.5, 1,// dir baixo
			0.25, 0.75,// dir cima
			0.75, 0.75// esq cima
		];


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}