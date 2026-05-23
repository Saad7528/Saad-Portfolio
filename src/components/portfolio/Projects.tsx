import { motion } from "framer-motion";
import { Section } from "./Section";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Lumen Neural", tag: "AI Platform", year: "2026", desc: "Real-time neural network visualization platform.", img: p1 },
  { title: "Atlas Console", tag: "SaaS Dashboard", year: "2025", desc: "Sub-100ms analytics console for ops teams.", img: p2 },
  { title: "Pulse Mobile", tag: "Mobile App", year: "2025", desc: "Mindful health tracker with tactile motion.", img: p3 },
  { title: "Nova Commerce", tag: "E-commerce", year: "2024", desc: "Headless storefront with spatial product views.", img: p4 },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="05 — Selected Work"
      title={<>Projects & <span className="text-gradient-aurora italic pr-2 font-light">case studies</span>.</>}
      description="A few pieces I'm proud of — each a study in craft, motion and detail."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            onClick={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="group relative block rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border bg-background/60 backdrop-blur-md">
                  {p.tag}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-border bg-background/60 backdrop-blur-md flex items-center justify-center group-hover:bg-aurora group-hover:border-transparent transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="-rotate-45 group-hover:rotate-0 transition-transform">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
