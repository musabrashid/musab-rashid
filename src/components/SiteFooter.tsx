import { profile } from "@/data/resume";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-base font-medium text-[var(--ink)]">
          {profile.name}
        </p>
        <div className="flex flex-col gap-2 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-[var(--ink)]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--ink)]"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="transition-colors hover:text-[var(--ink)]"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
