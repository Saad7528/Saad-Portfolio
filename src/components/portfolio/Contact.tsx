import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(null);
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title={<>Let's build the <span className="text-gradient-aurora italic pr-2 font-light">future</span>.</>}
      description="Have a project in mind, or just want to say hi? Drop a transmission."
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="p-6 rounded-3xl border border-border bg-card/40 backdrop-blur-md">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--neon-cyan)] mb-2">Email</div>
            <a href="mailto:hello@amirulsaad.dev" className="text-lg hover:text-gradient-aurora">Saad0174742@gmail.com</a>
          </div>
          <div className="p-6 rounded-3xl border border-border bg-card/40 backdrop-blur-md">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--neon-cyan)] mb-2">Location</div>
            <div className="text-lg">Thakurgaon, Bangladesh</div>
          </div>
          <div className="p-6 rounded-3xl border border-border bg-card/40 backdrop-blur-md">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--neon-cyan)] mb-3">Elsewhere</div>
            <div className="flex flex-wrap gap-4">
              {/* "GitHub", "LinkedIn", "Twitter", "Dribbble" */}
              {[{
                id:1,
                name: "Github",
                link: "https://github.com/Saad7528"
              },
            {
                id:2,
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/s-m-amirul-islam-saad"
              },
            {
                id:3,
                name: "Twitter",
                link: "https://git.com/saad"
              },
            {
                id:4,
                name: "Facebook",
                link: "https://www.facebook.com/s.m.amirulislam.saad"
              }].map((s) => (
                <a key={s.id} href={s.link} onClick={(e) => e.preventDefault()} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {s.name} ↗
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-border bg-card/40 backdrop-blur-md space-y-6 relative overflow-hidden"
          noValidate
        >
          <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[var(--neon-magenta)]/10 blur-3xl pointer-events-none" />
          <div className="relative grid sm:grid-cols-2 gap-6">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} />
          </div>
          <div className="relative">
            <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              placeholder="Tell me about your project…"
              className="w-full bg-transparent border-b border-border focus:border-[var(--neon-cyan)] outline-none py-2 placeholder-muted-foreground/60 transition-colors resize-none"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="relative flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3 text-sm font-medium"
            >
              <span className="absolute inset-0 rounded-full bg-aurora blur-lg opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
              Transmit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            {status === "sent" && (
              <span className="text-sm font-mono text-[var(--neon-cyan)]">// Signal received. I'll respond within 24h.</span>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label, value, onChange, type = "text", maxLength,
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        className="w-full bg-transparent border-b border-border focus:border-[var(--neon-cyan)] outline-none py-2 transition-colors"
      />
    </div>
  );
}
