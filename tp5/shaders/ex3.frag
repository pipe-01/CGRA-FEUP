#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);

	vec4 colorSepia = color;
    
	colorSepia.r = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
	colorSepia.g = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
	colorSepia.b = color.r * 0.299 + color.g *0.587 + color.b * 0.114;

    float CL = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
    
    /*if( CL < 0.04045){
        colorSepia.r *= 12.92;
        colorSepia.b *= 12.92;
        colorSepia.g *= 12.92;
        pow(1, 2.0);
        
    }
    else{
        colorSepia.r = ((colorSepia.r + 0.055) / 1.055) ;
        colorSepia.g = ((colorSepia.g + 0.055) / 1.055) ;
        colorSepia.b = ((colorSepia.b + 0.055) / 1.055) ;

    }*/
	gl_FragColor = colorSepia;
}