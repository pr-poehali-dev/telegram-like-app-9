import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ─── HEADER ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{ background: "rgba(13,12,10,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,169,110,0.12)" }}
      >
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ border: "1.5px solid #C9A96E", transform: "rotate(45deg)" }}
          >
            <span
              className="font-display font-semibold text-gold text-sm"
              style={{ transform: "rotate(-45deg)", display: "block" }}
            >А</span>
          </div>
          <span className="font-display text-xl tracking-widest text-stone-100 group-hover:text-gold transition-colors duration-300">
            АРТ·СТРОЙ
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {["Услуги", "Проекты", "О нас", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest text-stone-400 hover:text-gold transition-colors duration-300 uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#контакты"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm tracking-widest uppercase transition-all duration-300"
          style={{ border: "1px solid #C9A96E", color: "#C9A96E" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "#C9A96E";
            (e.currentTarget as HTMLElement).style.color = "#0D0C0A";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#C9A96E";
          }}
        >
          Позвонить
        </a>

        <button
          className="md:hidden text-stone-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(13,12,10,0.97)" }}
        >
          {["Услуги", "Проекты", "О нас", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl text-stone-200 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
