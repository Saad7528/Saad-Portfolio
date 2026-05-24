import { motion, type Variants } from "framer-motion";
import Portrait from "@/assets/hero-portrait.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.09, duration: 0.9, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden noise"
    >
      {/* Grid + glow backdrop */}
      <div className="absolute inset-0 grid-bg -z-20" />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[520px] h-[520px] rounded-full bg-[var(--neon-cyan)] opacity-20 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-[var(--neon-magenta)] opacity-20 blur-[160px]" />
        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full bg-[var(--neon-violet)] opacity-15 blur-[120px]" />
      </div>
      {/* Vignette */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur-md px-3 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon-cyan)] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon-cyan)]" />
            </span>
            <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-foreground">
              Available for projects · 2026
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-[clamp(2.6rem,7vw,5.6rem)] font-semibold tracking-tight leading-[0.98]"
          >
            S.M. Amirul
            <br />
            Islam <span className="text-gradient-aurora  pr-3 italic font-light">Saad</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Developer{" "}
            <span className="text-foreground">tomorrow's interfaces</span> — where motion, code, and
            craft converge into experiences that feel inevitable.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3 text-sm font-medium"
            >
              <span className="absolute inset-0 rounded-full bg-aurora blur-lg opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
              Resume Banate hobe
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
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur-md px-6 py-3 text-sm font-medium hover:border-foreground/30 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {/* {[
                { k: "05+", v: "Years" },
                { k: "30+", v: "Projects" },
                { k: "12+", v: "Clients" },
              ].map((s) => (
                <div key={s.v} className="border-l border-border pl-4">
                  <div className="text-2xl font-semibold text-gradient-aurora">{s.k}</div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))} */}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute -inset-6 rounded-[2rem] bg-aurora opacity-30 blur-2xl" />
            <div className="absolute -inset-2 rounded-[1.8rem] bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)] opacity-70" />
            <div className="relative h-full w-full rounded-[1.6rem] overflow-hidden bg-card">
              <img
                src={Portrait}
                alt="Portrait of S. M. Amirul Islam Saad"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-cyan)]/10 via-transparent to-[var(--neon-magenta)]/10 mix-blend-overlay" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[var(--neon-cyan)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
