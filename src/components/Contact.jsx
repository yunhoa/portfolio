import Reveal from './Reveal.jsx';
import inflearnHistoryImage from '../assets/inflearn-history.png';

function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <Reveal>
        <div className="panel p-5 sm:p-8">
          <p className="section-eyebrow">Contact</p>
          <div className="mt-4 grid gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
                필요하면 이메일로 연락 주세요.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                프론트, 백엔드, AI, 공간 데이터, 운영 자동화까지 넓게 다뤄왔고, 필요한 영역은 혼자
                계속 공부하면서 끝까지 맡아서 정리하는 편입니다.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 transition hover:border-cyan-300 hover:bg-white hover:shadow-xl">
                <div className="grid gap-4 sm:grid-cols-[0.72fr_1.28fr] sm:items-center">
                  <img
                    src={inflearnHistoryImage}
                    alt="인프런 강의 내역"
                    className="h-28 w-full rounded-md border border-slate-200 bg-slate-950 object-cover sm:h-32"
                  />
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">Learning Record</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      혼자 강의도 계속 찾아보고, 필요한 기술은 따로 사서 보면서 채워가고 있습니다.
                      맡은 일을 끝까지 정리할 수 있게 기본기를 계속 쌓는 중입니다.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:govlxnep@naver.com"
                className="rounded-lg border border-cyan-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-xl"
              >
                <p className="text-sm font-semibold text-cyan-700">Email</p>
                <p className="mt-2 break-all text-lg font-semibold text-slate-950">govlxnep@naver.com</p>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
