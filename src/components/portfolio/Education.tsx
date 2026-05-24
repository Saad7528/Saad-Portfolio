import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    period: "2014 — 2018",
    degree: "Diploma In Electronics Engineering",
    school: "Bangladesh Institute Of Information Technology",
    desc: "Studied core electronics, circuit design, and foundational programming. This experience of bridging hardware logic with code developed my strong analytical mindset for building digital products.",
  },
  // {
  //   period: "2016 — 2018",
  //   degree: "Higher Secondary Certificate",
  //   school: "College Name",
  //   desc: "Science group, concentration in mathematics and physics. Top of class.",
  // },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="02 — Education"
      title={<>Foundations & <span className="text-gradient-aurora italic pr-2.5 font-light">study</span>.</>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl group-hover:bg-[var(--neon-magenta)]/15 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--neon-cyan)]">{it.period}</div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight">{it.degree}</h3>
              <div className="mt-1 text-muted-foreground">{it.school}</div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
