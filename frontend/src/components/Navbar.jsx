import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "overview", label: "Overview", to: "/", section: "hero" },
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "contact", label: "Contact", to: "/", section: "contact" },
];

export default function Navbar({ theme, toggle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on home page
  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = ["hero", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const getActive = (item) => {
    if (item.to === "/projects") return location.pathname === "/projects";
    if (location.pathname !== "/") return false;
    return activeSection === item.section;
  };

  const handleClick = (e, item) => {
    if (item.to === "/projects") return; // normal Link navigation
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item.section } });
    } else {
      const el = document.getElementById(item.section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        data-testid="floating-navbar"
        className={`glass-strong flex items-center gap-2 px-2 py-2 rounded-full transition-all duration-500 ${
          scrolled ? "shadow-[0_18px_60px_-20px_rgba(99,102,241,0.45)]" : ""
        }`}
        style={{ minWidth: "min(560px, 100%)" }}
      >
        <Link
          to="/"
          data-testid="nav-brand"
          className="pl-3 pr-2 font-display text-base tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          akbar<span className="gradient-text">.</span>
        </Link>
        <LayoutGroup>
          <nav className="flex-1 flex items-center justify-center gap-1">
            {NAV.map((item) => {
              const active = getActive(item);
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  data-testid={`nav-${item.id}`}
                  onClick={(e) => handleClick(e, item)}
                  className={`pill-nav-item relative px-4 py-1.5 rounded-full text-sm font-medium ${
                    active ? "active" : ""
                  }`}
                  style={{ color: active ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="pill-nav-bg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>
        <ThemeToggle theme={theme} toggle={toggle} />
      </div>
    </motion.header>
  );
}
