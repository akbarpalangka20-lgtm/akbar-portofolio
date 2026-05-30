import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROFILE } from "../data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const navigate = useNavigate();
  const goContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-20 pt-32 pb-24"
      data-testid="hero-section"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center"
      >
        <div>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-mono mb-8"
            style={{ color: "var(--text-secondary)" }}
            data-testid="hero-badge"
          >
            <Sparkles size={12} className="text-blue-400" />
            <span>Open for new projects · 2025</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]"
            style={{ color: "var(--text-primary)" }}
            data-testid="hero-title"
          >
            Hi, I'm <span className="gradient-text">{PROFILE.name}</span>
            <br />
            <span style={{ color: "var(--text-secondary)" }}>{PROFILE.title}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            data-testid="hero-tagline"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/projects")}
              data-testid="hero-view-projects-button"
              className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              View Projects
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </button>
            <button
              onClick={goContact}
              data-testid="hero-contact-button"
              className="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-6 text-xs font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Available worldwide</span>
            </div>
            <div className="hidden sm:block">React · Next.js · Python · ML</div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto lg:mx-0"
          data-testid="hero-avatar-wrap"
        >
          <div className="absolute -inset-6 rounded-[40px] opacity-60 blur-3xl"
            style={{ background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))" }}
          />
          <div className="relative glass-strong rounded-[28px] p-3 floaty">
            <img
              src={PROFILE.avatar}
              alt="Akbar avatar"
              className="rounded-[22px] w-full max-w-[360px] object-cover"
              loading="eager"
              data-testid="hero-avatar"
            />
            <div className="absolute -bottom-4 -left-4 glass-strong px-3 py-2 rounded-xl text-xs font-mono"
              style={{ color: "var(--text-secondary)" }}>
              <span className="gradient-text font-semibold">~/akbar</span> · building
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
