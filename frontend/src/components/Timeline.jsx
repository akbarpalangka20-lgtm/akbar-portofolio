import { motion } from "framer-motion";
import { TIMELINE } from "../data/portfolio";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative px-6 sm:px-10 lg:px-20 py-24 lg:py-32"
      data-testid="timeline-section"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={item}
          className="mb-16 max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-muted)" }}>
            03 — Journey
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1]" style={{ color: "var(--text-primary)" }}>
            From first commit to <span className="gradient-text">cinematic</span> craft.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-px" aria-hidden />
          <div className="space-y-12">
            {TIMELINE.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.year}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={item}
                  className="relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start"
                  data-testid={`timeline-item-${i}`}
                >
                  <div className={`pl-12 sm:pl-0 ${left ? "sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
                    <div className="font-mono text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                      {t.year}
                    </div>
                    <h3 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>
                      {t.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {t.body}
                    </p>
                  </div>
                  <span
                    className="timeline-dot absolute left-4 sm:left-1/2 top-1.5 w-3 h-3 rounded-full -translate-x-1/2"
                    aria-hidden
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
