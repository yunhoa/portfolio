import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';

const coreKeywords = ['Java', 'Spring', 'MyBatis', 'SQL', 'REST API'];

const extendedKeywords = [
  'JPA',
  'PostgreSQL',
  'Oracle',
  'JMeter',
  'Apache HTTP Server',
  'Morpheus',
  'FastAPI / RAG',
  'PGVector',
  'React / Three.js',
];

function Hero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="section-shell pt-14 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Server Developer · Java / Spring</p>
            <h1 className="mt-4 text-[2.625rem] font-semibold tracking-normal text-slate-950 sm:text-[3.25rem]">조윤호</h1>
            <p className="mt-5 max-w-2xl text-[1.1875rem] leading-8 text-slate-800">
              Java/Spring 기반 백엔드 기능과 API를 개발해왔습니다.
            </p>
            <p className="copy mt-4 max-w-2xl">
              운영 시스템 유지보수와 신규 기능 개발을 맡아 SQL 데이터 처리, 외부 API 연동, 운영 환경 문제 대응을 경험했습니다.
            </p>
            <div className="mt-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-400">Core</span>
                {coreKeywords.map((keyword) => (
                  <span key={keyword} className="badge border-blue-200 bg-blue-50 text-blue-800">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-400">Extended</span>
                {extendedKeywords.map((keyword) => (
                  <span key={keyword} className="badge">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-950">기본 정보</h2>
            <dl className="mt-4 divide-y divide-slate-100 rounded-md border border-slate-200 text-[0.9375rem]">
              <div className="grid gap-2 px-4 py-3 sm:grid-cols-[5.75rem_1fr] sm:gap-4">
                <dt className="meta-label pt-0.5">Email</dt>
                <dd className="min-w-0">
                  <a href="mailto:govlxnep@gmail.com" className="font-semibold text-blue-800 hover:underline">
                    govlxnep@gmail.com
                  </a>
                </dd>
              </div>
              <div className="grid gap-2 px-4 py-3 sm:grid-cols-[5.75rem_1fr] sm:gap-4">
                <dt className="meta-label pt-0.5">학력</dt>
                <dd className="min-w-0 space-y-1 leading-6 text-slate-800">
                  <p>경민대학교 · 컴퓨터소프트웨어과</p>
                  <p className="text-slate-500">재학기간 2019.03 – 2025.02 · 학점 3.94 / 4.5</p>
                </dd>
              </div>
              <div className="grid gap-2 px-4 py-3 sm:grid-cols-[5.75rem_1fr] sm:gap-4">
                <dt className="meta-label pt-0.5">경력</dt>
                <dd className="min-w-0 space-y-2 leading-6 text-slate-800">
                  <p>
                    올포랜드
                    <span className="text-slate-500"> · 2025.01 – 재직 중 (1년 9개월)</span>
                    <br />
                    <span className="text-slate-600">Java/Spring 기반 서버 기능 개발 및 운영 시스템 유지보수</span>
                  </p>
                  <p>
                    ㈜ATC (방위산업체)
                    <span className="text-slate-500"> · 2020.08 – 2023.04 (2년 9개월)</span>
                    <br />
                    <span className="text-slate-600">생산직 2교대</span>
                  </p>
                </dd>
              </div>
              <div className="grid gap-2 px-4 py-3 sm:grid-cols-[5.75rem_1fr] sm:gap-4">
                <dt className="meta-label pt-0.5">논문 · 1저자</dt>
                <dd className="min-w-0 leading-6 text-slate-800">
                  스마트 플랜트 가상환경 구축을 위한 모바일–서버 연동형 AI 기반 메타정보 자동 생성 프레임워크
                  <a
                    href={paperPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 inline-flex rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-800 transition hover:bg-white"
                  >
                    PDF
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
