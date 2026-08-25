import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
      <SiteFooter />
    </>
  );
}
