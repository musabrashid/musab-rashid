import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-rule scroll-mt-8">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-baseline gap-3">
          <span className="text-xs font-medium tracking-widest text-[var(--ink-3)] tabular-nums">
            {index}
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-[var(--ink)] sm:text-xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
