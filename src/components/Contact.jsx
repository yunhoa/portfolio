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
                프로젝트 이야기가 더 궁금하시다면 편하게 연락 주세요.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                백엔드가 중심이지만 화면, AI, 인프라까지 필요한 구간이면 직접 맡아 만들어 왔습니다.
                위에 정리한 프로젝트들은 전부 제가 직접 겪은 과정이라, 어떤 것이든 왜 그렇게
                만들었는지까지 설명드릴 수 있습니다.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-4 transition hover:border-blue-300 hover:bg-white hover:shadow-xl">
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
                    <p className="text-sm font-semibold text-blue-700">Learning Record</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      필요한 기술이 생기면 강의로 기본을 잡고 바로 프로젝트에 적용하는 방식으로 익혀왔습니다.
                      수강 내역을 보시면 프로젝트 이력과 시기가 거의 겹칩니다.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:govlxnep@naver.com"
                className="rounded-lg border border-blue-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl"
              >
                <p className="text-sm font-semibold text-blue-700">Email</p>
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
