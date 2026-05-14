import { skillGroups } from '../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-title">프로젝트에서 써 본 기술</h2>
      <p className="section-description">
        단순히 이름만 나열하기보다 어떤 작업에서 사용했는지 떠올릴 수 있도록 분야별로 정리했습니다.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.category} className="panel p-5 transition hover:border-cyan-300/30">
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
        ))}
      </div>
    </section>
  );
}

export default Skills;
