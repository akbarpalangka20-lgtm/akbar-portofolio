import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { PROJECTS } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectsGrid({ compact = false }) {
  const items = compact ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((p, i) => (
        <motion.article
          key={p.id}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SpotlightCard className="overflow-hidden h-full flex flex-col" data-testid={`project-card-${p.id}`}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5))" }}
                aria-hidden
              />
              <div className="absolute top-3 left-3 glass px-2.5 py-1 rounded-full text-[10px] font-mono"
                style={{ color: "var(--text-primary)" }}>
                /{p.id}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-display text-xl mb-2" style={{ color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-[10px] font-mono"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`project-github-${p.id}`}
                  className="btn-glass inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                >
                  <Github size={13} />
                  GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`project-demo-${p.id}`}
                  className="btn-gradient inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                >
                  Live Demo
                  <ArrowUpRight size={13} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </motion.article>
      ))}
    </div>
  );
}
