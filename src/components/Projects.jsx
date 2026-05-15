import { useState } from 'react';
import { projects } from '../data/projects.js';
import ImageModal from './ImageModal.jsx';
import Reveal from './Reveal.jsx';

function DetailList({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div>
      <h4 className="text-sm font-semibold text-cyan-700">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectMeta({ project }) {
  const metaItems = [
    project.organization && ['기관', project.organization],
    project.period && ['기간', project.period],
    project.contribution && ['기여도', project.contribution],
  ].filter(Boolean);

  if (!metaItems.length) {
    return null;
  }

  return (
    <dl
      className={`mt-4 grid gap-2 text-sm text-slate-600 ${
        metaItems.length > 1 ? 'sm:grid-cols-3' : ''
      }`}
    >
      {metaItems.map(([label, value]) => (
        <div key={label} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
          <dt className="text-xs font-semibold text-slate-500">{label}</dt>
          <dd className="mt-1 text-slate-900">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectBadges({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">{project.category}</span>
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">문제를 어떻게 풀었는지 보이는 프로젝트</h2>
        <p className="section-description">
          기술 이름보다 프로젝트에서 맡은 부분과 해결한 흐름이 먼저 보이도록 정리했습니다. 회사 프로젝트,
          개인 자동화, 홈랩, 캡스톤을 구분해 볼 수 있습니다.
        </p>
      </Reveal>

      <div className="mt-8 space-y-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={Math.min(index * 90, 220)}>
            <article className="panel overflow-hidden hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
              <div className="border-b border-slate-200 p-5 sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
                  <div>
                    <ProjectBadges project={project} />
                    <p className="mt-4 text-sm font-semibold text-cyan-700">{project.domain}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">{project.title}</h3>
                    <ProjectMeta project={project} />
                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">{project.summary}</p>
                    {project.links && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md border border-cyan-200 bg-white px-3 py-1.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 rounded-lg border border-cyan-200 bg-cyan-50 p-4">
                      <h4 className="text-sm font-semibold text-cyan-900">핵심 기여</h4>
                      <ul className="mt-3 grid gap-2 text-sm text-cyan-950 sm:grid-cols-3">
                        {project.highlights.map((item) => (
                          <li key={item} className="rounded-md bg-white/70 px-3 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {(project.images || project.image) && (
                    <div className="grid gap-3">
                      {(project.images || [project.image]).map((image, imageIndex) => {
                        const alt = `${project.title} 화면 ${imageIndex + 1}`;
                        const shouldContain = project.imageFit === 'contain';
                        return (
                          <button
                            type="button"
                            key={image}
                            onClick={() => setSelectedImage({ src: image, alt })}
                            className={`group relative overflow-hidden rounded-lg border border-slate-200 text-left ${
                              shouldContain ? 'bg-slate-950' : 'bg-slate-100'
                            }`}
                          >
                            <img
                              src={image}
                              alt={alt}
                              className={`aspect-[16/9] w-full transition duration-300 ${
                                shouldContain
                                  ? 'object-contain p-3 group-hover:opacity-95'
                                  : 'object-cover group-hover:scale-[1.03]'
                              }`}
                              loading="lazy"
                            />
                            <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                              확대 보기
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-2">
                <div className="space-y-5">
                  {project.background && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-700">배경</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.background}</p>
                    </div>
                  )}
                  {project.problem && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-700">문제</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-700">문제 해결 포인트</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.solution}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-5">
                  <DetailList title="내가 맡은 부분" items={project.role} />
                  <DetailList title="구현한 기능" items={project.features} />
                  <DetailList title="구현한 내용" items={project.implementations} />
                  <DetailList title="결과" items={project.outcomes} />
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-700">사용한 기술</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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

export default Projects;
