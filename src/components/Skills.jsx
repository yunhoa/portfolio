import { skillGroups } from '../data/skills.js';
import Reveal from './Reveal.jsx';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">주력, 실무, 프로젝트 경험으로 나눠 본 기술</h2>
        <p className="section-description">
          단순 나열보다 실제로 어디에 썼는지 떠올릴 수 있도록 분야와 활용 범위를 나눠 정리했습니다.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={(index % 2) * 80}>
            <article className="panel h-full p-5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-slate-950">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
