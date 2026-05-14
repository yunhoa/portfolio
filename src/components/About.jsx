import Reveal from './Reveal.jsx';

const aboutItems = [
  {
    title: '회사 프로젝트',
    body: 'Safety Watch 프로젝트에서 도메인 문서 전처리, 임베딩, PGVector 저장, FastAPI 검색 API, Ollama/LangChain 연동 흐름을 구성했습니다.',
  },
  {
    title: '개인 프로젝트',
    body: '반복 확인 업무를 줄이기 위해 Slack Bot을 만들고, 백엔드 서비스 운영 흐름을 이해하기 위해 Proxmox와 pfSense 홈랩을 구성했습니다.',
  },
  {
    title: '개발 관점',
    body: '화면만 분리해서 보지 않고 데이터가 어디서 오고, 어떻게 가공되고, 사용자가 어떤 흐름으로 쓰는지까지 같이 확인합니다.',
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">화면, API, 데이터 흐름을 같이 다룹니다</h2>
        <p className="section-description">
          회사 프로젝트에서는 3D 화면, 백엔드 API, RAG 검색 구조를 다뤘고, 개인 프로젝트로는 Slack 업무
          자동화 봇과 홈서버를 구성했습니다. 기능을 만드는 데서 끝내지 않고 실제 사용 흐름과 운영
          환경까지 확인하려고 합니다.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {aboutItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 90}>
            <article className="panel h-full p-5 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default About;
