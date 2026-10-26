import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">요구사항에 맞춰 넓혀온 개발 경험</h2>
        <p className="section-description">
          프로젝트가 바뀔 때마다 기존 화면에서 서버와 DB까지 요청이 어떻게 이어지는지 먼저 살펴봤습니다. 그 흐름을 익힌 뒤 Java/Spring 기능을 개발했고, 필요에 따라 Cordova·Morpheus 웹뷰와 FastAPI 검색·이미지 처리 API도 맡았습니다. 처음 접한 기술도 실제 기능을 만들면서 익혔습니다.
        </p>
        <p className="section-description mt-4">
          개인 프로젝트는 일하면서 불편했던 것에서 시작했습니다. 거제도 상주 인원의 이동·체류 일정을 한곳에서 보려고 React·Node.js 일정 도구를 만들었고, 휴가자와 회의 일정은 Slack 봇으로 알려주도록 했습니다. Codex도 일정 도구 개발에 활용했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
