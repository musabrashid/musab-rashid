import { navLinks, profile } from "@/data/resume";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-base tracking-tight text-[var(--ink)] transition-opacity hover:opacity-70"
        >
          {profile.name}
        </a>
        <nav
          aria-label="Page sections"
          className="-mx-5 flex items-center gap-4 overflow-x-auto px-5 text-sm text-[var(--muted)] sm:mx-0 sm:overflow-visible sm:px-0 sm:gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 py-1 transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
