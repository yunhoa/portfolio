import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">기능이 왜 그렇게 동작하는지 확인합니다</h2>
        <p className="section-description">
          Spring Boot 기반 운영 시스템과 Spring Framework 레거시 백엔드를 개발·유지보수하며 MyBatis, SQL,
          PostgreSQL, REST API 연동 업무를 맡아왔습니다. 처음 보는 시스템도 기존 코드와 데이터 흐름을 따라
          구조를 파악한 뒤 기능을 구현하고, 실제 운영 환경이나 사용 흐름에서 달라질 수 있는 부분은 직접 조건을
          만들어 확인했습니다. 운영 환경 문제는 애플리케이션 코드뿐 아니라 서버, DB, 외부 API, 네트워크 구간까지
          나누어 원인을 좁혀왔습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
