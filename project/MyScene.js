import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture, CGFshader } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";
import { MyMovingObject } from "./MyMovingObject.js";
import {MyMovingFish} from "./MyMovingFish.js";
import {MyCubeMap } from "./MyCubeMap.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyFish } from "./MyFish.js";
import {MyPyramid} from './MyPyramid.js';
import {MyPlane} from './MyPlane.js';
import { MyPillar } from "./MyPillar.js";
import { MyRockSet } from "./MyRockSet.js";
import { MyPyramidSet } from "./MyPyramidSet.js";
import { CGFcamera2 } from "./CGFcamera2.js";
import { MyAnimatedFish } from "./MyAnimatedFish.js";

// function getStringFromUrl(url) {
// 	var xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.open("GET", url, false);
//     xmlHttpReq.send();
//     return xmlHttpReq.responseText;
// }

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        this.initMaterials();
        
        // this.initShaders();

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);

        this.pyramid = new MyMovingObject(this, new MyPyramid(this, 3, 1) ,0, 0, 0, 0, 0);


        this.cubeTest = new MyCubeMap(this, 'images/test_cubemap/py.png', 'images/test_cubemap/pz.png', 'images/test_cubemap/px.png', 'images/test_cubemap/ny.png', 'images/test_cubemap/nz.png', 'images/test_cubemap/nx.png');
        //Como as faces estão invertidas, front e back inverte-se
        this.cubeMap = new MyCubeMap(this, 'images/demo_cubemap/top.png', 'images/demo_cubemap/back.png', 'images/demo_cubemap/right.png', 'images/demo_cubemap/bottom.png', 'images/demo_cubemap/front.png', 'images/demo_cubemap/left.png');
        
        this.cenaCube = new MyCubeMap(this, 'images/underwater_cubemap/top.jpg', 'images/underwater_cubemap/back.jpg', 'images/underwater_cubemap/right.jpg', 'images/underwater_cubemap/bottom.jpg', 'images/underwater_cubemap/front.jpg', 'images/underwater_cubemap/left.jpg');

        this.cylinder = new MyCylinder (this, 16, 1, 1);
        
        this.sphere = new MySphere(this, 16, 8);

        this.fish = new MyFish(this, 1, 0, 0, 0.4, 'images/scales.png');
        this.movFish = new MyMovingFish(this, 0, 0, 0, 3, 0);

        this.waterFloor = new MyPlane(this, 50);

        this.waterTop = new MyPlane(this, 50);

        this.rock = new MyRockSet(this, 15);  

        this.algae = [];
    
        for(let aux = 0; aux < 15; aux++){
            let algae_aux =  new MyPyramidSet(this, Math.random() * (8 - 3) + 3);
            this.algae.push(algae_aux);
        }

        this.animatedFish = [];
        
        for(let aux = 0; aux < 2; aux++){
            let animFish = new MyAnimatedFish(this, 0, Math.random() * (15 + 15) - 15, Math.random() * (5 - 1) + 1, Math.random() * (15 + 15) - 15,
             Math.random() * (10 - 2) + 2);
            this.animatedFish.push(animFish);
        }


        

        
        this.pilar1 = new MyPillar(this, 2.5, 0);
        this.pilar2 = new MyPillar(this, 2.5, -4);
        this.pilar3 = new MyPillar(this, 10, -4);
        this.pilar4 = new MyPillar(this, 10, 0);
        this.pilar5 = new MyPillar(this, 20, 0);
        this.pilar6 = new MyPillar(this, 20, -4);

        
        //  
        this.defaultAppearance = new CGFappearance(this);
		this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0,0,0,1);
		this.defaultAppearance.setShininess(120);

		this.sphereAppearance = new CGFappearance(this);
		this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.sphereAppearance.setShininess(120);

        //Textures
        this.bodyText = new CGFtexture(this, "images/scales.png");
        this.sandBot = new CGFtexture(this, "images/sand.png");

        this.sandAlt = new CGFtexture(this, "images/sandMap.png");

        this.topDist = new CGFtexture(this, "images/distortionmap.png");

        //For Rock Placement
        this.posx = 16.2;
        this.posy = -0.1;
        this.posz = -16.7;
        this.inAir = false;
        this.picked = false;
        this.rockPicked = -1;
        this.pickedrock = -1;
        this.airborne = false;
        this.distY = 100;

        

        

        //Shader's Init
        this.mapShader = new CGFshader(this.gl, "shaders/cena.vert", "shaders/cena.frag");
        this.topShader = new CGFshader(this.gl, "shaders/ceiling.vert", "shaders/ceiling.frag");
        this.surrShader = new CGFshader(this.gl, "shaders/cube.vert", "shaders/cube.frag");

        this.mapShader.setUniformsValues({uSampler2: 1});

        this.shadersDiv = document.getElementById("shaders");
		this.vShaderDiv = document.getElementById("vshader");
		this.fShaderDiv = document.getElementById("fshader");

        //Interface
        this.selectedTexture = 0;
        this.textureList = {
            'Test imag' : 0,
            'View 1': 1
        };

        //For interface checkboxes
        this.pyramidDisplay = false;
        this.cubeDisplay = false;
        this.cylinderDisplay = false;
        this.sphereDisplay = false;
        this.fishDisplay = true;
        this.cenaCubeBool = true;
        this.cenaCubeSurr = true;
        this.rockDisplay = true;
        this.algaeDisplay = true;
        this.animFishDisplay = true;
        

        
        

        this.scaleFactor = 1;
        this.speedFactor = 1;
        
        //Objects connected to MyInterface
        this.displayAxis = false;

        // shader code panels references
		this.shadersDiv = document.getElementById("shaders");
		this.vShaderDiv = document.getElementById("vshader");
		this.fShaderDiv = document.getElementById("fshader");

		
    }

    initMaterials(){
        //Cylinder Texture Material
        this.testMaterial = new CGFappearance(this); 
        this.testMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.testMaterial.setShininess(10.0);
        this.testMaterial.loadTexture("images/sand.png");

        //Earth Texture Material
        this.earth = new CGFappearance(this);
        this.earth.setAmbient(0.1, 0.1, 0.1, 1);
        this.earth.setDiffuse(0.9, 0.9, 0.9, 1);
        this.earth.setSpecular(0.1, 0.1, 0.1, 1);
        this.earth.setShininess(10.0);
        this.earth.loadTexture("images/earth.jpg");
        this.earth.setTextureWrap('REPEAT', 'REPEAT');

        //Underwater ground material
        this.wFloor = new CGFappearance(this);
        this.wFloor.setAmbient(0.8, 0.8, 0.8, 1);
        this.wFloor.loadTexture("images/sand.png");
        this.wFloor.setTextureWrap('REPEAT', 'REPEAT');

        //Underwater ceiling material
        this.wTop = new CGFappearance(this);
        this.wTop.setAmbient(0.8, 0.8, 0.8, 1);
        this.wTop.loadTexture("images/pier.jpg");
        this.wTop.setTextureWrap('REPEAT', 'REPEAT');


    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0); 
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera2(0.4, 0.1, 500, vec3.fromValues(2, 2, 2), vec3.fromValues(0, 2, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
        this.checkKeys();
        this.pyramid.update();
        this.fish.update();
        this.movFish.update(t);

        if(this.cenaCubeBool){
            this.topShader.setUniformsValues({ timeFactor: t / 600 % 100 });
            
        }

        

        if(this.animFishDisplay){
            for(let aux = 0; aux < this.animatedFish.length; aux++){
                this.animatedFish[aux].update(t);
            }
        }

        if(this.picked && this.pickedrock != -1){    
            this.rockFishMov();
        
        }

        if(this.inAir){
            if(!this.airborne){

                this.distX = this.posx - this.rock.arrayRock[this.rockPicked].centerX;
                this.distZ = this.posz - this.rock.arrayRock[this.rockPicked].centerZ;
                this.distY = this.posy - this.rock.arrayRock[this.rockPicked].centerY;

                this.velX = this.distX / 50;
                this.velZ = this.distZ / 50;
                this.velY = 0.005;
                this.airborne = true;
                

            }
            else if (this.airborne){

                if(Math.abs(this.distX) > 0)
                this.distX -= this.velX; 
                if(Math.abs(this.distZ) > 0)
                this.distZ -= this.velZ; 
                if(Math.abs(this.distY) > 0)
                this.distY -= this.velY; 

                //vel med Y = velX, (a + 0.05) * 50 = velX
                
                this.Yacc = Math.abs(this.distY / 50) /50 * 4;
                

                this.velY += this.Yacc  * this.distY/Math.abs(this.distY);

                this.rock.arrayRock[this.rockPicked].centerX += this.velX ;
                this.rock.arrayRock[this.rockPicked].centerY += this.velY;
                this.rock.arrayRock[this.rockPicked].centerZ += this.velZ;
                
                if(this.rock.arrayRock[this.rockPicked].centerY < -0.1  ){
                    this.velY = 0;
                    this.airborne = false;
                    this.inAir = false;
                    this.rockPicked = -1;
                    this.picked = false;
                    
                }
                
                
            }

        }


    }

    rockFishMov(){
            if(this.pickedrock != -1 ){
            this.rock.arrayRock[this.pickedrock].centerX = this.movFish.centerX + 0.4 *  Math.sin(this.movFish.angle);
            this.rock.arrayRock[this.pickedrock].centerY = this.movFish.centerY;
            this.rock.arrayRock[this.pickedrock].centerZ = this.movFish.centerZ + 0.4 *  Math.cos(this.movFish.angle);
            
            }
    }

    
    pickRock(){
        
        if(this.picked && !this.inAir){
            
            
            // if(!this.inAir){
                this.throwDist = 0;
                this.throwDist = Math.sqrt( Math.pow( this.posx - this.rock.arrayRock[this.pickedrock].centerX, 2) + Math.pow( /*this.posy - this.rock.arrayRock[this.pickedrock].centerY*/ 0, 2)
                                    + Math.pow(this.posz - this.rock.arrayRock[this.pickedrock].centerZ, 2));
            // }
            
            if(this.throwDist < 5 && this.movFish.centerY >= 4.8){
               

                    this.posx += 0.005;     //16.2;
                    // this.posy += 0.25; //0
                    this.posz +=0.005;     //-16.7;
                    this.rockPicked = this.pickedrock;
                    this.pickedrock = -1; 
                    this.inAir = true;
                    
                 
            }

        }
        else if(!this.picked){
            
            this.dist = 0;
            this.pickedrock = -1;
            
               
                for(let aux = 0; aux < this.rock.numberRock; aux++){
                    this.dist = Math.sqrt( Math.pow(this.movFish.centerX - this.rock.arrayRock[aux].centerX, 2) + Math.pow(this.movFish.centerY - this.rock.arrayRock[aux].centerY, 2)
                                + Math.pow(this.movFish.centerZ - this.rock.arrayRock[aux].centerZ, 2)); 
        
                    if(this.dist < 2 ){
                        this.pickedrock = aux;
                        this.rock.arrayRock[aux].centerX = this.movFish.centerX + 0.4 *  Math.sin(this.movFish.angle);
                        this.rock.arrayRock[aux].centerY = this.movFish.centerY;
                        this.rock.arrayRock[aux].centerZ = this.movFish.centerZ + 0.4 *  Math.cos(this.movFish.angle);
                        this.picked = true;
                        this.distNest = Math.sqrt( Math.pow( 16.2 - this.rock.arrayRock[this.pickedrock].centerX, 2) + Math.pow( /*this.fish.centerY  - this.rock.arrayRock[this.pickedrock].centerY*/ 0, 2)
                                    + Math.pow(-16.7 - this.rock.arrayRock[this.pickedrock].centerZ, 2)); 
                        if(this.distNest < 2.4) {
                            this.posy -= 0.25;
                        }
                        break;
                    }
                    
                }
                 
        }
                             //coords centro ninho 16.5, -16.5
        
    }

    checkKeys()  {

        var text="Keys pressed: ";

        var keysPressed=false;


        if(this.gui.isKeyPressed("KeyW")){
            this.pyramid.accelarate(0.01 * this.speedFactor);
            this.movFish.accelarate(0.01 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyS")){
            this.pyramid.accelarate(-0.01 * this.speedFactor);
            this.movFish.accelarate(-0.01 * this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyA")){
            this.pyramid.turn(-Math.PI / 12 * this.speedFactor);
            this.movFish.turn(Math.PI / 12 * this.speedFactor);
            this.movFish.fish.turn(Math.PI / 12 * this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyD")){
            this.pyramid.turn(Math.PI / 12 * this.speedFactor);
            this.movFish.turn(-Math.PI / 12 * this.speedFactor);
            this.movFish.fish.turn(Math.PI / 12 * this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyR")){
            this.pyramid.reset();
            this.movFish.reset();
            this.rock.reset();
            this.pickedrock = -1;
            this.picked = false;
        }

        if(this.gui.isKeyPressed("KeyP")){
            this.movFish.up();
        }

        if(this.gui.isKeyPressed("KeyL")){
            this.movFish.down();
        }

        if(this.gui.isKeyPressed("KeyC")){
            
            this.pickRock();
            
        }



        

    }

    


    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
          
        this.defaultAppearance.apply();

        this.camera.fov = 0.4;

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        if(this.fishDisplay){
            this.bodyText.bind(1);
        }
        
        
        if(this.pyramidDisplay){
            this.pyramid.display();
        }

        if(this.cubeDisplay){
            this.pushMatrix();
            this.translate(this.camera.position[0], this.camera.position[1], this.camera.position[2]);
            this.scale(50,50,50);
            if(this.selectedTexture == 0){
                
                this.cubeTest.display();
            }

            if(this.selectedTexture == 1){
                this.cubeMap.display();;
            }
            this.popMatrix();
        }

        

        //Cylinder
        if(this.cylinderDisplay){
            this.testMaterial.apply();
            this.cylinder.display();
        }

        //Sphere
        if(this.sphereDisplay){
            this.earth.apply();
            this.sphere.display();
        }

        if(this.fishDisplay){
            this.movFish.display();
        }

        //Mapa da cena underwater
        if(this.cenaCubeBool){
            this.pilar1.display();
            this.pilar2.display();
            this.pilar3.display();
            this.pilar4.display();
            this.pilar5.display();
            this.pilar6.display();

            this.pushMatrix();
            this.pushMatrix();
            this.camera.fov = 1.5;
            
            this.scale(50, 1, 50);
            this.translate(0, -2, 0);
            this.rotate(-Math.PI/2, 1, 0, 0);
            this.sandAlt.bind(1);
            this.wFloor.apply();
            this.setActiveShaderSimple(this.mapShader);
            this.waterFloor.display();

            this.popMatrix();

            //ceiling
            this.pushMatrix();
            this.scale(50, 1, 50);
            this.translate(0, 10, 0);
            this.rotate(Math.PI/2, 1, 0, 0);
            this.topDist.bind(1);
            this.wTop.apply();
            this.setActiveShader(this.topShader);
            this.waterFloor.display();
            this.popMatrix();            
            

            this.popMatrix();
        }

         
        if(this.rockDisplay){
            this.pushMatrix();
            this.setActiveShaderSimple(this.defaultShader);
            this.rock.display();
            this.popMatrix();
        }



        if(this.cenaCubeSurr){
            this.pushMatrix();
            this.setActiveShaderSimple(this.surrShader);
            this.scale(70, 70, 70);
            
            this.cenaCube.display();
            this.popMatrix();
        }

        if(this.algaeDisplay){
            this.setActiveShaderSimple(this.defaultShader);
            for(let aux = 0; aux < this.algae.length; aux++){
                this.algae[aux].display();
            }
        }

        if(this.animFishDisplay){
            for(let aux = 0; aux < this.animatedFish.length; aux++){
                this.animatedFish[aux].display();
            }
        }

        //catch rocks



        this.setActiveShader(this.defaultShader); 
        // ---- END Primitive drawing section
    }
}