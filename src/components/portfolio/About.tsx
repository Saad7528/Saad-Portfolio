import { motion } from "framer-motion";
import { Section } from "./Section";

// const traits = [
//   { k: "Engineer", v: "Full-stack architecture & systems" },
//   { k: "Designer", v: "Motion, typography, micro-interaction" },
//   { k: "Builder", v: "Ship product, not slide decks" },
//   { k: "Tinkerer", v: "AI, 3D, creative coding" },
// ];

const traits = [
  { k: "FRONTEND", v: "React, Next.js, Tailwind CSS" },
  { k: "BACKEND & DB", v: "Node.js, MongoDB, Firebase" },
  { k: "BUILDER", v: "Livestock Marketplace, Keen Keeper, SportNest" },
  { k: "TINKERER", v: "Electronics, Hardware Projects, Creative Coding" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<>Building scalable and <span className="text-gradient-aurora italic pr-2.5 font-light">interactive</span> web experiences.</>}
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
            My tech journey started in Electronics Engineering. While building custom circuits and programming microcontrollers, I realized my true passion was in coding. This inspired me to dive into software and complete an intensive Full-Stack Web Development course at Programming Hero. Today, I apply that same analytical mindset to build fast and modern web applications.
          </p>
          <p>
            I specialize in React, Next.js, and Tailwind CSS. From full-stack marketplaces to interactive dashboards, I love turning complex problems into clean, scalable, and user-friendly digital experiences.
          </p>
          <p>
            Outside of web development, I run SaadTech ETC, a YouTube channel dedicated to DIY electronics. I also enjoy riding my motorcycle, tending to my home garden,To hang out with friends and spending quality time with my family.
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
