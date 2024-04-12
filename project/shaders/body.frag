#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float Ratio;
uniform float Rcolor;
uniform float Gcolor;
uniform float Bcolor;
uniform float timeFactor;
varying vec4 coords;
varying vec4 normal;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler2, vTextureCoord);	
	float aux = 1.0 - (Ratio + 0.5);

	if (coords.z > aux){
		gl_FragColor = vec4(Rcolor, Gcolor, Bcolor, 1.0);
    }
	else{
	gl_FragColor = color;
	}
    


    /*gl_FragColor = texture2D(uSampler, vTextureCoord);*/
}