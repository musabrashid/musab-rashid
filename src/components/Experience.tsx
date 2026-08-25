import { Section } from "@/components/Section";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <div className="space-y-4">
        {experience.map((job) => (
          <article key={job.company} className="surface-card p-5 sm:p-6">
            <header className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-[var(--ink)]">
                  {job.company}
                </h3>
                <p className="mt-0.5 text-sm text-[var(--ink-3)]">
                  {job.location}
                </p>
              </div>
            </header>
            <div className="space-y-6">
              {job.roles.map((role, roleIndex) => (
                <div
                  key={`${job.company}-${role.title}`}
                  className={
                    roleIndex > 0
                      ? "border-t border-dashed border-[var(--line)] pt-6"
                      : undefined
                  }
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="text-sm font-medium text-[var(--ink)]">
                      {role.title}
                    </h4>
                    <p className="shrink-0 text-xs tabular-nums text-[var(--ink-3)]">
                      {role.start} – {role.end}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 48)}
                        className="relative pl-3.5 text-sm leading-relaxed text-[var(--ink-2)] before:absolute before:top-[0.55em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-[var(--ink-3)] before:content-['']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
