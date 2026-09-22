import { motion } from "framer-motion";
import { Section } from "./Section";
import pShopnexus from "@/assets/project-shopnexus.jpg";
import pRentwise from "@/assets/project-rentwise.jpg";
import pStudygen from "@/assets/project-studygen.jpg";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "ShopNexus",
    tag: "E-Commerce Marketplace",
    badge: "Team of 4",
    year: "2026",
    desc: "A collaborative full-stack gadget and electronics marketplace built by a 4-member agile engineering team. Features an AI shopping assistant, camera visual search, abandoned cart recovery, and a live telemetry system.",
    img: pShopnexus,
    href: "https://shop-nexus-frontend-ten.vercel.app",
    github: "https://github.com/Saad7528/ShopNexus-Frontend",
    githubServer: "https://github.com/Saad7528/ShopNexus-Backend",
  },
  {
    title: "RentWise AI",
    tag: "AI Rental Marketplace",
    year: "2026",
    desc: "An intelligent property rental platform in Bangladesh featuring AI-powered natural language property search, automated smart listing descriptions, and GPS proximity exploration.",
    img: pRentwise,
    href: "https://rent-wise-ai-client.vercel.app/",
    github: "https://github.com/Saad7528/RentWise_AI_Client",
    githubServer: "https://github.com/Saad7528/RentWise_AI_Server",
  },
  {
    title: "StudyGen AI",
    tag: "AI Education & Exam Suite",
    year: "2026",
    desc: "An AI-powered education platform that turns handwritten notebook photos into board-standard CQ & MCQ question papers with direct Google Docs editable export, study tools, and flashcards.",
    img: pStudygen,
    href: "https://study-gen-ai-gules.vercel.app/?tab=question-paper",
    github: "https://github.com/Saad7528/StudyGen_AI",
  },
  {
    title: "Qurbanir Hat",
    tag: "Livestock Marketplace",
    year: "2026",
    desc: "A modern web application for browsing and reserving Qurbani livestock—cattle, goats, and related animals marketed for Eid al-Adha.",
    img: p1,
    href: "https://qurbanir-hat-saad.vercel.app",
  },
  {
    title: "SportNest",
    tag: "Booking Sports Facilities",
    year: "2026",
    desc: "A premium, next-generation sports venue booking and management platform designed to connect sports enthusiasts with premium venue owners.",
    img: p2,
    href: "https://sportnest-client-one.vercel.app",
  },
  {
    title: "Dragon News",
    tag: "News Portal",
    year: "2026",
    desc: "The Dragon News is a modern, full-stack news portal web application. Built with modern technologies, this project provides a seamless platform for readers to explore news and for administrators to manage content efficiently.",
    img: p3,
    href: "https://dragon-news-next-saad.vercel.app",
  },
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
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden border border-border bg-card/90 hover:border-primary/40 transition-all duration-500"
          >
            <div
              className="relative aspect-video overflow-hidden cursor-pointer bg-background/30"
              onClick={() => window.open(p.href, "_blank", "noopener,noreferrer")}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-border bg-background/80 backdrop-blur-md flex items-center justify-center group-hover:bg-aurora group-hover:border-transparent transition-all shadow-md z-10"
                aria-label={`Open ${p.title} live preview`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="-rotate-45 group-hover:rotate-0 transition-transform">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border bg-card/80 text-foreground/80">
                    {p.tag}
                  </span>
                  {p.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary">
                      {p.badge}
                    </span>
                  )}
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground ml-auto">
                    {p.year}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm md:text-base">{p.desc}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
                <div className="flex items-center gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-background/80 hover:bg-secondary/20 hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
                      title="GitHub Client"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                      Client
                    </a>
                  )}
                  {p.githubServer && (
                    <a
                      href={p.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-background/80 hover:bg-secondary/20 hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
                      title="GitHub Server"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                      Server
                    </a>
                  )}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-5 py-2.5 text-xs md:text-sm font-medium ml-auto"
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
