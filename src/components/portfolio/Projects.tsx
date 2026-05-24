import { motion } from "framer-motion";
import { Section } from "./Section";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Qurbanir Hat", tag: "Livestock Marketplace", year: "2026", desc: "A modern web application for browsing and reserving Qurbani livestock.", img: p1, href: "https://qurbanir-hat-saad.vercel.app" },
  { title: "SportNest", tag: "Booking Sports Facilities", year: "2026", desc: "A premium, next-generation sports venue booking and management platform designed to connect sports enthusiasts with premium venue owners.", img: p2, href: "https://sportnest-client-one.vercel.app" },
  { title: "Dragon News", tag: "News Portal", year: "2026", desc: "News Portal.", img: p3, href: "https://dragon-news-next-saad.vercel.app" },
  // { title: "Nova Commerce", tag: "E-commerce", year: "2024", desc: "Headless storefront with spatial product views.", img: p4 },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Selected Work"
      title={<>Projects & <span className="text-gradient-aurora italic pr-2 font-light">case studies</span>.</>}
      description="A few pieces I'm proud of — each a study in craft, motion and detail."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            onClick={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="group relative block rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden" onClick={() => window.open(p.href, '_blank')}>
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
