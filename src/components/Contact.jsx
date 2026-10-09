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
              <h2 className="section-title mt-0">연락은 이메일로 부탁드립니다.</h2>
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
                    <p className="copy mt-2 text-slate-700">
                      프로젝트에서 필요했던 기술을 찾아 공부하고 실제 작업에 적용했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:govlxnep@gmail.com"
                className="rounded-lg border border-blue-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl"
              >
                <p className="text-sm font-semibold text-blue-700">Email</p>
                <p className="mt-2 break-all text-lg font-semibold text-slate-950">govlxnep@gmail.com</p>
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
