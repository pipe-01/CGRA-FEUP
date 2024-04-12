#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;



void main() {

    


	if (coords.y > 0.0)
		gl_FragColor =  vec4(0.9, 0.8, 0, 1.0);
	else
	{
		gl_FragColor =  vec4(0, 0, 0.5, 1.0);
		
	}
}