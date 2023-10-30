float wave(float k){
    return(tan(iTime*k)+1.)/2.;
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    
    vec3 rgbWaves=vec3(.5,.6,.7) / 10.;
    float rgbShift=0.1;
    
    // Fitting the UV
    vec2 uv=fragCoord/iResolution.xy*2.-1.;
    uv*=iResolution.xy/vec2(min(iResolution.x,iResolution.y));
    
    // Interference of waves
    vec3 intf=(vec3(
        wave(rgbWaves.x),
        wave(rgbWaves.y),
        wave(rgbWaves.z)
    ) - wave(rgbShift)) / sqrt(length(uv));
    
    fragColor=vec4(fract(intf * 10.),1.);
}