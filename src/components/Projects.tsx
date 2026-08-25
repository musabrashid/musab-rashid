import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-medium tracking-tight text-[var(--ink)] sm:text-3xl">
          Projects
        </h2>
        <ul className="mt-10 space-y-10">
          {projects.map((project) => (
            <li key={project.name}>
              <h3 className="text-lg font-medium text-[var(--ink)]">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">{project.org}</p>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
