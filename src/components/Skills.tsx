import { Section } from "@/components/Section";
import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-medium tracking-wide text-[var(--ink-3)] uppercase">
              {group.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
