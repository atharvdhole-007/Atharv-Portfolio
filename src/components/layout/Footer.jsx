import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-surface-50 dark:bg-surface-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-accent-500 flex items-center gap-1">
          <Code2 size={16} />
          atharv.dev
        </span>
        <p className="text-sm text-surface-500 dark:text-surface-400">
          © {year} Atharv Dhole. Built with React & ❤️.
        </p>
        <div className="flex items-center gap-4 text-surface-500 dark:text-surface-400">
          <a href="https://github.com/atharvdhole-007" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-500 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/atharvdhole" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-500 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:atharv@example.com" aria-label="Email" className="hover:text-accent-500 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
