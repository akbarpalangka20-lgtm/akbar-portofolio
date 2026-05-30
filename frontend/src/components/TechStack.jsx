import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { TECH_STACK } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative px-6 sm:px-10 lg:px-20 py-24 lg:py-32"
      data-testid="tech-stack-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="max-w-xl">
            <div
              className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              02 — Stack
            </div>
            <h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1]"
              style={{ color: "var(--text-primary)" }}
            >
              Tools I use to <span className="gradient-text">build & ship</span>.
            </h2>
          </div>
          <p
            className="text-sm sm:text-base max-w-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            A pragmatic set — from low-level Python to highly polished React frontends. Each one earned its place by surviving real projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <SpotlightCard
                className="p-5 h-full flex flex-col"
                data-testid={`tech-card-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(168,85,247,0.14))",
                      border: "1px solid var(--border-strong)",
                    }}
                  >
                    <img
                      src={t.iconUrl}
                      alt={`${t.name} logo`}
                      loading="lazy"
                      className={`w-6 h-6 object-contain ${t.invertOnDark ? "dark-invert" : ""}`}
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.category}
                  </span>
                </div>
                <div
                  className="font-display text-2xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.name}
                </div>
                <div
                  className="font-mono text-xs mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.level}% proficiency
                </div>
                <div className="mt-auto progress-track">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="progress-fill"
                  />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
