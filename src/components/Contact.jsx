const contacts = [
  { label: 'GitHub', value: 'TODO: GitHub 링크 추가', href: '#' },
  { label: 'Email', value: 'TODO: 이메일 주소 추가', href: 'mailto:TODO' },
  { label: 'Notion / Blog', value: 'TODO: Notion 또는 Blog 링크 추가', href: '#' },
];

function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="panel p-5 sm:p-8">
        <p className="section-eyebrow">Direction & Contact</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
              직접 만들고 연결해보는 개발자가 되고 싶습니다.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              3D 화면, 백엔드 API, 데이터 처리, 업무 자동화를 따로 떼어놓지 않고 하나의 흐름으로
              이해하려고 합니다. 아직 배우는 중인 부분도 많지만, 직접 부딪히면서 만든 경험을 계속
              쌓고 있습니다.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              TODO: 이력서 다운로드
            </a>
          </div>

          <div className="grid gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <p className="text-sm font-semibold text-cyan-700">{contact.label}</p>
                <p className="mt-1 text-sm text-slate-600">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
