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
    vec2 offCoord;
    vec4 map = texture2D(uSampler, vTextureCoord + vec2(timeFactor*0.01 * 0.25, timeFactor*0.01 * 0.25));



//Math.random() * (230.0 - 3.0) + 3.0)/255.0, 252.0/255.0, (Math.random() * (160 - 3) + 3)/255, 1
    color.r = (timeFactor * 0.001 * (230.0 - 3.0) + 3.0)/255.0;
    color.g = 252.0/255.0;
    color.b = (timeFactor * 0.001 * (160.0 - 3.0) + 3.0)/255.0;

    gl_FragColor =  color;        //texture2D(uSampler, vTextureCoord);
}