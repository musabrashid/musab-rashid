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
        <div className="mt-4">
          <p className="font-mono text-[11px] tracking-[0.12em] text-theme-text-ter uppercase">
            Relevant coursework
          </p>
          <p className="mt-2 text-sm leading-relaxed text-theme-text-sec">
            {education.coursework.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
