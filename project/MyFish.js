import {CGFobject, CGFappearance, CGFtexture, CGFshader} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyTriangle } from "./MyTriangle.js";

export class MyFish extends CGFobject {
    constructor(scene, colorR, colorG, colorB, ratio, texture) {
        super(scene);

        this.centerX = 0;
        this.centerY = 0;
        this.centerZ = 0;
        this.direction = 0;
        this.velocity = 0;
        this.wingAngE = 0;
        this.wingAngD = 0;
        this.wingMovDown = false;
        this.movingInc = 1;
        this.backWingAng = 0;
        this.backWingMovLeft = false;

        // this.direction = 0; //Z axis, turn right or left
        
        // this.pyramid = new MyPyramid(this.scene, 3, 1);
        this.body = new MySphere(this.scene, 16, 8);
        this.wing1 = new MyTriangle(this.scene);
        this.wing2 = new MyTriangle(this.scene);
        this.wing3 = new MyTriangle(this.scene);
        this.wingBack = new MyTriangle(this.scene);
        this.eyeLeft = new MySphere(this.scene, 16, 8);
        this.eyeRight = new MySphere(this.scene, 16, 8);

        this.bodyAppearance = new CGFappearance(this.scene);
		this.bodyAppearance.setAmbient(0.9, 0.9, 0.9, 1);
		this.bodyAppearance.setDiffuse(0, 0, 0, 1);
		this.bodyAppearance.setSpecular(0, 0, 0, 1);
        this.bodyAppearance.loadTexture(texture);
        this.bodyAppearance.setTextureWrap('REPEAT', 'REPEAT');
		this.bodyAppearance.setShininess(100);

        this.bodyColor = new CGFappearance(this.scene);
        this.bodyColor.setAmbient(0, 0, 0, 1);
        this.bodyColor.setDiffuse(0, 0, 0, 1);
        this.bodyColor.setSpecular(0, 0, 0, 1);
        this.bodyColor.setEmission(colorR, colorG, colorB, 1);
        this.bodyColor.setShininess(100);

        //Branco
        this.white = new CGFappearance(this.scene);
        this.white.setAmbient(0/255, 0/255, 0/255, 1.0); 
        this.white.setDiffuse(0/255, 0/255, 0/255, 1.0);
        this.white.setSpecular(0, 0, 0, 1.0);
        this.white.setEmission(1, 1, 1, 1);
        this.white.setShininess(10.0);
        


        // //Earth Texture Material
        this.eye = new CGFappearance(this.scene);
        this.eye.setDiffuse(0, 0, 0, 1);
        this.eye.setSpecular(0, 0, 0, 1);
        this.eye.setAmbient(1, 1, 1, 1);
        this.eye.setShininess(100);
        this.eye.loadTexture('images/eye.png');
        this.eye.setTextureWrap('REPEAT', 'REPEAT');
        
        //Shaders

        //Enabling Textures
        this.bodyTextA = new CGFtexture(this.scene, "images/red.png");
        this.bodyText = new CGFtexture(this.scene, "images/sand.png");
        this.bodyTextSca = new CGFtexture(this.scene, texture);
        

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.1, 0.1, 0.1, 1);
        this.appearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.appearance.setSpecular(0.1, 0.1, 0.1, 1);
        this.appearance.loadTexture(texture);

        if(this.scene.fishDisplay){
            this.appearance.setTexture(this.bodyTextA);
		    this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        }

        this.fishBodyShader = new CGFshader(this.scene.gl, "shaders/body.vert", "shaders/body.frag");
        this.fishBodyShader.setUniformsValues({uSampler2: 1, Ratio: ratio, Rcolor:  colorR, Gcolor: colorG, Bcolor: colorB });

        this.fisheye = new CGFshader(this.scene.gl, "shaders/eye.vert", "shaders/eye.frag");

        this.shadersDiv = document.getElementById("shaders");
		this.vShaderDiv = document.getElementById("vshader");
		this.fShaderDiv = document.getElementById("fshader");

