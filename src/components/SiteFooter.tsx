import { profile } from "@/data/resume";

export function SiteFooter() {
  return (
    <footer className="section-rule">
      <div className="page-shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-lg text-theme-text">{profile.name}</p>
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-5">
          <a href={`mailto:${profile.email}`} className="link-quiet">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="link-quiet"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
