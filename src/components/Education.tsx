import { Section } from "@/components/Section";
import { education } from "@/data/resume";

export function Education() {
  return (
    <Section id="education" index="03" title="Education">
      <div className="max-w-prose">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-base font-medium text-theme-text">
            {education.school}
          </h3>
          <p className="font-mono shrink-0 text-[11px] tracking-wide text-theme-text-ter tabular-nums">
            {education.end}
          </p>
        </div>
        <p className="mt-1 text-sm text-theme-text">{education.degree}</p>
        <p className="mt-0.5 text-sm text-theme-text-ter">{education.location}</p>
        <ul className="mt-4 space-y-1.5">
          {education.certifications.map((cert) => (
            <li key={cert} className="text-sm text-theme-text-sec">
              {cert}
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-theme-border pt-5">
          <p className="font-mono text-[11px] tracking-[0.12em] text-theme-text-ter uppercase">
            Relevant coursework
          </p>
          <ul className="mt-3 space-y-1.5">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="relative pl-3.5 text-sm text-theme-text-sec before:absolute before:top-[0.55em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-theme-text-ter before:content-['']"
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
