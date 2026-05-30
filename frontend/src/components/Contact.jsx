import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Check } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { PROFILE } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SOCIALS = [
  { id: "github", label: "GitHub", icon: Github, href: PROFILE.socials.github },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: PROFILE.socials.linkedin },
  { id: "email", label: "Email", icon: Mail, href: PROFILE.socials.email },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2400);
  };

  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 lg:px-20 py-24 lg:py-32"
      data-testid="contact-section"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-muted)" }}>
            04 — Contact
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1] mb-6" style={{ color: "var(--text-primary)" }}>
            Let's build something <span className="gradient-text">memorable</span>.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            Got a project, an idea, or just want to nerd out about ML and clean interfaces? My inbox is open.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`social-${s.id}`}
                  className="group relative w-12 h-12 rounded-full glass flex items-center justify-center transition-transform hover:-translate-y-1 hover:border-white/25"
                  style={{ color: "var(--text-primary)" }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span className="tip">{s.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            Reply within 24h · GMT+0
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SpotlightCard className="p-6 sm:p-8" data-cursor="hover">
            <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Your name"
                  testId="contact-name-input"
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="you@domain.com"
                  type="email"
                  testId="contact-email-input"
                />
              </div>
              <Field
                label="Message"
                value={form.message}
                onChange={onChange("message")}
                placeholder="Tell me about your project…"
                textarea
                testId="contact-message-input"
              />
              <button
                type="submit"
                disabled={sent}
                data-testid="contact-submit-button"
                className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    Message sent
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={15} strokeWidth={2.2} />
                  </>
                )}
              </button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", textarea, testId }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block" style={{ color: "var(--text-muted)" }}>
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          data-testid={testId}
          className="w-full bg-transparent rounded-xl px-4 py-3 text-sm outline-none border focus:border-white/30 transition-colors resize-none"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          data-testid={testId}
          className="w-full bg-transparent rounded-xl px-4 py-3 text-sm outline-none border focus:border-white/30 transition-colors"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
      )}
    </label>
  );
}