        this.initBuffers();
    }

    display () {

        

        this.scene.pushMatrix();
        this.scene.scale(0.15, 0.15, 0.15); //general scale - size +/- 0.5
        
        this.scene.translate(0 + this.centerX , this.centerY , 0 + this.centerZ  );
        this.scene.rotate( this.direction, 0, 1, 0);

        //Corpo
        this.scene.pushMatrix();
        
        this.scene.scale(0.8, 1.2, 1.5);
        // this.appearance.setTexture(this.bodyTextSca);
        this.bodyAppearance.apply();
        this.scene.setActiveShaderSimple(this.fishBodyShader);
        this.body.display();
        this.scene.popMatrix();


        //Barbatana 1 esq
        this.scene.pushMatrix();
        this.scene.scale(0.7, 0.3, 0.5);
        this.scene.translate(1.13, -0.5, 0); // Primeiro translate
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 1, 0); //ajustar para baixo

        this.scene.rotate(this.wingAngE, 0, 1, 0);
        this.scene.setActiveShaderSimple(this.scene.defaultShader); 
        this.bodyColor.apply();
        this.wing1.display();
        this.scene.popMatrix();


        //Barbatana 2 dir
        this.scene.pushMatrix();
        this.scene.scale(0.7, 0.3, 0.5);
        this.scene.translate(-1.13, -0.5, 0); // Primeiro translate
        this.scene.rotate(Math.PI, 0, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 1, 0); //ajustar para baixo

        this.scene.rotate(this.wingAngD, 0, 1, 0);

        this.wing2.display();
        this.scene.popMatrix();

        //Barbatana 3 (cima)
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 0.8);
        this.scene.translate(0, 1, 0.2); // Primeiro translate
        this.scene.rotate(-Math.PI /2, 0, 1, 0);

        this.wing3.display();
        this.scene.popMatrix();


        //Barbatana 3 (trás)
        this.scene.pushMatrix();
        // this.scene.scale(0.7, 0.3, 0.5);
        this.scene.translate(0, 0, -1.4); // Primeiro translate
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        // this.scene.rotate(Math.PI/2, 1, 0, 0);

        this.scene.rotate(-this.backWingAng , 0, 1, 0);

        // this.scene.rotate(Math.PI/4, 0, 1, 0); //ajustar para baixo
        this.wing2.display();
        this.scene.popMatrix();


        //Olho Esquerdo
        this.scene.pushMatrix();
        this.scene.translate (0.55, 0.4, 0.6);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(0.22, 0.22, 0.22);
        //this.white.apply();
        this.eye.apply();
        this.scene.setActiveShaderSimple(this.fisheye);
        this.eyeLeft.display();
        this.scene.popMatrix();

        //Olho direito
        this.scene.pushMatrix();
        this.scene.translate (-0.55, 0.4, 0.6);
        this.scene.rotate(Math.PI/12, 0, 1, 0);
        this.scene.scale(0.22, 0.22, 0.22);
        //this.white.apply();
        this.eye.apply();
        this.eyeRight.display();
        this.scene.setActiveShaderSimple(this.scene.defaultShader);
        this.scene.popMatrix();  
        this.scene.popMatrix();


        this.scene.setActiveShader(this.scene.defaultShader); 
    }

    update(t){
        
        //Lateral Wings
            //Left
        if(this.wingAngE > Math.PI / 5)
            this.wingMovDown = true;
        if(this.wingAngE < -Math.PI / 8)
            this.wingMovDown = false;
            //RIGHT
        if(this.wingAngD > Math.PI / 5)
            this.wingMovDown = true;
        if(this.wingAngD < -Math.PI / 8)
            this.wingMovDown = false;


        if(this.velocity != 0)
            this.movingInc = Math.abs(this.velocity) * 10  + 1;
        else
            this.movingInc = 1;

            //ESQuerda
        if(this.wingMovDown)
            this.wingAngE -= Math.PI/25 * this.movingInc;
        else
            this.wingAngE += Math.PI/25 * this.movingInc;
            //DIre
        if(this.wingMovDown)
            this.wingAngD -= Math.PI/25 * this.movingInc;
        else
            this.wingAngD += Math.PI/25 * this.movingInc;

        //BackWing
        if(this.backWingAng > Math.PI / 18)
            this.backWingMovLeft = false;
        if(this.backWingAng < -Math.PI / 18)
            this.backWingMovLeft = true;

        // if(this.velocity !=0)
        //     this.movingInc = 1.5;
        // else
        //     this.movingInc = 1;

        if(!this.backWingMovLeft)
            this.backWingAng -= Math.PI/40 * this.movingInc;
        else
            this.backWingAng += Math.PI/40 * this.movingInc;

    }

    
    turn (val) { //Fazer a barbatana do lado oposto ao qual ele vira parar
        
        if(val > 0)
            this.wingAngD = 0;
        if(val < 0)
            this.wingAngE = 0;
    }

    




}


