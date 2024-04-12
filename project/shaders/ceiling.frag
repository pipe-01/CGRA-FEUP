#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec2 tCoords;



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

    vec4 map = texture2D(uSampler2, vTextureCoord + vec2(timeFactor*0.01, timeFactor*0.01));
    
    if(  vTextureCoord.x  + (map.r - 0.5) < 0.0 || vTextureCoord.x  + (map.r - 0.5) > 1.0  )
    offCoord.x = vTextureCoord.x; 
    else
    offCoord.x = vTextureCoord.x  + (map.r - 0.5);
    if(  vTextureCoord.y  + (map.g - 0.5) < 0.0 || vTextureCoord.y  + (map.g - 0.5) > 1.0  )
    offCoord.y = vTextureCoord.y;
    else
    offCoord.y = vTextureCoord.y  + (map.g - 0.5);


    gl_FragColor = texture2D(uSampler, offCoord);
}