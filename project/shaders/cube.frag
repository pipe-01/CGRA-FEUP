#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;


uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;
varying vec4 coords;
varying vec4 normal;
varying vec4 cor;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler2, vTextureCoord);	
    
    


    gl_FragColor = texture2D(uSampler, vTextureCoord);
}