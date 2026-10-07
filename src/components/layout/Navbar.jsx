import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'CP', href: '#competitive-programming' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 font-mono font-semibold text-accent-500">
          <Code2 size={20} />
          <span className="text-gradient">atharv.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-surface-600 dark:text-surface-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            id="navbar-menu-toggle"
            className="md:hidden text-surface-600 dark:text-surface-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden glass border-t px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-surface-600 dark:text-surface-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
