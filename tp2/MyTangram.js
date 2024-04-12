import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
        
		super(scene);
        
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglesmall2 = new MyTriangleSmall(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglebig2 = new MyTriangleBig(this.scene);
		this.triangle.initBuffers();
        this.parallelogram.initBuffers() ;
        this.trianglesmall.initBuffers();
        this.trianglesmall2.initBuffers() ;
        this.trianglebig.initBuffers() ;
        this.trianglebig2.initBuffers() ;
        
	}
	
	display() {
		// this.vertices = [
		// 	-2, 0, 0,	//0
		// 	2, 0, 0,	//1
		// 	0, 2, 0,	//2
		// ];

		// //Counter-clockwise reference of vertices
		// this.indices = [
		// 	0, 1, 2,
		// ];

		// //The defined indices (and corresponding vertices)
		// //will be read in groups of three to draw triangles
		// this.primitiveType = this.scene.gl.TRIANGLES;

		// this.initGLBuffers();


    //DIAMOND
    this.scene.pushMatrix();
    var translacao__1 = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, -0.70710678, 0, 1
    ];

    this.scene.multMatrix(translacao__1);


    var ang45 = Math.PI / 4;
    var rotacao_45 = [
      Math.cos(ang45), Math.sin(ang45), 0, 0,
      -Math.sin(ang45), Math.cos(ang45), 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
    this.scene.multMatrix(rotacao_45);




    this.diamond.display();

    this.scene.popMatrix();
  //TRIANGLEBIG
  
    this.trianglebig.display();
  
// ---- END Primitive drawing section

  //TRIANGLEBIG2
  this.scene.pushMatrix();
   
    
   this.scene.translate(2, 2 , 0) ;
    
    this.scene.rotate(Math.PI, 0, 0, 1);
    
      this.trianglebig2.display();
    
    this.scene.popMatrix();

    //PARALELOGRAM
    this.scene.pushMatrix();

    
  this.scene.translate( 3.70710678, -1 , 0 ) ;
    this.scene.rotate(Math.PI, 0, 1, 0);
    
      this.parallelogram.display();
    
    this.scene.popMatrix();

    //TRIANGLE
  this.scene.pushMatrix();
  
this.scene.translate( 0.70710678, -1.4 , 0 ) ;
  this.scene.rotate(Math.PI -Math.PI/4, 0, 0, 1);


    this.triangle.display();
  
  this.scene.popMatrix();
    

  //TRIANGLESMALL1
  this.scene.pushMatrix();
 
  
// this.scene.translate(-1.29289322, -0.70710678 , 0) ; 
//   this.scene.rotate(-Math.PI/2 + Math.PI/4, 0, 0, 1);
    this.scene.translate(-0.70710678118654752440084436210485,0,0);
    this.scene.rotate(-Math.PI/4,0,0,1);
    this.scene.translate(0,-1,0);
    this.trianglesmall.display();
  
  this.scene.popMatrix();

  //TRIANGLESMALL2
  this.scene.pushMatrix();

  this.scene.translate(-3, 0 , 0  ) ; 
  this.trianglesmall2.display();
  
  this.scene.popMatrix();

	}
}