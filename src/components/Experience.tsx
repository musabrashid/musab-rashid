import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-medium tracking-tight text-[var(--ink)] sm:text-3xl">
          Experience
        </h2>
        <div className="mt-10 space-y-12">
          {experience.map((job) => (
            <article key={job.company} className="relative pl-5 sm:pl-6">
              <div
                aria-hidden
                className="absolute top-1.5 bottom-0 left-0 w-px bg-[var(--border-strong)]"
              />
              <div
                aria-hidden
                className="absolute top-2 left-[-3.5px] h-2 w-2 rounded-full bg-[var(--accent)]"
              />
              <header className="mb-6">
                <h3 className="text-lg font-medium text-[var(--ink)]">
                  {job.company}
                </h3>
                <p className="mt-0.5 text-sm text-[var(--muted)]">
                  {job.location}
                </p>
              </header>
              <div className="space-y-8">
                {job.roles.map((role) => (
                  <div key={`${job.company}-${role.title}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h4 className="font-medium text-[var(--body)]">
                        {role.title}
                      </h4>
                      <p className="shrink-0 text-sm tabular-nums text-[var(--muted)]">
                        {role.start} – {role.end}
                      </p>
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 48)}
                          className="relative pl-4 text-[0.95rem] leading-relaxed text-[var(--muted)] before:absolute before:top-[0.65em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-[var(--border-strong)] before:content-['']"
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
      </div>
    </section>
  );
}
