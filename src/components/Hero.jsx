import SceneBackground from './SceneBackground.jsx';

const keywords = [
  'FastAPI',
  'Spring Boot',
  'Platform Maintenance',
  'PostgreSQL',
  'PGVector',
  'LangChain',
  'LangGraph',
  'Digital Twin',
  'React Three Fiber',
  'YOLO',
  'OpenCV',
  'Computer Vision',
  'Slack Bot',
  'Proxmox',
  'pfSense',
  'Three.js',
];

const strengths = [
  {
    title: 'Backend API',
    body: 'FastAPI / Spring Boot로 검색, 조회, 관리자 기능 API 구성',
  },
  {
    title: 'AI/RAG',
    body: '문서 전처리, 임베딩, PGVector, LangChain 기반 검색 흐름 연동',
  },
  {
    title: 'Spatial Data',
    body: '디지털 트윈, 좌표 정합, 공간 객체 데이터를 서비스 구조로 연결',
  },
  {
    title: 'Computer Vision',
    body: 'YOLO / OpenCV로 좌석 탐지, Polygon, POI 생성 흐름 구성',
  },
  {
    title: 'Operations',
    body: '플랫폼 유지보수, Slack 자동화, Proxmox / pfSense 인프라 흐름 확인',
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
              Backend · AI/RAG · Spatial Data · Operations
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              조윤호
            </h1>
            <p className="mt-6 max-w-3xl break-words text-xl leading-8 text-slate-200 sm:text-2xl">
              백엔드 API를 중심으로 검색 구조, 공간 데이터, 운영 자동화까지 다뤄온 개발자입니다.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              회사 프로젝트에서는 RAG 검색 API, 좌석배치도 객체화, 플랫폼 유지보수를 다뤘고 개인
              프로젝트로는 Slack 자동화와 홈서버 인프라를 구성했습니다.
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
            <p className="text-sm font-semibold text-cyan-200">Focus Area</p>
            <h2 className="mt-2 text-xl font-semibold text-white">프로젝트에서 이어진 경험</h2>
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
