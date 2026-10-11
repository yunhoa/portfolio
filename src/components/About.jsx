import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">처음 쓰는 기술도 직접 구현하며 익혔습니다</h2>
        <p className="section-description">
          Java/Spring 백엔드 기능을 주로 개발해왔습니다. 건축물 스마트검색과 스마트플랜트 과제에서는 Python·FastAPI로 AI 검색과 이미지 처리 API를 만들었고, 상주 인원 일정 도구는 Codex를 활용해 React 화면과 Node.js API까지 구현했습니다.
          처음 맡은 시스템에서는 코드와 데이터 흐름을 따라 구조를 익혔고, 만든 기능은 실제 데이터와 운영 환경에서 어떻게 동작하는지 확인했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
