import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleSmall2 } from "./MyTriangleSmall2.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleBig2 } from "./MyTriangleBig2.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {

    updateCustomMaterial() {
    this.customMaterial.setAmbient(...this.hexToRgbA(this.customMaterialValues['Ambient']));
    this.customMaterial.setDiffuse(...this.hexToRgbA(this.customMaterialValues['Diffuse']));
    this.customMaterial.setSpecular(...this.hexToRgbA(this.customMaterialValues['Specular']));

    this.customMaterial.setShininess(this.customMaterialValues['Shininess']);

};

	constructor(scene) {
        
		super(scene);
        

        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglesmall2 = new MyTriangleSmall2(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglebig2 = new MyTriangleBig2(this.scene);
		    this.triangle.initBuffers();
        this.parallelogram.initBuffers() ;
        this.trianglesmall.initBuffers();
        this.trianglesmall2.initBuffers() ;
        this.trianglebig.initBuffers() ;
        this.trianglebig2.initBuffers() ;

      //roxo
      this.roxo = new CGFappearance(this.scene);
      this.roxo.setAmbient(194/255, 3/255, 252/255, 1.0); 
      this.roxo.setDiffuse(194/255, 3/255, 252/255, 1.0);
      this.roxo.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.roxo.setShininess(10.0);
      //azul 45, 173, 247
      this.azul = new CGFappearance(this.scene);
      this.azul.setAmbient(45/255, 173/255, 247/255, 1.0);
      this.azul.setDiffuse(45/255, 173/255, 247/255, 1.0);
      this.azul.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.azul.setShininess(10.0);
      // vermelho: 255, 33,37
      this.vermelho = new CGFappearance(this.scene);
      this.vermelho.setAmbient(255/255, 33/255, 37/255, 1.0);
      this.vermelho.setDiffuse(255/255, 33/255, 37/255, 1.0);
      this.vermelho.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.vermelho.setShininess(10.0);
    // verde: 33, 255, 25
      this.verde = new CGFappearance(this.scene);
      this.verde.setAmbient(33/255, 255/255, 25/255, 1.0);
      this.verde.setDiffuse(33/255, 255/255, 25/255, 1.0);
      this.verde.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.verde.setShininess(10.0);
    // cor de rosa: 252, 3, 227
      this.cdrosa = new CGFappearance(this.scene);
      this.cdrosa.setAmbient(255/255, 123/255, 178/255, 1.0);
      this.cdrosa.setDiffuse(255/255, 123/255, 178/255, 1.0);
      this.cdrosa.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.cdrosa.setShininess(10.0);  
    // amarelo: 255, 255, 0
    this.amarelo = new CGFappearance(this.scene);
    this.amarelo.setAmbient(240/255, 230/255, 140/255, 1.0);
    this.amarelo.setDiffuse(240/255, 230/255, 140/255, 1.0);
    this.amarelo.setSpecular(0.8, 0.8, 0.8, 1.0);
    this.amarelo.setShininess(10.0); 
    // laranja: 255, 157, 0
    this.laranja = new CGFappearance(this.scene);
    this.laranja.setAmbient(255/255, 157/255, 0/255, 1.0);
    this.laranja.setDiffuse(255/255, 157/255, 0/255, 1.0);
    this.laranja.setSpecular(0.8, 0.8, 0.8, 1.0);
    this.laranja.setShininess(10.0); 

    //Texture
    this.text1 = new CGFappearance(this.scene);
    this.text1.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.text1.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.text1.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.text1.setShininess(10.0);
    this.text1.loadTexture('images/tangram.png');
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

	}




    enableNormalViz(){
      this.diamond.enableNormalViz();
      this.triangle.enableNormalViz();
      this.parallelogram.enableNormalViz();
      this.trianglesmall.enableNormalViz();
      this.trianglesmall2.enableNormalViz();
      this.trianglebig.enableNormalViz();
      this.trianglebig2.enableNormalViz();
    }

    disableNormalViz(){
      this.diamond.disableNormalViz();
      this.triangle.disableNormalViz();
      this.parallelogram.disableNormalViz();
      this.trianglesmall.disableNormalViz();
      this.trianglesmall2.disableNormalViz();
      this.trianglebig.disableNormalViz();
      this.trianglebig2.disableNormalViz();
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
    
    

    //CENA GERAL
    
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/6, 0, 0, 1);
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
    
    
    // if(this.scene.selectedMaterial == 3)
    // this.scene.customMaterial.apply(); // Definir verde ou material custom
    // else
    // this.verde.apply();
    this.text1.apply();
    
    
    
    this.diamond.display();
    this.scene.popMatrix();
  //TRIANGLEBIG
    // this.azul.apply();
    this.text1.apply();
    this.trianglebig.display();
  
// ---- END Primitive drawing section

  //TRIANGLEBIG2
  this.scene.pushMatrix();
   
    
   this.scene.translate(2, 2 , 0) ;
    
    this.scene.rotate(Math.PI, 0, 0, 1);
      // this.laranja.apply();
      this.text1.apply();
      this.trianglebig2.display();
    
    this.scene.popMatrix();

    //PARALELOGRAM
    this.scene.pushMatrix();

    
  this.scene.translate( 3.70710678, -1 , 0 ) ;
    this.scene.rotate(Math.PI, 0, 1, 0);
      // this.amarelo.apply();
      this.text1.apply();
      this.parallelogram.display();
    
    this.scene.popMatrix();

    //TRIANGLE
  this.scene.pushMatrix();
  
this.scene.translate( 0.70710678, -1.4 , 0 ) ;
  this.scene.rotate(Math.PI -Math.PI/4, 0, 0, 1);

    // this.cdrosa.apply();
    this.text1.apply();
    this.triangle.display();
  
  this.scene.popMatrix();


  //TRIANGLESMALL1
  this.scene.pushMatrix();
 
  
// this.scene.translate(-1.29289322, -0.70710678 , 0) ; 
//   this.scene.rotate(-Math.PI/2 + Math.PI/4, 0, 0, 1);
    this.scene.translate(-0.70710678118654752440084436210485,0,0);
    this.scene.rotate(-Math.PI/4,0,0,1);
    this.scene.translate(0,-1,0);
    // this.vermelho.apply();
    this.text1.apply();
    this.trianglesmall.display();

  this.scene.popMatrix();

  //TRIANGLESMALL2
  this.scene.pushMatrix();

  this.scene.translate(-3, 0 , 0  ) ; 
  // this.roxo.apply();
  this.text1.apply();
  this.trianglesmall2.display();
  this.scene.popMatrix();

  //
  this.scene.popMatrix();

	}
import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleSmall2 } from "./MyTriangleSmall2.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleBig2 } from "./MyTriangleBig2.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {

    updateCustomMaterial() {
    this.customMaterial.setAmbient(...this.hexToRgbA(this.customMaterialValues['Ambient']));
    this.customMaterial.setDiffuse(...this.hexToRgbA(this.customMaterialValues['Diffuse']));
    this.customMaterial.setSpecular(...this.hexToRgbA(this.customMaterialValues['Specular']));

    this.customMaterial.setShininess(this.customMaterialValues['Shininess']);

};

	constructor(scene) {
        
		super(scene);
        

        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglesmall2 = new MyTriangleSmall2(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglebig2 = new MyTriangleBig2(this.scene);
		    this.triangle.initBuffers();
        this.parallelogram.initBuffers() ;
        this.trianglesmall.initBuffers();
        this.trianglesmall2.initBuffers() ;
        this.trianglebig.initBuffers() ;
        this.trianglebig2.initBuffers() ;

      //roxo
      this.roxo = new CGFappearance(this.scene);
      this.roxo.setAmbient(194/255, 3/255, 252/255, 1.0); 
      this.roxo.setDiffuse(194/255, 3/255, 252/255, 1.0);
      this.roxo.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.roxo.setShininess(10.0);
      //azul 45, 173, 247
      this.azul = new CGFappearance(this.scene);
      this.azul.setAmbient(45/255, 173/255, 247/255, 1.0);
      this.azul.setDiffuse(45/255, 173/255, 247/255, 1.0);
      this.azul.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.azul.setShininess(10.0);
      // vermelho: 255, 33,37
      this.vermelho = new CGFappearance(this.scene);
      this.vermelho.setAmbient(255/255, 33/255, 37/255, 1.0);
      this.vermelho.setDiffuse(255/255, 33/255, 37/255, 1.0);
      this.vermelho.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.vermelho.setShininess(10.0);
    // verde: 33, 255, 25
      this.verde = new CGFappearance(this.scene);
      this.verde.setAmbient(33/255, 255/255, 25/255, 1.0);
      this.verde.setDiffuse(33/255, 255/255, 25/255, 1.0);
      this.verde.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.verde.setShininess(10.0);
    // cor de rosa: 252, 3, 227
      this.cdrosa = new CGFappearance(this.scene);
      this.cdrosa.setAmbient(255/255, 123/255, 178/255, 1.0);
      this.cdrosa.setDiffuse(255/255, 123/255, 178/255, 1.0);
      this.cdrosa.setSpecular(0.8, 0.8, 0.8, 1.0);
      this.cdrosa.setShininess(10.0);  
    // amarelo: 255, 255, 0
    this.amarelo = new CGFappearance(this.scene);
    this.amarelo.setAmbient(240/255, 230/255, 140/255, 1.0);
    this.amarelo.setDiffuse(240/255, 230/255, 140/255, 1.0);
    this.amarelo.setSpecular(0.8, 0.8, 0.8, 1.0);
    this.amarelo.setShininess(10.0); 
    // laranja: 255, 157, 0
    this.laranja = new CGFappearance(this.scene);
    this.laranja.setAmbient(255/255, 157/255, 0/255, 1.0);
    this.laranja.setDiffuse(255/255, 157/255, 0/255, 1.0);
    this.laranja.setSpecular(0.8, 0.8, 0.8, 1.0);
    this.laranja.setShininess(10.0); 

    //Texture
    this.text1 = new CGFappearance(this.scene);
    this.text1.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.text1.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.text1.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.text1.setShininess(10.0);
    this.text1.loadTexture('images/tangram.png');
    // this.text1.setTextureWrap('REPEAT', 'REPEAT');

	}




    enableNormalViz(){
      this.diamond.enableNormalViz();
      this.triangle.enableNormalViz();
      this.parallelogram.enableNormalViz();
      this.trianglesmall.enableNormalViz();
      this.trianglesmall2.enableNormalViz();
      this.trianglebig.enableNormalViz();
      this.trianglebig2.enableNormalViz();
    }

    disableNormalViz(){
      this.diamond.disableNormalViz();
      this.triangle.disableNormalViz();
      this.parallelogram.disableNormalViz();
      this.trianglesmall.disableNormalViz();
      this.trianglesmall2.disableNormalViz();
      this.trianglebig.disableNormalViz();
      this.trianglebig2.disableNormalViz();
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
    
    

    //CENA GERAL
    
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/6, 0, 0, 1);
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
    
    
    // if(this.scene.selectedMaterial == 3)
    // this.scene.customMaterial.apply(); // Definir verde ou material custom
    // else
    // this.verde.apply();
    this.text1.apply();
    
    
    
    this.diamond.display();
    this.scene.popMatrix();
  //TRIANGLEBIG
    // this.azul.apply();
    this.text1.apply();
    this.trianglebig.display();
  
// ---- END Primitive drawing section

  //TRIANGLEBIG2
  this.scene.pushMatrix();
   
    
   this.scene.translate(2, 2 , 0) ;
    
    this.scene.rotate(Math.PI, 0, 0, 1);
      // this.laranja.apply();
      this.text1.apply();
      this.trianglebig2.display();
    
    this.scene.popMatrix();

    //PARALELOGRAM
    this.scene.pushMatrix();

    
  this.scene.translate( 3.70710678, -1 , 0 ) ;
    this.scene.rotate(Math.PI, 0, 1, 0);
      // this.amarelo.apply();
      this.text1.apply();
      this.parallelogram.display();
    
    this.scene.popMatrix();

    //TRIANGLE
  this.scene.pushMatrix();
  
this.scene.translate( 0.70710678, -1.4 , 0 ) ;
  this.scene.rotate(Math.PI -Math.PI/4, 0, 0, 1);

    // this.cdrosa.apply();
    this.text1.apply();
    this.triangle.display();
  
  this.scene.popMatrix();


  //TRIANGLESMALL1
  this.scene.pushMatrix();
 
  
// this.scene.translate(-1.29289322, -0.70710678 , 0) ; 
//   this.scene.rotate(-Math.PI/2 + Math.PI/4, 0, 0, 1);
    this.scene.translate(-0.70710678118654752440084436210485,0,0);
    this.scene.rotate(-Math.PI/4,0,0,1);
    this.scene.translate(0,-1,0);
    // this.vermelho.apply();
    this.text1.apply();
    this.trianglesmall.display();

  this.scene.popMatrix();

  //TRIANGLESMALL2
  this.scene.pushMatrix();

  this.scene.translate(-3, 0 , 0  ) ; 
  // this.roxo.apply();
  this.text1.apply();
  this.trianglesmall2.display();
  this.scene.popMatrix();

  //
  this.scene.popMatrix();

	}
}