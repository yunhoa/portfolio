import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">요청과 데이터 흐름을 따라 기능을 개발합니다</h2>
        <p className="section-description">
          Spring Boot 기반 운영 시스템과 Spring Framework 레거시 백엔드를 개발·유지보수하며
          MyBatis, SQL, PostgreSQL, REST API 연동 업무를 맡아왔습니다. 처음 보는 시스템도 화면 결과만 보고
          수정하기보다 요청이 어떤 로직과 데이터를 거쳐 처리되는지 따라가며 구조를 파악합니다.
          운영 중 외부 API 연동이나 데이터 확인이 필요한 기능도 서버, DB, 네트워크 구간을 나누어 확인해왔습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
