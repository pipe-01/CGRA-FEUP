import {CGFobject} from '../lib/CGF.js';

export class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks, height, minS = 0, maxS = 1, minT = 0, maxT = 1) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;

        this.minS = minS; // ????
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
        this.height = height;


        this.initBuffers();

        // this.text1 = new CGFappearance(this.scene);
        // this.text1.setAmbient(0.1, 0.1, 0.1, 1.0);
        // this.text1.setDiffuse(0.9, 0.9, 0.9, 1.0);
        // this.text1.setSpecular(1.0, 1.0, 1.0, 1.0);
        // this.text1.setShininess(10.0);
        // this.text1.loadTexture('images/earth.jpg');
        // this.text1.setTextureWrap('REPEAT', 'REPEAT');

    }
    initBuffers() {

        this.vertices = [];
        this.normals = [];
		this.indices = [];
		this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var ind = 0;
        var tex = 0;
        var texIncrement = 1/this.slices;

        for(let i = 1; i <= this.slices + 1; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var x_ang=Math.cos(ang);
            var z_ang=Math.sin(ang);

            this.vertices.push(x_ang, -0.5, -z_ang); //Plano XZ, y = 0
            this.vertices.push(x_ang, 0.5, -z_ang); // y = 1

            //Formar os triangulos      
            this.indices.push(2 * i - 1, 2 * i - 2, 2 * i +1);
            this.indices.push(2 * i - 2, 2 * i, 2 * i + 1);

            //Setting text coords
            this.texCoords.push(texIncrement * (i + 1), 1);
            this.texCoords.push(texIncrement * (i + 1), 0);


            this.normals.push(x_ang, 0, -z_ang);
            this.normals.push(x_ang, 0, -z_ang);

            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    /**
    //  * Called when user interacts with GUI to change object's complexity.
    //  * @param {integer} complexity - changes number of slices
    //  */
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


