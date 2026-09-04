import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">Controller부터 DB까지, 운영 중인 시스템의 요청 흐름을 따라가며 일합니다</h2>
        <p className="section-description">
          Spring Boot와 Spring Legacy 환경에서 백엔드를 맡아왔고, 신규 개발보다 이미 운영 중인 시스템을
          수정하는 일이 많았습니다. 화면에서 발생한 요청이 Controller, Service, Mapper, SQL 중 어디를
          거쳐 처리되는지 확인하고, 필요하면 서버 설정이나 DB, 외부 API, 네트워크 구간까지 같이
          들여다봤습니다. 프로젝트에 따라 모바일 웹뷰, React, FastAPI, AI 모델을 다뤄야 할 때도 있었는데,
          그럴 때도 기존 백엔드 흐름 어디에 그 기능이 붙는지부터 확인하고 시작했습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
