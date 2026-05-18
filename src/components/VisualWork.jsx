import { useState } from 'react';
import { visualWorks } from '../data/visualWorks.js';
import ImageModal from './ImageModal.jsx';
import Reveal from './Reveal.jsx';

function VisualWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="visual-work" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Spatial Digital Twin / Field Operations</p>
        <h2 className="section-title">공간 디지털 트윈 및 현장 운영 플랫폼</h2>
        <p className="section-description">
          병원·제조 공간을 3D로 연결하고, 현장 작업자가 쓰는 모바일 운영 서비스까지 다룬 프로젝트입니다.
        </p>
      </Reveal>

      <div className="mt-8 space-y-5">
        {visualWorks.map((work, index) => (
          <Reveal key={work.title} delay={index * 100}>
            <article className="panel overflow-hidden hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: work.image,
                      alt: `${work.title} 화면`,
                      isBlurred: work.imagePrivacy === 'blur',
                    })
                  }
                  className="group relative block min-h-full overflow-hidden bg-slate-950 text-left lg:min-h-[360px]"
                >
                  <img
                    src={work.image}
                    alt={`${work.title} 화면`}
                    className={`aspect-[16/10] h-full max-h-[560px] w-full object-contain p-3 transition duration-300 group-hover:opacity-95 lg:aspect-auto ${
                      work.imagePrivacy === 'blur' ? 'blur-sm' : ''
                    }`}
                  />
                  {work.imagePrivacy === 'blur' && (
                    <span className="absolute left-3 top-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold text-white">
                      블러 처리
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    확대 보기
                  </span>
                </button>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                      {work.badge}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {work.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{work.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{work.summary}</p>

                  {work.highlights && (
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {work.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-blue-100 bg-blue-50/70 px-3 py-2 text-sm font-medium text-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {work.details && (
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-blue-700">담당 구현</h4>
                      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 md:grid-cols-2">
                        {work.details.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(work.problem || work.improvement || work.outcome) && (
                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {work.problem && (
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                          <h4 className="text-sm font-semibold text-slate-950">문제</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{work.problem}</p>
                        </div>
                      )}
                      {work.improvement && (
                        <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-4">
                          <h4 className="text-sm font-semibold text-blue-900">개선</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-700">{work.improvement}</p>
                        </div>
                      )}
                      {work.outcome && (
                        <div className="rounded-lg border border-slate-200 bg-white p-4">
                          <h4 className="text-sm font-semibold text-slate-950">결과</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{work.outcome}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {work.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ImageModal
        image={selectedImage?.src}
        alt={selectedImage?.alt}
        isBlurred={selectedImage?.isBlurred}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

export default VisualWork;
