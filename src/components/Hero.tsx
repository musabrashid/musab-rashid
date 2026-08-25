import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_-10%,var(--accent-tint),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--field)] px-3 py-1 text-xs text-[var(--ink-2)] shadow-[var(--shadow-hairline)]">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          />
          {profile.location}
        </div>
        <h1 className="text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--ink)]">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-xl text-base text-[var(--ink-2)] sm:text-lg">
          {profile.title}
        </p>
      </div>
    </section>
  );
}
