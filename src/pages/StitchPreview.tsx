import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ==========================================
// 1. WebGL 셰이더 배경 컴포넌트
// ==========================================
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

// ==========================================
// 2. ADCT 메인 랜딩 전체 페이지 컴포넌트
// ==========================================
export default function StitchPreview() {
  return (
    <div className="min-h-screen bg-[#0e131f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* GNB 글로벌 네비게이션 헤더 */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0e131f]/80 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-2xl font-black tracking-wider text-white">ADCT</Link>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium hidden sm:inline-block border-l border-white/20 pl-3">
              Creative Advertising
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {[
              { label: 'Works', to: '/works' },
              { label: 'Capabilities', to: '/capabilities' },
              { label: 'About', to: '/about' },
              { label: 'Process', to: '/process' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              프로젝트 문의하기
            </Link>
            <Link to="/" className="text-xs text-cyan-300 underline underline-offset-4 hover:text-white transition-colors">
              기존 홈으로 가기
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-24 px-6 overflow-hidden">
        {/* WebGL 동적 셰이더 배경 */}
        <AdctShaderBackground />

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
          
          {/* 타이틀 & 슬로건 */}
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-white">
              CREATIVE IDEAS,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                POWERFUL
              </span><br />
              <span className="text-slate-100">IMPACT.</span>
            </h1>
          </div>

        </div>
      </section>

      {/* Core Vision & Visual Engine */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/80">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              ● Creative Focus &amp; Core Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              기술과 감성의 교차점에서<br />
              독창적인 브랜딩을 실현합니다.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              주식회사 애드시티(ADCT)는 전통적인 미디어 매체 기획부터 미래지향적 3D 모션 그래픽, AI 생성 비주얼 및 인터랙티브 웹 솔루션에 이르기까지 브랜드의 모든 고객 접점을 설계합니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] uppercase text-cyan-400 font-bold tracking-wider">Integrated</span>
                <div className="text-base font-bold text-white mt-1">All-in-One</div>
                <div className="text-xs text-slate-400 mt-1">기획부터 제작 집행까지</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] uppercase text-amber-400 font-bold tracking-wider">Speed &amp; Quality</span>
                <div className="text-base font-bold text-white mt-1">Top Tier</div>
                <div className="text-xs text-slate-400 mt-1">검증된 프로덕션 퀄리티</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-tr from-blue-950 via-[#0e131f] to-cyan-950 p-8 flex flex-col justify-end relative shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_70%)]" />
              <div className="relative z-10">
                <div className="text-xs text-cyan-300 font-medium">ADCT Studio Engine</div>
                <div className="text-sm font-semibold text-white">Generative 3D Visualizer &amp; Dynamic Art Direction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities (3열 그리드) */}
      <section id="capabilities" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Our Core Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Our Capabilities</h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              브랜드 캠페인부터 크리에이티브 제작까지, 통합적 접근으로 강력한 임팩트를 만듭니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                no: '01 / Strategy',
                title: 'Campaign Strategy',
                desc: '데이터와 인사이트 기반으로 강력한 브랜드 캠페인 전략을 수립하고, 목표 고객을 관통하는 최적의 미디어 믹스를 설계합니다.',
                badge: '시장 분석 및 타겟 리포트',
              },
              {
                no: '02 / Production',
                title: 'Creative Production',
                desc: '영상, TV 광고, 디지털 모션 그래픽, 3D CGI 등 모든 영역의 오리지널 크리에이티브 콘텐츠를 최고 수준으로 제작합니다.',
                badge: 'CGI • 4K/8K Film Production',
              },
              {
                no: '03 / Advertising',
                title: 'Brand Advertising',
                desc: '브랜드 고유의 철학과 스토리를 심금을 울리는 강력한 내러티브로 풀어내어 소비자에게 대체 불가능한 각인을 남깁니다.',
                badge: 'DOOH • 디지털 브랜드 각인',
              },
            ].map((cap, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6"
              >
                <span className="text-xs font-mono text-cyan-400">{cap.no}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
                <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs">
                  <span className="text-slate-400">{cap.badge}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADCT Integrated Solutions (01~04 워크플로우) */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/60">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Precision Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">ADCT Integrated Solutions</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              각 단계별 크리에이티브 파이프라인은 정교한 분석과 감각적인 아트 디렉션을 결합하여 타겟의 실질적인 행동 변화를 유도합니다.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                step: '01',
                title: '통합 마케팅 캠페인 (IMC & Brand Strategy)',
                desc: '시장 및 경쟁사 데이터 딥다이브, 크리에이티브 콘셉트 개발, 온·오프라인 통합 채널 실행 플랜 수립',
                tag: '전략 수립',
              },
              {
                step: '02',
                title: '필름 & 미디어 프로덕션 (Film, TV CF, 3D Motion)',
                desc: 'TVC, 디지털 바이럴 필름, 옥외 초대형 3D 아나모픽 콘텐츠, 브랜드드 무비 디렉팅 및 포스트 프로덕션',
                tag: '영상 제작',
              },
              {
                step: '03',
                title: '디지털 인터랙티브 웹 & AI 비주얼 엔지니어링',
                desc: 'AI 기반 제너레이티브 비주얼 설계, 하이엔드 인터랙티브 웹사이트 개발, 모바일 몰입형 프로모션 환경 구현',
                tag: '인터랙티브 웹',
              },
              {
                step: '04',
                title: '퍼포먼스 미디어 플래닝 & 그로스 마케팅',
                desc: '실시간 데이터 트래킹 및 머신러닝 최적화 알고리즘 기반 미디어 바잉, ROAS 극대화 애널리틱스',
                tag: '미디어 집행',
              },
            ].map((sol) => (
              <div
                key={sol.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-6"
              >
                <div className="text-xl font-bold font-mono text-cyan-400">{sol.step}</div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">{sol.title}</h4>
                    <span className="text-[11px] text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">{sol.tag}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Next Creative Chapter</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Ready to create together?</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            "20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다."<br />
            <span className="text-amber-400 font-medium">Innovative today, Creative tomorrow.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-200 transition-all">
              프로젝트 문의하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="border-t border-white/[0.08] py-16 px-6 text-xs text-slate-400 bg-[#080e1a]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="text-xl font-black text-white">ADCT</div>
            <p className="leading-relaxed">
              고유한 미학적 비전과 테크놀로지를 결합하여 브랜드의 독창적인 아이덴티티와 고효율 광고 캠페인을 설계하는 하이엔드 크리에이티브 디자인 에이전시입니다.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Capabilities</div>
            <div>브랜드 아이덴티티 및 전략</div>
            <div>디지털 인터랙티브 웹 / 모바일</div>
            <div>3D 모션 &amp; 제너레이티브 비주얼</div>
            <div>퍼포먼스 크리에이티브 광고</div>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Direct Contact</div>
            <div>📞 051-740-5716</div>
            <div>✉️ happinding@empas.com</div>
            <div>📍 부산광역시 해운대구 해운대해변로 203 오션타워 1716호</div>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Headquarters</div>
            <div>부산 본사: (주)애드시티 (ADCT)</div>
            <div>상담 시간: 평일 09:30 - 18:30 (KST)</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-4">
          <div>© 2026 (주)애드시티 (ADCT). All Rights Reserved.</div>
          <div className="flex gap-6">
            <Link to="/terms-of-service" className="hover:text-white">이용약관</Link>
            <Link to="/privacy-policy" className="hover:text-white">개인정보처리방침</Link>
            <Link to="/business-info" className="hover:text-white">사업자정보</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
