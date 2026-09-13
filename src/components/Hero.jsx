import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';

const coreKeywords = ['Java', 'Spring', 'MyBatis', 'SQL', 'REST API', 'JMeter'];

const extendedKeywords = [
  'PostgreSQL',
  'Range / Video API',
  'Apache HTTP Server',
  'Morpheus / MSP',
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
            <p className="section-eyebrow">Backend Developer · API / Operations</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">조윤호</h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-800">
              기능이 동작하는 것에서 끝내지 않고, 왜 그렇게 동작하는지까지 확인하려는 백엔드 개발자입니다.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              SI 프로젝트에서 새로운 시스템을 빠르게 파악하고 기능을 개발해왔습니다. 문제가 생기면 화면,
              요청/응답, 서버 로직, SQL, DB, 외부 API, 네트워크 구간을 나누어 원인을 확인합니다.
              최근에는 Spring Controller 기반 영상 Range 처리와 JMeter 부하테스트를 직접 구성하며,
              실제 사용 흐름에서 서버가 어떻게 동작하는지 확인했습니다.
            </p>
            <div className="mt-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core</span>
                {coreKeywords.map((keyword) => (
                  <span key={keyword} className="badge border-blue-200 bg-blue-50 text-blue-800">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Extended</span>
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
            <dl className="mt-4 grid gap-4 text-sm">
              <div className="border-l-2 border-blue-300 pl-4">
                <dt className="text-xs font-semibold text-slate-500">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:govlxnep@naver.com" className="font-semibold text-blue-800 hover:underline">
                    govlxnep@naver.com
                  </a>
                </dd>
              </div>
              <div className="border-l-2 border-blue-300 pl-4">
                <dt className="text-xs font-semibold text-slate-500">학력</dt>
                <dd className="mt-1 leading-6 text-slate-800">
                  경민대학교 컴퓨터소프트웨어
                  <span className="text-slate-500"> · 2019.03 – 2025.02 · 3.94 / 4.5</span>
                </dd>
              </div>
              <div className="border-l-2 border-blue-300 pl-4">
                <dt className="text-xs font-semibold text-slate-500">경력</dt>
                <dd className="mt-1 leading-6 text-slate-800">
                  올포랜드
                  <span className="text-slate-500"> · 2025.01 – 재직 중 (1년 8개월) · SI 프로젝트 풀스택 개발 및 운영 시스템 유지보수</span>
                </dd>
                <dd className="mt-1 leading-6 text-slate-800">
                  ㈜ATC (방위산업체)
                  <span className="text-slate-500"> · 2020.08 – 2023.04 (2년 9개월) · 생산직 2교대</span>
                </dd>
              </div>
              <div className="border-l-2 border-blue-300 pl-4">
                <dt className="text-xs font-semibold text-slate-500">논문 · 1저자</dt>
                <dd className="mt-1 leading-6 text-slate-800">
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
