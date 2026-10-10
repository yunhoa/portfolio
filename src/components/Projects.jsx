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
  period: work.period,
  tags: [work.badge],
  summary: work.summary,
  background: work.background,
  highlights: work.highlights,
  role: work.details,
  problem: work.problem,
  solution: work.improvement,
  outcomes: work.outcome ? [work.outcome] : [],
  tech: work.tech,
}));

const groupOrder = ['backend', 'ai', 'visual', 'personal'];

const projectPriority = [
  '한화오션 안전혁신과제',
  '3D 산단 디지털 플랫폼 유지관리',
  'MySafety 작업자 안전 지원 모바일 플랫폼',
  'Safety Watch 스마트검색 RAG 기반 AI 플랫폼',
  '스마트플랜트 설비 이미지 전처리 및 메타정보 생성 프레임워크',
];

const allProjects = [...projects, ...visualProjects].sort(
  (a, b) => {
    const groupDiff = groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group);
    if (groupDiff !== 0) {
      return groupDiff;
    }

    const aPriority = projectPriority.indexOf(a.title);
    const bPriority = projectPriority.indexOf(b.title);
    const normalizedA = aPriority === -1 ? Number.MAX_SAFE_INTEGER : aPriority;
    const normalizedB = bPriority === -1 ? Number.MAX_SAFE_INTEGER : bPriority;
    return normalizedA - normalizedB;
  },
);

