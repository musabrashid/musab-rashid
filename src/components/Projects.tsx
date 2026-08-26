import { Section } from "@/components/Section";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.name} className="max-w-prose">
            <p className="font-mono text-[11px] tracking-[0.12em] text-theme-accent uppercase">
              {project.org}
            </p>
            <h3 className="mt-2 text-base font-medium text-theme-text">
              {project.name}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-theme-text-sec">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
