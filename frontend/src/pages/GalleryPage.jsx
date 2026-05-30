import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function GalleryPage() {
  return (
    <main className="relative pt-32 min-h-screen" data-testid="gallery-page">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="px-6 sm:px-10 lg:px-20 pt-4"
      >
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            data-testid="gallery-back-link"
            className="font-mono text-xs inline-flex items-center gap-1.5 hover:text-white transition-colors w-fit"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={12} /> back to overview
          </Link>
        </div>
      </motion.div>
      <Gallery />
    </main>
  );
}
