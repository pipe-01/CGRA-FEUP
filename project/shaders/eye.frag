#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float timeFactor;
varying vec4 coords;
varying vec4 normal;


void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);

    gl_FragColor = color; 
    
}