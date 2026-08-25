import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-medium tracking-tight text-[var(--ink)] sm:text-3xl">
          Education
        </h2>
        <div className="mt-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-lg font-medium text-[var(--ink)]">
              {education.school}
            </h3>
            <p className="shrink-0 text-sm tabular-nums text-[var(--muted)]">
              {education.end}
            </p>
          </div>
          <p className="mt-1 text-[var(--body)]">{education.degree}</p>
          <p className="mt-0.5 text-sm text-[var(--muted)]">
            {education.location}
          </p>
          <ul className="mt-4 space-y-1.5">
            {education.certifications.map((cert) => (
              <li
                key={cert}
                className="text-sm leading-relaxed text-[var(--muted)]"
              >
                {cert}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-[var(--muted)]">
            <span className="font-medium text-[var(--body)]">
              Relevant coursework:{" "}
            </span>
            {education.coursework.join("; ")}
          </p>
        </div>
      </div>
    </section>
  );
}
