import { visualWorks } from '../data/visualWorks.js';

function VisualWork() {
  return (
    <section id="visual-work" className="section-shell">
      <p className="section-eyebrow">3D Work</p>
      <h2 className="section-title">화면으로 확인할 수 있는 작업물</h2>
      <p className="section-description">
        제가 작업한 화면 자료입니다. 3D나 제조 도메인 화면처럼 말로 설명하기보다 직접 보는 편이
        이해가 빠른 작업들을 모았습니다.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {visualWorks.map((work) => (
          <article key={work.title} className="panel overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
            <img src={work.image} alt={`${work.title} 화면`} className="aspect-[16/10] w-full object-cover" />
            <div className="p-5">
              <p className="text-sm font-semibold text-cyan-700">{work.label}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">{work.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{work.summary}</p>
              {work.secondaryImage && (
                <img
                  src={work.secondaryImage}
                  alt={`${work.title} 보조 화면`}
                  className="mt-4 aspect-[16/9] w-full rounded-md border border-slate-200 object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VisualWork;
