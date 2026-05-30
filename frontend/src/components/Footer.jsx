import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PROFILE } from "../data/portfolio";

const SOCIALS = [
  { id: "github", label: "GitHub", icon: Github, href: PROFILE.socials.github },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: PROFILE.socials.linkedin },
  { id: "email", label: "Email", icon: Mail, href: PROFILE.socials.email },
];

export default function Footer() {
  return (
    <footer
      className="relative px-6 sm:px-10 lg:px-20 pt-16 pb-12 border-t"
      style={{ borderColor: "var(--border)" }}
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-display text-2xl mb-1" style={{ color: "var(--text-primary)" }}>
            akbar<span className="gradient-text">.dev</span>
          </div>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            Designed & built with care · © {new Date().getFullYear()}
          </p>
        </div>

        <nav className="flex items-center gap-6 text-sm" style={{ color: "var(--text-secondary)" }}>
          <Link to="/" data-testid="footer-overview-link" className="hover:text-white transition-colors">Overview</Link>
          <Link to="/projects" data-testid="footer-projects-link" className="hover:text-white transition-colors">Projects</Link>
          <a
            href="#contact"
            data-testid="footer-contact-link"
            className="hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-testid={`footer-social-${s.id}`}
                className="group relative w-10 h-10 rounded-full glass flex items-center justify-center transition-transform hover:-translate-y-1 floaty"
                style={{ color: "var(--text-primary)", animationDelay: `${Math.random() * -3}s` }}
              >
                <Icon size={15} strokeWidth={1.8} />
                <span className="tip">{s.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
