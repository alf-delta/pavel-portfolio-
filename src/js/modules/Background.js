import * as THREE from 'three';

export class Background {
    constructor() {
        this.canvas = document.querySelector('#webgl');
        if (!this.canvas) return;

        this.init();
    }

    init() {
        try {
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            const renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: false });

            // Handle retina displays
            const dpr = Math.min(window.devicePixelRatio, 2);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(dpr);

            const geometry = new THREE.PlaneGeometry(2, 2);
            const vertexShader = `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`;
            const fragmentShader = `
                uniform float uTime; uniform vec2 uResolution; varying vec2 vUv;
                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){ const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod(i, 289.0);
                    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                    vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g); }
                vec3 palette(float t) {
                    vec3 c1 = vec3(0.05, 0.25, 0.30); vec3 c2 = vec3(0.25, 0.15, 0.35); 
                    return mix(c1, c2, smoothstep(0.0, 1.0, t)); }
                void main() {
                    vec2 st = vUv; st.x *= uResolution.x / uResolution.y;
                    float time = uTime * 0.03; float dir = sin(time * 0.1);
                    float speed = mix(0.1, 0.3, 0.5 + 0.5 * dir);
                    vec2 p = st * 0.9; p.y += time * speed; p.x += sin(time * 0.15) * 0.1;
                    vec2 warp = vec2(snoise(p * 0.6 + time * 0.2), snoise(p * 0.8 - time * 0.2));
                    p += warp * 0.3;
                    float n1 = snoise(p); float n2 = snoise(p * 1.8 + 4.0); float val = n1 * 0.7 + n2 * 0.3;
                    val = clamp(val, 0.0, 1.0); val = smoothstep(0.1, 0.9, val);
                    float tColor = val + sin(time * 0.1) * 0.1; vec3 lava = palette(tColor);
                    float cracks = smoothstep(0.05, 0.5, val); lava *= cracks;
                    vec3 glassTint = vec3(0.01, 0.02, 0.03); float glassAmount = 0.50;
                    float d = length(st - 0.5); float vignette = smoothstep(0.8, 0.3, d);
                    float depthMask = smoothstep(0.0, 0.8, st.y);
                    vec3 color = mix(lava, glassTint, glassAmount);
                    color *= mix(0.7, 1.1, vignette * depthMask);
                    gl_FragColor = vec4(color, 1.0); }
            `;

            const uniforms = { uTime: { value: 0 }, uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } };
            const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const tick = () => {
                uniforms.uTime.value += 0.05;
                renderer.render(scene, camera);
                window.requestAnimationFrame(tick);
            }
            tick();

            window.addEventListener('resize', () => {
                uniforms.uResolution.value.x = window.innerWidth;
                uniforms.uResolution.value.y = window.innerHeight;
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (e) {
            console.warn("WebGL Background Error:", e);
        }
    }
}
