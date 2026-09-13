import { projects } from '../data/projects.js';
import { visualWorks } from '../data/visualWorks.js';
import Reveal from './Reveal.jsx';

const visualProjects = visualWorks.map((work) => ({
  title: work.title,
  category: '회사 프로젝트',
  group: 'visual',
  domain: work.label,
  tags: [work.badge],
  summary: work.summary,
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
    project.period && ['기간', project.period],
    project.contribution && ['기여도', project.contribution],
    project.teamSize && ['팀 규모', project.teamSize],
  ].filter(Boolean);

  if (!metaItems.length) {
    return null;
  }

  return (
    <dl
      className={`mt-4 grid gap-2 text-[0.9375rem] text-slate-600 ${
        metaItems.length > 1 ? 'sm:grid-cols-3' : ''
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

function ProjectDetail({ project }) {
  const showProblemSections = project.group !== 'personal';

  return (
    <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-2">
      <div className="space-y-5">
        {project.background && (
          <div>
            <h4 className="text-sm font-semibold text-blue-700">배경</h4>
            <p className="copy mt-3">{project.background}</p>
          </div>
        )}
        {showProblemSections && project.problem && (
          <div>
            <h4 className="text-sm font-semibold text-blue-700">문제</h4>
            <p className="copy mt-3">{project.problem}</p>
          </div>
        )}
        {showProblemSections && project.solution && (
          <div>
            <h4 className="text-sm font-semibold text-blue-700">문제 해결 포인트</h4>
            <p className="copy mt-3">{project.solution}</p>
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
                <p className="mt-4 text-[0.9375rem] font-semibold text-blue-700">{project.domain}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">{project.title}</h3>
                <ProjectMeta project={project} />
                <p className="copy mt-4 max-w-3xl">{project.summary}</p>
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

    </section>
  );
}

export default Projects;
