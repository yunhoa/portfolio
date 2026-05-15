import Reveal from './Reveal.jsx';

const aboutItems = [
  {
    title: '검색 API와 RAG',
    body: 'Safety Watch에서 도메인 문서 전처리, 청킹, 임베딩, PGVector 저장, FastAPI 검색 API, Ollama/LangChain 연동 흐름을 구성했습니다.',
  },
  {
    title: '공간 데이터와 Computer Vision',
    body: '좌석배치도 PoC에서는 PDF와 이미지를 입력으로 받아 YOLO 탐지, OpenCV 후처리, Polygon/POI 생성, JSON 구조화를 연결했습니다.',
  },
  {
    title: '운영과 자동화',
    body: '3D 산단 플랫폼 유지보수에서는 관리자 기능, 통계 API 연동, PostgreSQL 데이터 대응을 맡았고, 반복 업무는 Slack Bot으로 줄였습니다.',
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">API, 화면, 데이터, 운영 흐름을 같이 봅니다</h2>
        <p className="section-description">
          저는 백엔드 API를 중심으로 기능이 실제 사용자 화면과 운영 환경에서 동작하기까지의 흐름을
          함께 보는 개발자입니다. 회사 프로젝트에서는 RAG 검색 API, Computer Vision 기반
          좌석배치도 객체화, 3D 디지털 트윈, 모바일 운영 플랫폼, 플랫폼 유지보수를 경험했고,
          개인 프로젝트로는 Slack 자동화 봇과 홈서버를 구성했습니다.
          화면에 보이는 기능뿐 아니라 데이터가 들어오고 가공되고 운영 환경에서 쓰이는 흐름까지
          확인하려고 합니다.
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
