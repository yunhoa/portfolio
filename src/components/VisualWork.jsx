import { useState } from 'react';
import { visualWorks } from '../data/visualWorks.js';
import ImageModal from './ImageModal.jsx';
import Reveal from './Reveal.jsx';

function VisualWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="visual-work" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Digital Twin / Service Work</p>
        <h2 className="section-title">화면과 데이터 연동이 함께 들어간 작업</h2>
        <p className="section-description">
          단순 화면 시안이 아니라 3D 화면, API 데이터, 실시간 상태값을 연결하면서 작업한 결과물입니다.
          이미지로 구조를 먼저 보고, 맡은 구현 범위를 함께 확인할 수 있게 정리했습니다.
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
                {work.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {work.details && (
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-slate-950">담당 구현</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      {work.details.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(work.problem || work.improvement) && (
                  <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    {work.problem && (
                      <div>
                        <h4 className="text-sm font-semibold text-slate-950">문제</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{work.problem}</p>
                      </div>
                    )}
                    {work.improvement && (
                      <div className={work.problem ? 'mt-4' : ''}>
                        <h4 className="text-sm font-semibold text-cyan-800">개선</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{work.improvement}</p>
                      </div>
                    )}
                  </div>
                )}
                {work.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.tech.map((tech) => (
                      <span key={tech} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
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
