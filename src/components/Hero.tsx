import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_20%,color-mix(in_srgb,var(--ink)_6%,transparent),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
        <p className="mb-3 text-sm tracking-wide text-[var(--muted)]">
          {profile.location}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,4rem)] leading-[1.05] tracking-tight text-[var(--ink)]">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--body)] sm:text-xl">
          {profile.title}
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--ink)] px-5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--border-strong)] px-5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
