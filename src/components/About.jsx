import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">처음 쓰는 기술도 직접 구현하며 익혔습니다</h2>
        <p className="section-description">
          회사에서 여러 SI 프로젝트와 연구과제에 참여하며 Java/Spring 기반 기능 개발과 유지보수를 맡았습니다. 프로젝트마다 필요한 기능이 달라 모바일 웹뷰도 개발했고, 건축물 검색과 설비 이미지 처리가 필요한 과제에서는 Python·FastAPI로 API를 구현했습니다. 처음 쓰는 기술은 필요한 기능을 직접 만들어보며 익히고, 실제 데이터를 넣어 동작을 확인했습니다.
        </p>
        <p className="section-description mt-4">
          업무 중 반복되는 불편을 줄이려고 개인 도구도 만들고 있습니다. 상주 인원의 이동·체류 일정을 한곳에서 확인하려고 Codex를 활용해 React와 Node.js로 일정 도구를 만들었고, 휴가와 회의 알림은 Slack 봇으로 받아볼 수 있게 했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
