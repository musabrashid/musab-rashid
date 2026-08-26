import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section id="top">
      <div className="page-shell py-16 sm:py-24">
        <p className="font-mono text-[11px] tracking-[0.14em] text-theme-text-ter uppercase">
          {profile.location}
        </p>
        <h1 className="font-serif mt-4 text-[clamp(2.75rem,8vw,4.25rem)] leading-[1.05] tracking-[-0.02em] text-theme-text">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-theme-text-sec sm:text-xl">
          {profile.title}
        </p>
      </div>
    </section>
  );
}
