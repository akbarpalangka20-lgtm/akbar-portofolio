import { motion } from "framer-motion";
import { Trophy, Code2, GitBranch } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { ACHIEVEMENTS, PROFILE } from "../data/portfolio";

const icons = [Trophy, Code2, GitBranch];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 sm:px-10 lg:px-20 py-24 lg:py-32"
      data-testid="about-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-muted)" }}>
            01 — About
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1] mb-6" style={{ color: "var(--text-primary)" }}>
            A developer who treats code like <span className="gradient-text">craft</span>.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {PROFILE.bio}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={a.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <SpotlightCard
                  className="p-6 sm:p-7"
                  data-testid={`achievement-card-${i}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(59,130,246,0.22), rgba(168,85,247,0.28))",
                        border: "1px solid var(--border-strong)",
                        boxShadow: "0 8px 24px -10px rgba(168,85,247,0.45)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.9} className="achievement-icon" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <div className="font-display text-5xl sm:text-6xl mb-2 gradient-text">
                    {a.value}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {a.label}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {a.hint}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
