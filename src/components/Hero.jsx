import SceneBackground from './SceneBackground.jsx';

const keywords = [
  'Three.js',
  'WebGL',
  'Digital Twin',
  'Spring Boot',
  'FastAPI',
  'React',
  'LangChain',
  'LangGraph',
  'PostgreSQL',
  'PGVector',
  'Slack Bot',
  'Proxmox',
  'pfSense',
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <SceneBackground />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(2,6,23,0.78),rgba(2,6,23,0.42))]" />
      <div className="section-shell relative pt-14 lg:pt-20">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              3D Web · Backend · RAG · Automation
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              조윤호
            </h1>
            <p className="mt-6 max-w-3xl break-words text-xl leading-8 text-slate-200 sm:text-2xl">
              3D 웹 화면을 만들고, 필요한 백엔드 API와 데이터 처리까지 직접 붙여보는 개발자입니다.
            </p>
            <div className="mt-8 flex min-w-0 flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-sm font-medium text-cyan-50"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-5 shadow-glow backdrop-blur sm:p-6">
            <div className="grid gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-cyan-200">What I Work On</p>
                <p className="mt-2 text-lg font-semibold text-white">3D 화면, 검색 API, 업무 자동화</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  화면에 보이는 부분만 만들기보다, 데이터가 어디서 오고 어떻게 가공되는지도 같이
                  확인하면서 작업합니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['3D/Web', 'Three.js 화면 작업'],
                  ['Backend', 'API와 데이터 연결'],
                  ['AI/RAG', '문서 검색 실험'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm text-slate-400">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
