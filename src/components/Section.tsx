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
      <div className="page-shell py-14 sm:py-16">
        <div className="mb-8 flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.14em] text-theme-text-ter uppercase tabular-nums">
            {index}
          </span>
          <h2 className="font-serif text-2xl tracking-tight text-theme-text sm:text-[1.75rem]">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
