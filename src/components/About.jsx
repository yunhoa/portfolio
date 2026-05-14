function About() {
  return (
    <section id="about" className="section-shell">
      <p className="section-eyebrow">About</p>
      <h2 className="section-title">화면, API, 데이터를 같이 보려고 합니다</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: '3D Web',
            body: 'Three.js 기반 화면과 제조·안전 도메인 화면을 작업했습니다. 사용자가 데이터를 어떻게 보는지가 중요하다고 생각합니다.',
          },
          {
            title: 'Backend & Data',
            body: 'Spring Boot, FastAPI, PostgreSQL, PGVector를 사용해 API와 검색 구조를 만들어봤습니다. 데이터를 바로 쓰기 어려울 때 전처리와 변환 작업도 직접 했습니다.',
          },
          {
            title: 'Automation & Infra',
            body: 'Slack 봇으로 반복 확인 업무를 줄여봤고, Proxmox와 pfSense로 홈서버 네트워크를 구성해보며 운영 환경도 경험했습니다.',
          },
        ].map((item) => (
          <article key={item.title} className="panel p-5 transition hover:border-cyan-300/30">
            <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
      <p className="section-description">
        아직 모든 분야를 깊게 안다고 말할 수는 없지만, 프로젝트를 만들 때 화면과 API, 데이터 흐름을
        따로 보지 않으려고 합니다.
      </p>
    </section>
  );
}

export default About;
