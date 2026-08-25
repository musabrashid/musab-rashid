import { profile } from "@/data/resume";

export function SiteFooter() {
  return (
    <footer className="section-rule">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm font-medium text-[var(--ink)]">{profile.name}</p>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${profile.email}`} className="pill">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="pill"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
