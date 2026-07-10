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
    text: 'FastAPI, Spring Boot 기반 API 개발과 운영 기능 유지보수를 수행했습니다.',
  },
  {
    label: 'Data / Search',
    text: 'PostgreSQL, PGVector를 활용한 검색 데이터 저장과 RAG 검색 API 연동 경험이 있습니다.',
  },
  {
    label: 'Frontend / 3D',
    text: 'React, Three.js 기반 디지털 트윈 화면과 API 데이터 연동 기능을 구현했습니다.',
  },
  {
    label: 'Operations',
    text: '관리자 시스템 유지보수, 외부 API 연동, JMeter 부하테스트, 운영 이슈 대응을 수행했습니다.',
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
              백엔드 API 개발을 중심으로 데이터 검색, 3D 화면 연동, 운영 유지보수를 함께 다뤄온 개발자입니다.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              회사 프로젝트에서 FastAPI, Spring Boot, React, Three.js, PostgreSQL, PGVector, JMeter를 사용해
              기능 구현과 운영 이슈 대응을 수행했습니다.
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
            <h2 className="text-lg font-semibold text-slate-950">경험 요약</h2>
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
