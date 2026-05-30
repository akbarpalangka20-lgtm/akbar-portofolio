import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES } from "../data/gallery";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="gallery"
      className="relative px-6 sm:px-10 lg:px-20 py-24 lg:py-32"
      data-testid="gallery-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-xl">
            <div
              className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Personal collection
            </div>
            <h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1]"
              style={{ color: "var(--text-primary)" }}
            >
              A small <span className="gradient-text">art shrine</span>.
            </h2>
            <p
              className="text-sm sm:text-base mt-4 max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Favorite anime, waifu and fanart illustrations I've been collecting. A quiet break between code and craft.
            </p>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2" data-testid="gallery-filters">
            {GALLERY_CATEGORIES.map((cat) => {
              const active = cat === filter;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  data-testid={`gallery-filter-${cat.toLowerCase()}`}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.14em] transition-colors`}
                  style={{
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    border: "1px solid var(--border)",
                    background: active
                      ? "linear-gradient(120deg, rgba(59,130,246,0.22), rgba(168,85,247,0.26))"
                      : "transparent",
                    boxShadow: active
                      ? "0 8px 24px -10px rgba(168,85,247,0.45)"
                      : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Masonry grid using CSS columns */}
        <div
          className="gap-5 [column-fill:_balance]"
          style={{
            columnCount: "1",
            columnGap: "1.25rem",
          }}
        >
          <style>{`
            @media (min-width: 640px) { .gallery-masonry { column-count: 2 !important; } }
            @media (min-width: 1024px) { .gallery-masonry { column-count: 3 !important; } }
          `}</style>
          <div className="gallery-masonry" data-testid="gallery-grid">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.figure
                  key={g.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.55,
                    delay: (i % 6) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative mb-5 break-inside-avoid rounded-2xl overflow-hidden glass cursor-pointer transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(168,85,247,0.45)]"
                  onClick={() => setLightbox(g)}
                  data-testid={`gallery-item-${g.id}`}
                  data-cursor="hover"
                >
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.78))",
                    }}
                    aria-hidden
                  />
                  {/* Caption */}
                  <figcaption
                    className="absolute left-4 right-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="font-display text-base text-white">
                      {g.title}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mt-0.5">
                      {g.character} · {g.category}
                    </div>
                  </figcaption>
                  {/* Subtle category chip */}
                  <span
                    className="absolute top-3 left-3 glass px-2 py-0.5 rounded-full text-[10px] font-mono"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {g.category}
                  </span>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {items.length === 0 && (
          <div
            className="mt-8 text-center font-mono text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <ImageIcon className="inline mr-1.5 -mt-0.5" size={12} />
            No artwork in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12"
            style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(14px)" }}
            data-testid="gallery-lightbox"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-strong rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setLightbox(null)}
                data-testid="gallery-lightbox-close"
                aria-label="Close"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass flex items-center justify-center hover:border-white/30"
                style={{ color: "var(--text-primary)" }}
              >
                <X size={16} />
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[78vh] object-contain bg-black/40"
              />
              <div className="px-5 py-4 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
                  {lightbox.title}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] mt-1" style={{ color: "var(--text-muted)" }}>
                  {lightbox.character} · {lightbox.category}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
