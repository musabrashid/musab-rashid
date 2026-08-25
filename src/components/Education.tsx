import { Section } from "@/components/Section";
import { education } from "@/data/resume";

export function Education() {
  return (
    <Section id="education" index="03" title="Education">
      <div className="surface-card p-5 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-base font-semibold text-[var(--ink)]">
            {education.school}
          </h3>
          <p className="shrink-0 text-xs tabular-nums text-[var(--ink-3)]">
            {education.end}
          </p>
        </div>
        <p className="mt-1 text-sm text-[var(--ink)]">{education.degree}</p>
        <p className="mt-0.5 text-sm text-[var(--ink-3)]">{education.location}</p>
        <ul className="mt-4 space-y-1.5">
          {education.certifications.map((cert) => (
            <li key={cert} className="text-sm text-[var(--ink-2)]">
              {cert}
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-dashed border-[var(--line)] pt-4">
          <p className="text-xs font-medium tracking-wide text-[var(--ink-3)] uppercase">
            Relevant coursework
          </p>
          <ul className="mt-3 space-y-1.5">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="relative pl-3.5 text-sm text-[var(--ink-2)] before:absolute before:top-[0.55em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-[var(--ink-3)] before:content-['']"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
