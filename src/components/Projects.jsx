import { useState } from 'react';
import { projects } from '../data/projects.js';
import { visualWorks } from '../data/visualWorks.js';
import ImageModal from './ImageModal.jsx';
import Reveal from './Reveal.jsx';

const visualProjects = visualWorks.map((work) => ({
  title: work.title,
  category: '회사 프로젝트',
  group: 'visual',
  domain: work.label,
  tags: [work.badge],
  image: work.image,
  imagePrivacy: work.imagePrivacy,
  summary: work.summary,
  highlights: work.highlights,
  role: work.details,
  problem: work.problem,
  solution: work.improvement,
  outcomes: work.outcome ? [work.outcome] : [],
  tech: work.tech,
}));

const allProjects = [...visualProjects, ...projects];

function getBlurClass(imagePrivacy) {
  if (imagePrivacy === 'soft-blur') {
    return 'blur-[1.5px]';
  }

  if (imagePrivacy === 'blur') {
    return 'blur-sm';
  }

  return '';
}

function isImageBlurred(imagePrivacy) {
  return imagePrivacy === 'blur' || imagePrivacy === 'soft-blur';
}

function DetailList({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div>
      <h4 className="text-sm font-semibold text-blue-700">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
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
    project.teamSize && ['팀 규모', project.teamSize],
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
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectPreviewGallery({ items }) {
  const previewProjects = items.filter((project) => project.image);

  return (
    <Reveal delay={80}>
      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white px-4 py-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Project Preview</p>
            <p className="mt-1 text-sm text-slate-600">화면으로 먼저 확인할 수 있는 작업을 모았습니다.</p>
          </div>
          <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 sm:inline-flex">
            {items.length} projects
          </span>
        </div>

        <div className="project-circular-gallery mt-6 flex min-h-[350px] gap-5 overflow-x-auto overflow-y-hidden px-2 pb-6 pt-5">
          {previewProjects.map((project, index) => (
            <a
              key={project.title}
              href={`#project-${items.indexOf(project) + 1}`}
              className="project-circular-gallery-item group relative flex h-80 w-56 shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-left shadow-[0_18px_35px_rgba(15,23,42,0.10)] transition duration-300 hover:z-20 hover:-translate-y-4 hover:border-blue-300 hover:bg-white"
              style={{
                transform: `rotateY(${(index - (previewProjects.length - 1) / 2) * -6}deg) translateY(${Math.abs(index - (previewProjects.length - 1) / 2) * 3}px)`,
              }}
            >
              <div className="relative h-36 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} 대표 이미지`}
                  className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${getBlurClass(
                    project.imagePrivacy,
                  )}`}
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  {String(items.indexOf(project) + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <p className="text-xs font-semibold text-blue-700">{project.category}</p>
                  <h3 className="mt-2 line-clamp-3 text-base font-semibold leading-6 text-slate-950">{project.title}</h3>
                </div>
                <p className="mt-4 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">
                  {project.domain}
                </p>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/70" />
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

const projectGroups = [
  {
    key: 'visual',
    title: '3D 공간 화면과 현장 운영 서비스',
    description: '3D 화면, 좌표 정합, 실시간 데이터, 모바일 운영처럼 화면에서 결과가 바로 보이는 작업입니다.',
  },
  {
    key: 'featured',
    title: 'Featured Projects',
    description: '백엔드 API, AI 처리, 검색 구조, 데이터 가공 흐름을 중심으로 맡았던 프로젝트입니다.',
  },
  {
    key: 'other',
    title: 'Other Projects',
    description: '운영 중인 서비스에서 기능 수정, 데이터 확인, 외부 연동, 성능 테스트를 맡았던 작업입니다.',
  },
  {
    key: 'personal',
    title: 'Personal Projects',
    description: '업무 중 불편했던 흐름을 직접 도구로 만들거나, 따로 학습하면서 구현한 프로젝트입니다.',
  },
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">문제를 어떻게 처리했는지 보이는 프로젝트</h2>
        <p className="section-description">
          기술 이름보다 어떤 데이터를 받았고, 어떻게 처리했고, 결과가 어디에 쓰였는지 중심으로 정리했습니다.
        </p>
      </Reveal>

      <ProjectPreviewGallery items={allProjects} />

      <div className="mt-8 space-y-10">
        {projectGroups.map((group) => {
          const groupedProjects = allProjects.filter((project) => (project.group || 'featured') === group.key);

          if (!groupedProjects.length) {
            return null;
          }

          return (
            <div key={group.key} className="space-y-4">
              <Reveal>
                <div className="border-l-2 border-blue-300 pl-4">
                  <h3 className="text-2xl font-semibold text-slate-950">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
                </div>
              </Reveal>

              <div className="space-y-6">
                {groupedProjects.map((project, groupIndex) => {
                  const projectIndex = allProjects.indexOf(project);

                  return (
                    <Reveal key={project.title} delay={Math.min(groupIndex * 90, 220)}>
                      <article
                        id={`project-${projectIndex + 1}`}
                        className="panel scroll-mt-24 overflow-hidden hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                      >
              <div className="border-b border-slate-200 p-5 sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
                  <div>
                    <ProjectBadges project={project} />
                    <p className="mt-4 text-sm font-semibold text-blue-700">{project.domain}</p>
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
                            className="rounded-md border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50/70 p-4">
                      <h4 className="text-sm font-semibold text-blue-900">핵심 작업</h4>
                      <ul className="mt-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-3">
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
                        const isBlurred = isImageBlurred(project.imagePrivacy);
                        const blurClass = getBlurClass(project.imagePrivacy);
                        return (
                          <button
                            type="button"
                            key={image}
                            onClick={() =>
                              setSelectedImage({
                                src: image,
                                alt,
                                isBlurred,
                                imagePrivacy: project.imagePrivacy,
                              })
                            }
                            className={`group relative overflow-hidden rounded-lg border border-slate-200 text-left ${
                              shouldContain ? 'bg-slate-950' : 'bg-slate-100'
                            }`}
                          >
                            <img
                              src={image}
                              alt={alt}
                              className={`aspect-[16/9] w-full transition duration-300 ${
                                shouldContain
                                  ? `object-contain p-3 group-hover:opacity-95 ${blurClass}`
                                  : `object-cover group-hover:scale-[1.03] ${blurClass}`
                              }`}
                              loading="lazy"
                            />
                            {isBlurred && (
                              <span className="absolute left-3 top-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold text-white">
                                블러 처리
                              </span>
                            )}
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
                      <h4 className="text-sm font-semibold text-blue-700">배경</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.background}</p>
                    </div>
                  )}
                  {project.problem && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700">문제</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700">문제 해결 포인트</h4>
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
                    <h4 className="text-sm font-semibold text-blue-700">사용한 기술</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
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
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <ImageModal
        image={selectedImage?.src}
        alt={selectedImage?.alt}
        isBlurred={selectedImage?.isBlurred}
        imagePrivacy={selectedImage?.imagePrivacy}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

export default Projects;
