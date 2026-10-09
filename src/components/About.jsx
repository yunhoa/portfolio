import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">기능을 만들고 운영 환경까지 확인했습니다</h2>
        <p className="section-description">
          Java/Spring 백엔드 개발과 운영 시스템 유지보수를 주로 맡았습니다. 기존 시스템에 기능을 추가하거나 외부 API를 연동할 때 서버 로직과 SQL, DB 데이터를 함께 확인했습니다.
          운영 환경에서만 문제가 생긴 경우에는 서버 설정과 네트워크 경로까지 살펴보고 수정했습니다. 프로젝트에 따라 모바일 웹뷰, FastAPI 검색 API, 데이터 처리 기능도 개발했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
