import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 64) {
        setVisible(true);
        previousY = currentY;
        return;
      }

      if (Math.abs(currentY - previousY) > 12) {
        setVisible(currentY < previousY);
        previousY = currentY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      onFocusCapture={() => setVisible(true)}
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <nav aria-label="주요 메뉴" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="text-base font-semibold text-slate-950">
          조윤호
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="shrink-0 rounded-md border border-blue-200 px-2.5 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-400 hover:bg-blue-50 sm:px-3"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
