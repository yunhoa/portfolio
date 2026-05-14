const profileItems = [
  { label: '이름', value: '조윤호' },
  { label: '생년월일', value: '2000.04.27' },
  { label: '전화', value: '010-7535-6501' },
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
    meta: '개발 업무',
  },
  {
    period: '2020.08 - 2023.04',
    title: '㈜ATC',
    meta: '사원 · 생산직 2교대',
  },
];

function Profile() {
  return (
    <section id="profile" className="section-shell">
      <p className="section-eyebrow">Profile</p>
      <h2 className="section-title">기본 정보</h2>
      <p className="section-description">
        포트폴리오에서 바로 확인할 수 있도록 학력과 경력을 간단히 정리했습니다.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel p-5">
          <h3 className="text-lg font-semibold text-slate-950">개인 정보</h3>
          <dl className="mt-5 grid gap-3">
            {profileItems.map((item) => (
              <div key={item.label} className="grid grid-cols-[5rem_1fr] gap-3 text-sm">
                <dt className="font-semibold text-slate-500">{item.label}</dt>
                <dd className="text-slate-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-5">
          <div className="panel p-5">
            <h3 className="text-lg font-semibold text-slate-950">학력</h3>
            <div className="mt-4 space-y-4">
              {education.map((item) => (
                <div key={item.title} className="border-l-2 border-cyan-300 pl-4">
                  <p className="text-sm font-semibold text-cyan-700">{item.period}</p>
                  <p className="mt-1 font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <h3 className="text-lg font-semibold text-slate-950">경력</h3>
            <div className="mt-4 space-y-4">
              {careers.map((item) => (
                <div key={`${item.period}-${item.title}`} className="border-l-2 border-cyan-300 pl-4">
                  <p className="text-sm font-semibold text-cyan-700">{item.period}</p>
                  <p className="mt-1 font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
