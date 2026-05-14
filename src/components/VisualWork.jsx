import { useState } from 'react';
import { visualWorks } from '../data/visualWorks.js';
import ImageModal from './ImageModal.jsx';
import Reveal from './Reveal.jsx';

function VisualWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="visual-work" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">3D Work</p>
        <h2 className="section-title">화면으로 확인할 수 있는 작업물</h2>
        <p className="section-description">
          제가 작업한 화면 자료입니다. 3D나 제조 도메인 화면처럼 말로 설명하기보다 직접 보는 편이
          이해가 빠른 작업들을 모았습니다.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {visualWorks.map((work, index) => (
          <Reveal key={work.title} delay={index * 100}>
            <article className="panel h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl">
              <button
                type="button"
                onClick={() => setSelectedImage({ src: work.image, alt: `${work.title} 화면` })}
                className="group relative block w-full overflow-hidden text-left"
              >
                <img
                  src={work.image}
                  alt={`${work.title} 화면`}
                  className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  확대 보기
                </span>
              </button>
              <div className="p-5">
                <p className="text-sm font-semibold text-cyan-700">{work.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{work.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{work.summary}</p>
                {work.secondaryImage && (
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: work.secondaryImage, alt: `${work.title} 보조 화면` })}
                    className="group relative mt-4 block w-full overflow-hidden rounded-md border border-slate-200 text-left"
                  >
                    <img
                      src={work.secondaryImage}
                      alt={`${work.title} 보조 화면`}
                      className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                      확대 보기
                    </span>
                  </button>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ImageModal
        image={selectedImage?.src}
        alt={selectedImage?.alt}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

export default VisualWork;
