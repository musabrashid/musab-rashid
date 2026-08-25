import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <p className="mb-2 text-sm text-[var(--muted)]">{profile.location}</p>
        <h1 className="text-[clamp(2.25rem,7vw,3.5rem)] font-medium leading-tight tracking-tight text-[var(--ink)]">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-[var(--body)] sm:text-xl">
          {profile.title}
        </p>
      </div>
    </section>
  );
}
