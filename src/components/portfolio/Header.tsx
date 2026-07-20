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
        <a href="#hero" onClick={(e) => go(e, "#hero")} className="flex items-center gap-2">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-md bg-aurora blur-md opacity-70" />
            <div className="absolute inset-0 rounded-md bg-aurora" />
            <div className="absolute inset-[2px] rounded-[5px] bg-background flex items-center justify-center text-[11px] font-mono font-bold text-gradient-aurora">
              SA
            </div>
          </div>
          <span className="text-sm font-medium tracking-tight">
            Amirul<span className="text-muted-foreground">.dev</span>
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
