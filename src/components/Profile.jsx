import Reveal from './Reveal.jsx';
import paperPdf from '../assets/paper-smart-plant-ai-metadata.pdf';

const profileItems = [
  { label: '이름', value: '조윤호' },
  { label: '이메일', value: 'govlxnep@naver.com' },
];

const education = [
  {
    period: '2019.03.02 - 2025.02.28',
    title: '경민대학교 컴퓨터소프트웨어',
    meta: '3년제 전문학사 졸업 · 3.94 / 4.5',
  },
];

const careers = [
  {
    period: '2025.01.01 - 재직 중',
    title: '올포랜드',
    meta: '백엔드/API 및 플랫폼 유지보수',
  },
  {
    period: '2020.08 - 2023.04',
    title: '㈜ATC',
    meta: '사원 · 생산직 2교대',
  },
];

const publications = [
  {
    title: '스마트 플랜트 가상환경 구축을 위한 모바일–서버 연동형 AI 기반 메타정보 자동 생성 프레임워크',
    meta: '스마트플랜트 R&D 연계 논문 · 1저자',
    href: paperPdf,
  },
];

function Profile() {
  return (
    <section id="profile" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Profile</p>
        <h2 className="section-title">기본 정보</h2>
        <p className="section-description">
          포트폴리오에서 바로 확인할 수 있도록 이름, 이메일, 학력, 경력, 논문을 간단히 정리했습니다.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={80}>
          <div className="panel h-full p-5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-slate-950">연락처</h3>
            <dl className="mt-5 grid gap-3">
              {profileItems.map((item) => (
                <div key={item.label} className="grid grid-cols-[5rem_1fr] gap-3 text-sm">
                  <dt className="font-semibold text-slate-500">{item.label}</dt>
                  <dd className="text-slate-800">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={140}>
            <div className="panel p-5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-slate-950">학력</h3>
              <div className="mt-4 space-y-4">
                {education.map((item) => (
                  <div key={item.title} className="border-l-2 border-blue-300 pl-4">
                    <p className="text-sm font-semibold text-blue-700">{item.period}</p>
                    <p className="mt-1 font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="panel p-5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-slate-950">경력</h3>
              <div className="mt-4 space-y-4">
                {careers.map((item) => (
                  <div key={`${item.period}-${item.title}`} className="border-l-2 border-blue-300 pl-4">
                    <p className="text-sm font-semibold text-blue-700">{item.period}</p>
                    <p className="mt-1 font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="panel p-5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-slate-950">논문</h3>
              <div className="mt-4 space-y-4">
                {publications.map((item) => (
                  <div key={item.title} className="border-l-2 border-blue-300 pl-4">
                    <p className="text-sm font-semibold text-blue-700">{item.meta}</p>
                    <p className="mt-1 font-semibold leading-6 text-slate-950">{item.title}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-800 transition hover:bg-white"
                    >
                      PDF 보기
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Profile;
