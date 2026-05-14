import { projects } from '../data/projects.js';
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
    <dl className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
      {metaItems.map(([label, value]) => (
        <div key={label} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
          <dt className="text-xs font-semibold text-slate-500">{label}</dt>
          <dd className="mt-1 text-slate-900">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">직접 해본 프로젝트</h2>
        <p className="section-description">
          회사 프로젝트, 개인 사이드 프로젝트, 캡스톤 프로젝트를 구분해서 정리했습니다. 무엇을
          만들었는지보다 왜 만들었고 어떤 부분을 직접 맡았는지에 맞췄습니다.
        </p>
      </Reveal>

      <div className="mt-8 space-y-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={Math.min(index * 90, 220)}>
            <article className="panel overflow-hidden hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
              <div className="border-b border-slate-200 p-5 sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">{project.title}</h3>
                    <ProjectMeta project={project} />
                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">{project.description}</p>
                  </div>

                  {(project.images || project.image) && (
                    <div className="grid gap-3">
                      {(project.images || [project.image]).map((image, imageIndex) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${project.title} 화면 ${imageIndex + 1}`}
                          className="aspect-[16/9] w-full rounded-lg border border-slate-200 bg-slate-100 object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-2">
                <div className="space-y-5">
                  {project.problem && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-700">문제</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-700">해결</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.solution}</p>
                    </div>
                  )}
                  {project.background && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-700">개발 배경</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.background}</p>
                    </div>
                  )}
                  <DetailList title="주요 역할" items={project.role} />
                  <DetailList title="주요 기능" items={project.features} />
                  <DetailList title="주요 구현" items={project.implementations} />
                </div>

                <div className="space-y-5">
                  <DetailList title="결과" items={project.outcomes} />
                  <DetailList title="배운 점" items={project.learnings} />
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
    </section>
  );
}

export default Projects;
