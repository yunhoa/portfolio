import Reveal from './Reveal.jsx';

function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <Reveal>
        <div className="panel p-5 sm:p-8">
          <p className="section-eyebrow">Contact</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
                필요하면 이메일로 연락 주세요.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                포트폴리오에 적은 프로젝트와 작업 경험에 대해 더 이야기할 수 있습니다.
              </p>
            </div>

            <a
              href="mailto:govlxnep@naver.com"
              className="rounded-lg border border-cyan-200 bg-cyan-50 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-xl"
            >
              <p className="text-sm font-semibold text-cyan-700">Email</p>
              <p className="mt-2 break-all text-lg font-semibold text-slate-950">govlxnep@naver.com</p>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
