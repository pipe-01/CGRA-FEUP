#ifdef GL_ES
precision highp float;
#endif


attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
varying float offset5;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float normScale;
varying vec4 coords;

void main() {
    vec3 offset;
    coords = vec4(aVertexPosition, 1.0);
    if(coords.y > 0.5 && coords.y < 1.2)
    offset=vec3(1.0 * sin(timeFactor * 0.1), -0.2, 1.0 * sin(timeFactor * 0.1));

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);    

	vTextureCoord = aTextureCoord;

}

