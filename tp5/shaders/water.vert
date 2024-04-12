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

void main() {
	

	//vec3 offset = vec3(1.0,1.0,1.0);
	//offset*= aVertexNormal*texture2D(uSampler2, aTextureCoord).b*0.1 * timeFactor* 0.01;
	
	vec4 map = texture2D(uSampler2, aTextureCoord + vec2(timeFactor*0.01, timeFactor*0.01));

	offset5 = map.b/19.0;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.xy, aVertexPosition.z + offset5 , 1.0);
												// aVertexPosition.z +offset Z + Timefac
	vTextureCoord = aTextureCoord ;
}

