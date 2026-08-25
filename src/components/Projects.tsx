import { Section } from "@/components/Section";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="surface-card flex flex-col p-5">
            <p className="text-xs font-medium tracking-wide text-[var(--accent-ink)]">
              {project.org}
            </p>
            <h3 className="mt-2 text-base font-semibold text-[var(--ink)]">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)]">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
