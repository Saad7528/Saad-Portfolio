import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "S. M. Amirul Islam Saad — Software Engineer & Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of S. M. Amirul Islam Saad — software engineer building futuristic, performant digital products with motion, craft and detail.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-[var(--neon-cyan)] selection:text-background">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
