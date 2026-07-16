import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">맡은 기술이 매번 달랐고, 매번 돌아가는 것까지 만들었습니다</h2>
        <p className="section-description">
          입사 후 1년 반 동안 프로젝트마다 서로 다른 기술과 도메인을 맡았습니다. RAG 검색, Computer Vision,
          3D 디지털 트윈, 모바일 운영, 부하테스트까지 대부분 처음 접하는 영역이었지만, 그때마다 필요한
          기술을 빠르게 학습해 요구사항 분석부터 기능 구현, 운영 적용까지 연결해 왔습니다.
          그 과정은 아래 프로젝트들에서 확인하실 수 있습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
