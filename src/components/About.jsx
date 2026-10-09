import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">기능을 만든 뒤 실제 동작도 확인합니다</h2>
        <p className="section-description">
          새 프로젝트를 맡으면 화면에서 서버와 DB까지 요청이 어떻게 이어지는지 먼저 살펴봅니다. 실제 환경에서
          데이터가 다르게 들어오거나 외부 연동이 막히면, 코드와 운영 경로를 확인해 원인을 찾아 수정해왔습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
