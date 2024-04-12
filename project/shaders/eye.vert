#ifdef GL_ES
precision highp float;
#endif



attribute vec2 aTextureCoord;
uniform sampler2D uSampler;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
attribute vec3 aVertexPosition;

varying vec2 vTextureCoord;

void main() {

    vTextureCoord = aTextureCoord;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition , 1.0);
}
