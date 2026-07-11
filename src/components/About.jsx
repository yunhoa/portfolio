import Reveal from './Reveal.jsx';

const aboutItems = [
  {
    title: '검색 API와 RAG',
    body: 'Safety Watch에서 문서 전처리, 청킹, 임베딩, PGVector 저장, FastAPI 검색 API 작업을 맡았습니다.',
  },
  {
    title: '공간 데이터와 Computer Vision',
    body: '좌석배치도 PoC에서는 PDF와 이미지에서 좌석을 찾고 Polygon, POI, Pair 관계를 JSON으로 정리했습니다.',
  },
  {
    title: '운영과 자동화',
    body: '플랫폼 유지보수에서는 관리자 기능, 통계 API, PostgreSQL 데이터를 확인했고 반복 확인 업무는 Slack Bot으로 줄였습니다.',
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">API, 데이터, 화면이 맞는지 같이 봅니다</h2>
        <p className="section-description">
          백엔드 API를 중심으로 작업하지만, API 응답이 화면에서 어떻게 보이고 운영 중 어떤 데이터로 남는지도
          같이 확인합니다. 회사 프로젝트에서는 RAG 검색 API, 좌석배치도 객체화, 3D 디지털 트윈, 모바일 운영 앱,
          플랫폼 유지보수를 다뤘습니다. 개인 프로젝트로는 Slack 자동화 봇과 홈서버를 만들며 코드 밖의 운영 흐름도 확인했습니다.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {aboutItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 90}>
            <article className="panel h-full p-5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
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
