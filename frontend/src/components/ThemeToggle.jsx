import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ theme, toggle }) {
  const isDark = theme === "dark";
  return (
    <button
      data-testid="theme-toggle-button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="group relative w-10 h-10 rounded-full glass flex items-center justify-center hover:border-white/20 transition-colors"
      style={{ borderColor: "var(--border)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? (
            <Moon size={16} strokeWidth={1.8} />
          ) : (
            <Sun size={16} strokeWidth={1.8} />
          )}
        </motion.span>
      </AnimatePresence>
      <span className="tip">{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
