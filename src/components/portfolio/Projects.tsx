import { motion } from "framer-motion";
import { Section } from "./Section";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Qurbanir Hat", tag: "Livestock Marketplace", year: "2026", desc: "A modern web application for browsing and reserving Qurbani livestock—cattle, goats, and related animals marketed for Eid al-Adha.", img: p1, href: "https://qurbanir-hat-saad.vercel.app" },
  { title: "SportNest", tag: "Booking Sports Facilities", year: "2026", desc: "A premium, next-generation sports venue booking and management platform designed to connect sports enthusiasts with premium venue owners.", img: p2, href: "https://sportnest-client-one.vercel.app" },
  { title: "Dragon News", tag: "News Portal", year: "2026", desc: "The Dragon News is a modern, full-stack news portal web application. Built with modern technologies, this project provides a seamless platform for readers to explore news and for administrators to manage content efficiently.", img: p3, href: "https://dragon-news-next-saad.vercel.app" },
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
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-md"
          >
            <div
              className="relative aspect-[16/10] overflow-hidden cursor-pointer"
              onClick={() => window.open(p.href, "_blank", "noopener,noreferrer")}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border bg-background/60 backdrop-blur-md">
                  {p.tag}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-5 right-5 w-9 h-9 rounded-full border border-border bg-background/60 backdrop-blur-md flex items-center justify-center group-hover:bg-aurora group-hover:border-transparent transition-all"
                aria-label={`Open ${p.title} live preview`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="-rotate-45 group-hover:rotate-0 transition-transform">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm md:text-base">{p.desc}</p>
              </div>
              <div className="flex justify-end mt-6">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-5 py-2.5 text-xs md:text-sm font-medium"
                >
                  <span className="absolute inset-0 rounded-full bg-aurora blur-md opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
                  Live Preview
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
