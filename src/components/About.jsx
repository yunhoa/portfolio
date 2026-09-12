import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">화면에서 DB와 외부 시스템까지, 문제가 생긴 지점을 좁혀갑니다</h2>
        <p className="section-description">
          Spring Boot와 Spring Framework 기반 시스템에서 백엔드 기능 개발과 운영 유지보수를 함께 맡아왔습니다.
          문제가 생기면 화면에서 보이는 현상만 보고 판단하지 않고, 요청/응답, Controller, Service,
          MyBatis Mapper, SQL, DB 값, 외부 API와 네트워크 구간을 순서대로 확인합니다. 모바일 웹뷰,
          FastAPI, RAG, 3D 화면처럼 다른 기술이 붙는 프로젝트에서도 먼저 기존 서버와 데이터 흐름 안에서
          어디에 연결되는지부터 확인하고 작업했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
