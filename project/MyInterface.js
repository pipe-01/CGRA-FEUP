import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');



        //CHeckboxes
        this.gui.add(this.scene, 'pyramidDisplay').name('Pyramid');
        this.gui.add(this.scene, 'cubeDisplay').name('Cube');
        this.gui.add(this.scene, 'cylinderDisplay').name('Cylinder');
        this.gui.add(this.scene, 'sphereDisplay').name('Sphere');
        this.gui.add(this.scene, 'fishDisplay').name('Fish');
        this.gui.add(this.scene, 'cenaCubeBool').name('Chao & topo');
        this.gui.add(this.scene, 'cenaCubeSurr').name('Area envolvente');
        this.gui.add(this.scene, 'rockDisplay').name('Rock');
        this.gui.add(this.scene, 'algaeDisplay').name('Algae');
        this.gui.add(this.scene, 'animFishDisplay').name('Animated Fish');


        this.gui.add(this.scene, 'scaleFactor', 0.5, 3.0).name('Scale');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3.0).name('Speed');

        //new
        this.gui.add(this.scene, 'selectedTexture', this.scene.textureList).name('Cube Texture');

        this.initKeys();


        return true;  
        
    }

    initKeys() {
        // create reference from the scene to the GUI

        this.scene.gui=this;

           

    // disable the processKeyboard function

    this.processKeyboard=function(){};

        

    // create a named array to store which keys are being pressed

    this.activeKeys={};

    }


    processKeyDown(event) {

        // called when a key is pressed down

        // mark it as active in the array

        this.activeKeys[event.code]=true;

    };


    processKeyUp(event) {

        // called when a key is released, mark it as inactive in the array

        this.activeKeys[event.code]=false;

    };


    isKeyPressed(keyCode) {

    if( this.activeKeys[keyCode] === true &&

            (keyCode == "keyL" || keyCode == "keyP")) {

            this.activeKeys[keyCode] = false;

            return true;

    }  

    return this.activeKeys[keyCode] || false;

    }
}
        
    