function DetailList({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div>
      <h4 className="text-sm font-semibold text-blue-700">{title}</h4>
      <ul className="copy-list mt-3">
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
    project.period && ['참여기간', project.period],
    project.contribution && ['기여도', project.contribution],
    project.teamSize && ['팀 규모', project.teamSize],
  ].filter(Boolean);

  if (!metaItems.length) {
    return null;
  }

  return (
    <dl
      className={`mt-4 grid gap-2 text-[0.9375rem] text-slate-600 ${
        metaItems.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''
      }`}
    >
      {metaItems.map(([label, value]) => (
        <div key={label} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
          <dt className="meta-label">{label}</dt>
          <dd className="mt-1 text-slate-900">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImagePreviewButton({ src, alt, className = '', imageClassName = '', onOpen }) {
  return (
    <button
      type="button"
      className={`group block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${className}`}
      onClick={() => onOpen({ src, alt })}
      aria-label={`${alt} 크게 보기`}
    >
      <img src={src} alt={alt} className={`block h-full w-full object-contain transition group-hover:brightness-[0.97] ${imageClassName}`} loading="lazy" />
    </button>
  );
}

function BotScreenshots({ project, onOpen }) {
  if (!project.botOverview || !project.botScreenshots?.length) {
    return null;
  }

  return (
    <section className="mt-5 border-t border-slate-200 pt-5" aria-label="Slack 봇 화면">
      <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        <figure className="min-w-0">
          <figcaption className="mb-2 text-sm font-semibold text-slate-700">전체 봇</figcaption>
          <img
            src={project.botOverview}
            alt="Slack에서 운영 중인 봇 목록: 회의, 기술 소식, 운세, B2B 일정, 통합 알림 봇"
            className="mx-auto block max-h-72 w-full object-contain object-top"
            loading="lazy"
          />
        </figure>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {project.botScreenshots.map((item) => (
            <figure key={item.label} className="min-w-0">
              <figcaption className="mb-2 text-sm font-semibold text-slate-700">{item.label}</figcaption>
              {item.images ? (
                <div className="grid grid-cols-2 gap-2">
                  {item.images.map((src, index) => (
                    <ImagePreviewButton
                      key={src}
                      src={src}
                      alt={`${item.label} 화면 ${index + 1}`}
                      className="block h-36 w-full border border-slate-200 bg-slate-50 object-contain sm:h-40"
                      onOpen={onOpen}
                    />
                  ))}
                </div>
              ) : (
                <ImagePreviewButton
                  src={item.src}
                  alt={`${item.label} Slack 화면`}
                  className="block h-36 w-full border border-slate-200 bg-slate-50 object-contain sm:h-40"
                  onOpen={onOpen}
                />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectScreenshots({ project, onOpen }) {
  if (!project.screenshots?.length) return null;

  return (
    <section className="mt-5 border-t border-slate-200 pt-5" aria-label={`${project.title} 화면 캡처`}>
      <div className={`grid gap-4 sm:grid-cols-2 ${project.screenshots.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2'}`}>
        {project.screenshots.map((item) => (
          <figure key={item.label} className="min-w-0">
            <figcaption className="mb-2 text-sm font-semibold text-slate-700">{item.label}</figcaption>
            <ImagePreviewButton
              src={item.src}
              alt={`${project.title} - ${item.label}`}
              className={`overflow-hidden border border-slate-200 bg-slate-50 ${item.frameClass || 'aspect-[4/3]'}`}
              onOpen={onOpen}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function ProjectBadges({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">{project.category}</span>
    </div>
  );
}

function ProjectDetail({ project }) {
  const showProblemSections = project.group !== 'personal';
  const showPersonalContext = project.group === 'personal';

  return (
    <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-2">
      <div className="space-y-5">
        {project.background && (
          <div>
            <h4 className="text-sm font-semibold text-blue-700">{project.sectionLabels?.background || (showPersonalContext ? '만든 이유' : '프로젝트 소개')}</h4>
            <p className="copy mt-3">{project.background}</p>
          </div>
        )}
        {showPersonalContext && project.implementations?.length > 0 && (
          <DetailList title="구성한 내용" items={project.implementations} />
        )}
        {showProblemSections && project.problem && (
          <div>
            <h4 className="text-sm font-semibold text-blue-700">{project.sectionLabels?.problem || '배경 및 요구사항'}</h4>
            <p className="copy mt-3 whitespace-pre-line">{project.problem}</p>
          </div>
        )}
        {showProblemSections && project.solution && (
          <div>
            <h4 className="text-sm font-semibold text-blue-700">{project.sectionLabels?.solution || '구현 내용'}</h4>
            <p className="copy mt-3 whitespace-pre-line">{project.solution}</p>
          </div>
        )}
      </div>

      <div className="space-y-5">
        <DetailList title={project.sectionLabels?.role || (showPersonalContext ? '개발 내용' : '담당 업무')} items={project.role} />
        <DetailList title={project.sectionLabels?.features || '주요 기능'} items={project.features} />
        {!showPersonalContext && <DetailList title={project.sectionLabels?.implementations || '구현 내용'} items={project.implementations} />}
        <DetailList title={project.sectionLabels?.outcomes || '결과'} items={project.outcomes} />
        <div>
          <h4 className="text-sm font-semibold text-blue-700">기술</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.8125rem] font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const projectGroups = [
  {
    key: 'backend',
  },
  {
    key: 'ai',
  },
  {
    key: 'visual',
  },
  {
    key: 'personal',
  },
];

function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">프로젝트</h2>
      </Reveal>

      <div className="mt-8 space-y-6">
        {projectGroups.map((group) => {
          const groupedProjects = allProjects.filter((project) => project.group === group.key);

          if (!groupedProjects.length) {
            return null;
          }

          return (
            <div key={group.key}>
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
                <ProjectBadges project={project} />
                <h3 className="mt-4 text-xl font-semibold text-slate-950 sm:text-2xl">{project.title}</h3>
                {project.diagram && (
                  <figure className="mt-5 border-t border-slate-200 pt-5">
                    <ImagePreviewButton
                      src={project.diagram}
                      alt="브라우저 접속부터 DuckDNS, Proxmox, pfSense, KT 공유기, Nginx Proxy Manager를 거쳐 내부 서비스로 연결되는 홈랩 네트워크 구성도"
                      className="block h-auto w-full"
                      onOpen={setLightboxImage}
                    />
                  </figure>
                )}
                {project.previewImage && (
                  <figure className="mt-5 border-t border-slate-200 pt-5">
                    <ImagePreviewButton
                      src={project.previewImage}
                      alt={`${project.title} 익명 샘플 일정 화면`}
                      className="block h-auto w-full"
                      onOpen={setLightboxImage}
                    />
                  </figure>
                )}
                <ProjectMeta project={project} />
                <p className="copy mt-4 max-w-3xl">{project.summary}</p>
                <BotScreenshots project={project} onOpen={setLightboxImage} />
                <ProjectScreenshots project={project} onOpen={setLightboxImage} />
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
              </div>

              <ProjectDetail project={project} />
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
        image={lightboxImage?.src}
        alt={lightboxImage?.alt || ''}
        onClose={() => setLightboxImage(null)}
      />

    </section>
  );
}

export default Projects;
