import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">맡은 기술이 매번 달랐고, 매번 돌아가는 것까지 만들었습니다</h2>
        <p className="section-description">
          입사 후 1년 반 동안 맡은 프로젝트의 기술이 매번 달랐습니다. RAG 검색, Computer Vision,
          3D 디지털 트윈, 모바일 운영, 부하테스트까지 대부분 처음 해보는 것들이었습니다. 그때마다
          강의와 문서로 기본을 잡고 기존 코드를 따라가면서, 실제 서비스에서 쓰이는 기능까지 만들었습니다.
          한 분야를 오래 판 전문가는 아직 아닙니다. 대신 새로운 걸 맡는 데 거부감이 없고, 모르는
          상태에서 시작해도 어떻게든 돌아가는 데까지는 만들어 놓는다는 건 아래 프로젝트들로 보여드릴 수 있습니다.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
