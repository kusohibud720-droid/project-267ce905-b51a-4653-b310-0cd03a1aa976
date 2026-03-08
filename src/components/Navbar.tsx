import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Частые вопросы" },
  { href: "#contact", label: "Контакты" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMobile = false) => {
    e.preventDefault();
    if (closeMobile) {
      setOpen(false);
    }
    const id = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, closeMobile ? 300 : 0);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ведущий<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Заявка
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href, true)}
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact", true)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center font-semibold"
              >
                Оставить заявку
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
