export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] glow-cyan" />
          <div className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} — S. M. Amirul Islam Saad
          </div>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Designed & built from <span className="text-foreground">Thakurgaon</span> ↗
        </div>
      </div>
    </footer>
  );
}
