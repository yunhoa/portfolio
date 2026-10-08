import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';

const coreKeywords = ['Java', 'Spring', 'MyBatis', 'SQL', 'REST API', 'Oracle'];

const extendedKeywords = [
  'PostgreSQL',
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
            <p className="section-eyebrow">Server Developer · Java / Spring / Product</p>
            <h1 className="mt-4 text-[2.625rem] font-semibold tracking-normal text-slate-950 sm:text-[3.25rem]">조윤호</h1>
            <p className="mt-5 max-w-2xl text-[1.1875rem] leading-8 text-slate-800">
              요청과 데이터 흐름을 따라 문제를 확인하는 서버 개발자입니다.
            </p>
            <p className="copy mt-4 max-w-2xl">
              여러 SI 프로젝트와 연구 과제에서 Spring Boot, Spring Framework, MyBatis, SQL, REST API 기반
              기능을 개발해왔습니다. 기능이 화면에서 동작하는 것에만 맞추기보다 요청/응답, 서버 로직, DB,
              외부 API, 운영 환경까지 흐름을 나누어 확인하고 실제 사용 조건에서 어떻게 동작하는지 보려고 합니다.
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
                <dd className="min-w-0 leading-6 text-slate-800">
                  경민대학교 컴퓨터소프트웨어
                  <span className="text-slate-500"> · 재학기간 2019.03 – 2025.02 · 학점 3.94 / 4.5</span>
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
