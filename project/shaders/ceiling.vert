#ifdef GL_ES
precision highp float;
#endif


attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
varying vec2 tCoords;


varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
varying vec4 cor;

void main() {


    vTextureCoord = aTextureCoord;
    
        
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition , 1.0);

    


    
    

	

}

