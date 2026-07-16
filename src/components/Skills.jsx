import { skillGroups } from '../data/skills.js';
import Reveal from './Reveal.jsx';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">프로젝트에서 사용한 기술</h2>
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
