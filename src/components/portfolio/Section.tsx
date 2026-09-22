import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-28 md:py-36 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          {eyebrow && (
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-aurora" />
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-[var(--neon-cyan)]">
                {eyebrow}
              </p>
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
