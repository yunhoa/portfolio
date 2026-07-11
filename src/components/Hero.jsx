const keywords = [
  'FastAPI',
  'Spring Boot',
  'React',
  'PostgreSQL',
  'PGVector',
  'LangChain',
  'Three.js',
  'Computer Vision',
  'JMeter',
  'Apache Cordova',
];

const summaryItems = [
  {
    label: 'Backend / API',
    text: 'FastAPI와 Spring Boot로 검색, 조회, 관리자 기능 API를 다뤘습니다.',
  },
  {
    label: 'Data / Search',
    text: '문서 임베딩, PGVector 저장, RAG 검색 API까지 이어지는 작업을 맡았습니다.',
  },
  {
    label: 'Frontend / 3D',
    text: 'React, Three.js 화면에서 API 데이터와 3D 위치 표시를 맞췄습니다.',
  },
  {
    label: 'Operations',
    text: '관리자 시스템 유지보수, 외부 API, JMeter 테스트, 운영 이슈를 다뤘습니다.',
  },
];

function Hero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="section-shell pt-14 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Backend / API Developer</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">조윤호</h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-800">
              백엔드 API와 데이터 처리를 중심으로, 3D 화면 연동과 운영 유지보수까지 함께 맡아온 개발자입니다.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              FastAPI와 Spring Boot로 API를 만들고, React와 Three.js 화면에서 데이터가 실제로 보이는 지점까지
              확인했습니다. PostgreSQL, PGVector, JMeter, Cordova 기반 운영 이슈도 다뤘습니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span key={keyword} className="badge">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-950">작업 요약</h2>
            <div className="mt-4 grid gap-3">
              {summaryItems.map((item) => (
                <div key={item.label} className="border-l-2 border-blue-300 pl-4">
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
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
