import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    icon: "◉",
    items: ["React", "Next.js", "Tailwind CSS", "DaisyUI", "HeroUI", "Recharts"],
  },
  {
    title: "Backend",
    icon: "◈",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB","REST APIs"],
  },
  {
    title: "Craft & Cloud",
    icon: "◇",
    items: ["Figma", "Git", "Vercel", "Postman", "Netlify", "Testing"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Skills"
      title={<>Stack of <span className="text-gradient-aurora italic pr-2 font-light">choice</span>.</>}
      description="The tools I reach for to build fast, scalable, beautiful products."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: gi * 0.1 }}
            className="group relative p-7 rounded-3xl border border-border bg-card/40 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[var(--neon-cyan)]/5 via-transparent to-[var(--neon-magenta)]/5 pointer-events-none" />
            <div className="flex items-center justify-between mb-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{g.title}</div>
              <div className="text-2xl text-gradient-aurora">{g.icon}</div>
            </div>
            <ul className="space-y-2.5">
              {g.items.map((s) => (
                <li key={s} className="flex items-center gap-3 text-[15px]">
                  <span className="w-1 h-1 rounded-full bg-[var(--neon-cyan)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
