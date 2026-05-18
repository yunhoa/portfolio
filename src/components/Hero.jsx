import SceneBackground from './SceneBackground.jsx';

const keywords = [
  'FastAPI',
  'Spring Boot',
  'PostgreSQL',
  'PGVector',
  'LangChain',
  'LangGraph',
  'Digital Twin',
  'React',
  'Computer Vision',
  'Slack Bot',
  'Proxmox',
];

const strengths = [
  {
    title: 'Backend API',
    body: 'FastAPI와 Spring Boot로 검색, 조회, 관리자 기능 API를 만들고 데이터 흐름을 정리했습니다.',
  },
  {
    title: 'Frontend',
    body: 'React와 JavaScript로 API 응답을 화면에서 확인 가능한 기능으로 연결했습니다.',
  },
  {
    title: 'AI/RAG',
    body: '문서 전처리, 임베딩, PGVector 저장, LangChain 검색 흐름을 API와 연결했습니다.',
  },
  {
    title: 'Spatial Data',
    body: '디지털 트윈과 좌표 정합 작업에서 공간 데이터를 화면에 맞게 변환했습니다.',
  },
  {
    title: 'Computer Vision',
    body: 'YOLO와 OpenCV로 객체 탐지 결과를 Polygon, POI 같은 서비스 데이터로 바꿨습니다.',
  },
  {
    title: 'Operations',
    body: '플랫폼 유지보수, Slack 자동화, Proxmox / pfSense 홈랩으로 운영 흐름을 확인했습니다.',
  },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <SceneBackground />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98),rgba(15,23,42,0.86),rgba(15,23,42,0.56))]" />
      <div className="section-shell relative pt-14 lg:pt-20">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Backend 중심 · Frontend · AI/RAG · Spatial Data · Operations
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              조윤호
            </h1>
            <p className="mt-6 max-w-2xl break-words text-xl leading-8 text-slate-200 sm:text-2xl">
              API를 중심으로 화면, 데이터, 운영 흐름까지
              <span className="block">같이 보는 개발자입니다.</span>
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              FastAPI와 Spring Boot로 API를 만들고, React 화면, RAG 검색, 좌표/공간 데이터,
              업무 자동화까지 실제 프로젝트 안에서 연결해 왔습니다.
              <span className="block">맡은 기능이 화면과 운영 환경에서 제대로 동작하는지 확인하는 쪽에 관심이 많습니다.</span>
            </p>
            <div className="mt-8 flex min-w-0 flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center rounded-full border border-slate-500/40 bg-slate-900/45 px-3 py-1 text-sm font-medium text-slate-100"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-white/10 bg-slate-900/55 p-5 shadow-glow backdrop-blur sm:p-6">
            <p className="text-sm font-semibold text-slate-300">Focus Area</p>
            <h2 className="mt-2 text-xl font-semibold text-white">실제로 연결해 본 개발 영역</h2>
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
