import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">운영에서 생긴 문제도 직접 확인해왔습니다</h2>
        <p className="section-description">
          새 프로젝트에서는 화면에 보이는 결과만 보지 않고 요청이 서버와 DB에서 어떻게 처리되는지 확인합니다.
          개발과 운영 환경이 다르거나 외부 연동이 되지 않을 때는 구간을 나눠 원인을 좁히고 필요한 부분을 수정했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
