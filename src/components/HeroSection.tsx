import Icon from "@/components/ui/icon";

const stats = [
  { value: "17", label: "лет\nна рынке" },
  { value: "430+", label: "объектов\nсдано" },
  { value: "98%", label: "клиентов\nдовольны" },
  { value: "60", label: "мастеров\nв штате" },
];

export default function HeroSection() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-16 pt-32"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,169,110,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(201,169,110,0.04) 0%, transparent 50%),
            #0D0C0A
          `,
        }}
      >
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/4 h-full w-px"
            style={{ background: "rgba(201,169,110,0.06)" }}
          />
          <div
            className="absolute top-0 right-1/4 h-full w-px"
            style={{ background: "rgba(201,169,110,0.06)" }}
          />
          <div
            className="absolute left-0 top-1/3 w-full h-px"
            style={{ background: "rgba(201,169,110,0.06)" }}
          />
        </div>

        {/* Year badge */}
        <div className="absolute top-28 right-8 md:right-16 flex flex-col items-end opacity-0 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
          <span className="font-display text-7xl md:text-9xl font-light text-gold opacity-10 leading-none select-none">
            2007
          </span>
          <span className="text-xs tracking-[0.3em] text-stone-500 uppercase mt-1">с нами с</span>
        </div>

        {/* Main headline */}
        <div className="relative z-10 max-w-5xl">
          <p
            className="text-xs tracking-[0.4em] uppercase text-gold mb-6 opacity-0 animate-slide-right"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Строительная компания · Москва
          </p>

          <h1
            className="font-display font-light leading-[0.92] opacity-0 animate-fade-up"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              animationDelay: "0.3s",
              animationFillMode: "forwards",
              color: "#F5F1EE",
            }}
          >
            Строим
            <br />
            <em className="italic" style={{ color: "#C9A96E" }}>пространство</em>
            <br />
            вашей жизни
          </h1>

          <div
            className="h-px bg-gold mt-10 mb-10 opacity-0 animate-line-grow"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards", maxWidth: "480px" }}
          />

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <a
              href="#контакты"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
              style={{ background: "#C9A96E", color: "#0D0C0A" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#E8C98A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#C9A96E"}
            >
              Получить смету
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#проекты"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-stone-400 hover:text-gold transition-colors duration-300"
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: "currentColor" }}
              />
              Наши проекты
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-stone-600">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent" />
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────── */}
      <section
        className="py-16 px-6 md:px-16"
        style={{ borderTop: "1px solid rgba(201,169,110,0.12)", borderBottom: "1px solid rgba(201,169,110,0.12)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div
                className="font-display font-light leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#C9A96E" }}
              >
                {s.value}
              </div>
              <div
                className="text-xs tracking-widest uppercase text-stone-500 whitespace-pre-line leading-relaxed"
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
