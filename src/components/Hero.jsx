import SceneBackground from './SceneBackground.jsx';

const keywords = [
  'FastAPI',
  'Spring Boot',
  'PostgreSQL',
  'PGVector',
  'LangChain',
  'LangGraph',
  'Slack Bot',
  'Three.js',
  'Proxmox',
  'pfSense',
];

const strengths = [
  {
    title: 'API 개발',
    body: 'FastAPI / Spring Boot 기반 검색·조회 API 구성',
  },
  {
    title: '검색 구조',
    body: 'RAG, 임베딩, PGVector 기반 의미 검색 연동',
  },
  {
    title: '업무 자동화',
    body: 'Slack Bot으로 회의 알림과 휴가자 조회 자동화',
  },
  {
    title: '3D 화면 연동',
    body: 'Three.js 화면과 도메인 데이터 흐름 연결',
  },
  {
    title: '인프라 흐름',
    body: 'Proxmox / pfSense 홈랩으로 외부 접속 흐름 확인',
  },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <SceneBackground />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.97),rgba(2,6,23,0.82),rgba(2,6,23,0.48))]" />
      <div className="section-shell relative pt-14 lg:pt-20">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Backend API · Data Search · Automation · 3D Web
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              조윤호
            </h1>
            <p className="mt-6 max-w-3xl break-words text-xl leading-8 text-slate-200 sm:text-2xl">
              백엔드 API, 데이터 검색, 업무 자동화, 3D 화면 연동 경험을 쌓아온 개발자입니다.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              회사 프로젝트에서는 RAG 검색 API와 3D 화면 연동을 다뤘고, 개인 프로젝트로는 Slack 자동화
              봇과 홈서버 인프라를 직접 구성했습니다.
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
            <p className="text-sm font-semibold text-cyan-200">Core Strength</p>
            <h2 className="mt-2 text-xl font-semibold text-white">프로젝트에서 직접 다룬 영역</h2>
            <div className="mt-5 grid gap-3">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
