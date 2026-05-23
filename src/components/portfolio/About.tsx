import { motion } from "framer-motion";
import { Section } from "./Section";

const traits = [
  { k: "Engineer", v: "Full-stack architecture & systems" },
  { k: "Designer", v: "Motion, typography, micro-interaction" },
  { k: "Builder", v: "Ship product, not slide decks" },
  { k: "Tinkerer", v: "AI, 3D, creative coding" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<>Engineering at the <span className="text-gradient-aurora italic pr-2.5 font-light">edge</span> of design.</>}
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm Amirul — a software engineer obsessed with the small details that
            make digital products feel alive. My work sits where engineering meets
            craft: clean architecture, tactile motion, and interfaces that respond
            like they understand you.
          </p>
          <p>
            Over the past several years I've shipped products across web, mobile,
            and AI-powered systems. From sub-100ms dashboards to spatial 3D UIs,
            I build for the future without losing sight of the people using it today.
          </p>
        </motion.div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {traits.map((t, i) => (
            <motion.div
              key={t.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative p-5 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-[var(--neon-cyan)]/40 transition-colors overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[var(--neon-cyan)]/10 to-[var(--neon-magenta)]/10 pointer-events-none" />
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)]">{t.k}</div>
              <div className="mt-2 text-sm text-foreground">{t.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
