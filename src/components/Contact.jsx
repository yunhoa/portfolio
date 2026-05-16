import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ImageModal from './ImageModal.jsx';
import inflearnHistoryImage from '../assets/inflearn-history.png';

function Contact() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="contact" className="section-shell pb-20">
      <Reveal>
        <div className="panel p-5 sm:p-8">
          <p className="section-eyebrow">Contact</p>
          <div className="mt-4 grid gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
                더 이야기해보고 싶다면 이메일로 연락 주세요.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                포트폴리오에 적은 프로젝트와 작업 경험에 대해 더 이야기할 수 있습니다. 프론트,
                백엔드, AI, 공간 데이터, 운영 자동화까지 넓게 다뤄왔고, 필요한 영역은 혼자 계속
                공부하면서 맡은 일을 끝까지 정리하는 편입니다.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 transition hover:border-cyan-300 hover:bg-white hover:shadow-xl">
                <div className="grid gap-4 sm:grid-cols-[0.72fr_1.28fr] sm:items-center">
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: inflearnHistoryImage, alt: '인프런 강의 내역' })}
                    className="group overflow-hidden rounded-md border border-slate-200 bg-slate-950 text-left"
                  >
                    <img
                      src={inflearnHistoryImage}
                      alt="인프런 강의 내역"
                      className="h-28 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-32"
                    />
                  </button>
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">Learning Record</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      업무에 필요한 기술은 따로 학습하고, 프로젝트에 적용해 왔습니다.
                      필요한 문제를 맡았을 때 바로 이어서 작업할 수 있는 개발자가 되기 위해 기본기를
                      계속 쌓고 있습니다.
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

      <ImageModal
        image={selectedImage?.src}
        alt={selectedImage?.alt}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

export default Contact;
