import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">왜 개발에서는 되고 운영에서는 안 되는지까지 확인합니다</h2>
        <p className="section-description">
          Spring Boot와 Spring Framework 기반 시스템에서 백엔드 기능 개발과 운영 유지보수를 함께 맡아왔습니다.
          기능이 동작하면 끝이라고 보기보다, 실제 브라우저와 운영 환경에서는 어떻게 동작하는지 한 번 더 확인합니다.
          한화오션 프로젝트에서는 동영상 재생 기능의 Range 처리와 JMeter 시나리오를 직접 구성했고,
          3D 산단 프로젝트에서는 폐쇄망 운영 환경의 외부 API 호출 문제를 DMZ Apache Proxy로 해결했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
