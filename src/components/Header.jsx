const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Platforms', href: '#visual-work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
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
          className="shrink-0 rounded-md border border-cyan-300 px-2.5 py-2 text-sm font-semibold text-cyan-800 transition hover:border-cyan-500 hover:bg-cyan-50 sm:px-3"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
