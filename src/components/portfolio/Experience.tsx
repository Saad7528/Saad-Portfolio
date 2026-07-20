import { motion } from "framer-motion";
import { Section } from "./Section";

const roles = [
  {
    period: "2024 — Present",
    role: "Full-Stack Web Developer",
    company: "Freelance & Projects",
    desc: "Building scalable web applications, modern responsive UIs, and full-stack platforms with React, Next.js, Tailwind CSS, and Node.js.",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    period: "2020 — Present",
    role: "Founder & Content Creator",
    company: "SaadTech ETC (YouTube)",
    desc: "Creating educational content around DIY electronics, microcontrollers, custom hardware, and creative coding for tech enthusiasts.",
    stack: ["Electronics", "Microcontrollers", "Hardware", "Video Production"],
  },
  {
    period: "2014 — 2018",
    role: "Electronics Engineering Student",
    company: "BIIT",
    desc: "Completed Diploma in Electronics Engineering, focusing on circuit design, hardware programming, and analytical problem-solving.",
    stack: ["Electronics", "Circuit Design", "Embedded Logic"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title={<>Trajectory through <span className="text-gradient-aurora italic pr-2.5 font-light">time</span>.</>}
    >
      <div className="relative pl-10 md:pl-16">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-3 md:left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)]"
        />
        <div className="space-y-16">
          {roles.map((r, i) => (
            <motion.div
              key={r.role + r.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative"
            >
              <div className="absolute -left-[30px] md:-left-[46px] top-2 w-3 h-3 rounded-full bg-background border border-[var(--neon-cyan)] glow-cyan">
                <div className="absolute inset-0.5 rounded-full bg-aurora" />
              </div>

              <div className="grid md:grid-cols-12 gap-6 group">
                <div className="md:col-span-3">
                  <div className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--neon-cyan)]">
                    {r.period}
                  </div>
                </div>
                <div className="md:col-span-9 p-6 md:p-7 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-[var(--neon-cyan)]/40 transition-colors">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {r.role}{" "}
                    <span className="text-muted-foreground font-light">— {r.company}</span>
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed text-sm md:text-base">{r.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.stack.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border bg-background/40 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
