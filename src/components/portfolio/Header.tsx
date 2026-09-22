import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e) => go(e, "#hero")} className="group flex items-center gap-2.5">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-aurora blur-md opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            <div className="relative w-full h-full rounded-xl bg-gradient-to-tr from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-magenta)] p-[1.5px] transition-transform duration-500 group-hover:rotate-6">
              <div className="w-full h-full rounded-[10px] bg-background/95 backdrop-blur-sm flex items-center justify-center">
                <span className="text-[12px] font-black tracking-tighter bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-magenta)] bg-clip-text text-transparent select-none font-mono">
                  S<span className="text-[var(--neon-magenta)]">A</span>
                </span>
              </div>
            </div>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center">
            Saad<span className="text-gradient-aurora font-medium ml-0.5">.dev</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 p-1 rounded-full border border-border bg-card/90">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="px-3.5 py-1.5 text-[12.5px] text-muted-foreground hover:text-foreground rounded-full transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => go(e, "#contact")}
          className="hidden md:inline-flex group relative items-center gap-2 text-[12.5px] font-medium rounded-full px-4 py-2 text-primary-foreground bg-aurora"
        >
          <span className="absolute inset-0 rounded-full bg-aurora blur-md opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
          Hire me
          <span className="w-1.5 h-1.5 rounded-full bg-background/60" />
        </a>

        <button
          aria-label="Menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-px bg-foreground mb-1.5" />
          <div className="w-5 h-px bg-foreground" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/98">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="block text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
