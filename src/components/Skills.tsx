import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-medium tracking-tight text-[var(--ink)] sm:text-3xl">
          Skills
        </h2>
        <div className="mt-10 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium tracking-wide text-[var(--accent)] uppercase">
                {group.label}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--body)]">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
