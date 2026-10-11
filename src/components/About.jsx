import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">서버 개발부터 운영 환경 대응까지</h2>
        <p className="section-description">
          SI 프로젝트와 연구과제에서 Java/Spring 백엔드 기능을 중심으로 모바일 웹뷰, 검색 API, 데이터 처리 기능도 개발했습니다.
          새 시스템을 맡으면 기존 코드와 데이터 흐름을 따라가며 필요한 기능을 구현했고, 외부 연동이 운영 환경에서 실패하거나 실제 사용 상황을 확인해야 할 때는 서버와 통신 경로, 테스트 조건까지 살펴봤습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
