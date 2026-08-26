import { Section } from "@/components/Section";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <div className="space-y-10">
        {experience.map((job, jobIndex) => (
          <article
            key={job.company}
            className={
              jobIndex > 0 ? "border-t border-theme-border pt-10" : undefined
            }
          >
            <header className="mb-5">
              <h3 className="text-lg font-medium tracking-tight text-theme-text">
                {job.company}
              </h3>
              <p className="mt-1 text-sm text-theme-text-ter">{job.location}</p>
            </header>
            <div className="space-y-8">
              {job.roles.map((role) => (
                <div key={`${job.company}-${role.title}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="text-sm font-medium text-theme-text">
                      {role.title}
                    </h4>
                    <p className="font-mono shrink-0 text-[11px] tracking-wide text-theme-text-ter tabular-nums">
                      {role.start} – {role.end}
                    </p>
                  </div>
                  <ul className="mt-3 max-w-prose space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 48)}
                        className="relative pl-3.5 text-[0.9375rem] leading-relaxed text-theme-text-sec before:absolute before:top-[0.65em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-theme-text-ter before:content-['']"
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
