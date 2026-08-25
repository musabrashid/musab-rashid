import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
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
