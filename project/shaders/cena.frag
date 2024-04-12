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
    
    vec4 map2 = texture2D(uSampler2, vTextureCoord);


        color.r*= map2.r * 1.7;
        color.g*= map2.r *  1.7;
        color.b*= map2.r * 1.7;
        gl_FragColor = color;
    
}