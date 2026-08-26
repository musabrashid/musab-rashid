import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-full bg-theme-bg text-theme-text-sec">
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
      </main>
      <SiteFooter />
    </div>
  );
}
