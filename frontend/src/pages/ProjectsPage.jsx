import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectsGrid from "../components/ProjectsGrid";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsPage() {
  return (
    <main
      className="relative px-6 sm:px-10 lg:px-20 pt-36 pb-28 min-h-screen"
      data-testid="projects-page"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-14 flex flex-col gap-6"
        >
          <Link
            to="/"
            data-testid="projects-back-link"
            className="font-mono text-xs inline-flex items-center gap-1.5 hover:text-white transition-colors w-fit"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={12} /> back to overview
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-muted)" }}>
                Selected work
              </div>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1]"
                style={{ color: "var(--text-primary)" }}
              >
                Projects that <span className="gradient-text">earned</span> their pixels.
              </h1>
            </div>
            <p className="text-sm sm:text-base max-w-sm" style={{ color: "var(--text-secondary)" }}>
              A snapshot of things I've built — each one a real, working product or experiment.
            </p>
          </div>
        </motion.div>

        <ProjectsGrid />
      </div>
    </main>
  );
}
