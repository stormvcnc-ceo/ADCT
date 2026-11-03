import React, { useEffect, useRef } from 'react';

export const AdctShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    const gl =
      canvas.getContext('webgl') ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) return;

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
        vec3 g;
        g.x  = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        vec2 mouse = (u_mouse.xy / u_resolution.xy) - 0.5;
        
        float t = u_time * 0.25;
        float dist = length(uv);
        
        float n1 = snoise(uv * 1.8 + vec2(t * 0.4, -t * 0.2));
        float n2 = snoise(uv * 3.5 - vec2(t * 0.3, t * 0.5) + mouse * 0.5);
        
        float ribbon1 = sin(uv.x * 3.0 + uv.y * 2.0 + n1 * 2.5 + t * 0.8);
        float ribbon2 = cos(uv.y * 4.0 - uv.x * 1.5 + n2 * 2.0 - t * 0.6);
        float glow1 = 0.04 / (abs(ribbon1) + 0.05);
        float glow2 = 0.03 / (abs(ribbon2) + 0.06);
        
        vec3 colDeep = vec3(0.015, 0.02, 0.05);
        vec3 colBlue = vec3(0.05, 0.15, 0.45);
        vec3 colCyan = vec3(0.0, 0.75, 0.95);
        vec3 colAmber = vec3(0.98, 0.65, 0.25);
        
        vec3 finalColor = mix(colDeep, colBlue, clamp(uv.y * 0.5 + 0.5, 0.0, 1.0) * 0.4);
        
        finalColor += colCyan * glow1 * 0.7;
        finalColor += colBlue * (glow1 * 0.5 + glow2 * 0.4);
        finalColor += colAmber * glow2 * 0.35;
        
        float vig = smoothstep(1.2, 0.3, dist);
        finalColor *= vig;
        
        float dots = fract(sin(dot(uv.xy + floor(t * 0.1), vec2(12.9898, 78.233))) * 43758.5453);
        if (dots > 0.992) {
          finalColor += vec3(0.8, 0.9, 1.0) * (sin(u_time * 3.0 + dots * 20.0) * 0.5 + 0.5) * 0.6;
        }

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse = { x: nx * canvas.width, y: ny * canvas.height };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (t: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
      {/* 셰이더 위 오버레이 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e131f]/20 via-[#0e131f]/60 to-[#0e131f]" />
    </div>
  );
};

export default AdctShaderBackground;
