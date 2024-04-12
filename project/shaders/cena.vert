#ifdef GL_ES
precision highp float;
#endif


attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;


varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
varying vec4 cor;

void main() {


    vTextureCoord = aTextureCoord;
    
    

    vec4 map = texture2D(uSampler2, aTextureCoord);
    
    vec4 map2 = texture2D(uSampler, aTextureCoord);
    cor = map;

    float offset5 = map.r * 3.5;
    
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + vec3(0, 0, offset5), 1.0);




    
    

	

}

