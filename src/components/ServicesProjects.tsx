import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Building2",
    title: "Строительство",
    desc: "Возводим жилые и коммерческие объекты под ключ — от фундамента до отделки.",
    num: "01",
  },
  {
    icon: "Hammer",
    title: "Ремонт и отделка",
    desc: "Капитальный и косметический ремонт любой сложности. Сдаём точно в срок.",
    num: "02",
  },
  {
    icon: "Ruler",
    title: "Проектирование",
    desc: "Архитектурные проекты, дизайн интерьера и авторский надзор.",
    num: "03",
  },
  {
    icon: "TreePine",
    title: "Ландшафт",
    desc: "Благоустройство территорий, озеленение, дорожки и малые архитектурные формы.",
    num: "04",
  },
];

const projects = [
  {
    title: "Коттедж в Подмосковье",
    tag: "Строительство",
    year: "2024",
    bg: "bg-stone-700",
  },
  {
    title: "Апартаменты на Арбате",
    tag: "Ремонт",
    year: "2024",
    bg: "bg-stone-800",
  },
  {
    title: "Бизнес-центр «Меридиан»",
    tag: "Проектирование",
    year: "2023",
    bg: "bg-stone-700",
  },
];

export default function ServicesProjects() {
  return (
    <>
      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section id="услуги" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Что мы делаем</p>
              <h2
                className="font-display font-light leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F1EE" }}
              >
                Наши<br /><em className="italic">услуги</em>
              </h2>
            </div>
            <a
              href="#контакты"
              className="text-sm tracking-widest uppercase text-gold hover:text-gold-light transition-colors flex items-center gap-2"
            >
              Все услуги <Icon name="ArrowRight" size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(201,169,110,0.1)" }}>
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-10 transition-all duration-500 cursor-pointer"
                style={{ background: "#0D0C0A" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#141210"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#0D0C0A"}
              >
                <div
                  className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "#C9A96E" }}
                />
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ border: "1px solid rgba(201,169,110,0.3)" }}
                  >
                    <Icon name={s.icon} size={20} className="text-gold" />
                  </div>
                  <span
                    className="font-display text-5xl font-light leading-none"
                    style={{ color: "rgba(201,169,110,0.15)" }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  className="font-display font-semibold text-2xl mb-3 text-stone-100 group-hover:text-gold transition-colors duration-300"
                >
                  {s.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-xs tracking-widest uppercase text-stone-600 group-hover:text-gold transition-colors duration-300">
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────────────────── */}
      <section
        id="проекты"
        className="py-24 px-6 md:px-16"
        style={{ background: "#141210" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Портфолио</p>
            <h2
              className="font-display font-light leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F1EE" }}
            >
              Избранные<br /><em className="italic">проекты</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/5" }}
              >
                {/* Placeholder background with texture */}
                <div
                  className={`absolute inset-0 ${p.bg} transition-transform duration-700 group-hover:scale-105`}
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        rgba(201,169,110,0.03) 0px,
                        rgba(201,169,110,0.03) 1px,
                        transparent 1px,
                        transparent 12px
                      )
                    `,
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(13,12,10,0.95) 0%, rgba(13,12,10,0.3) 50%, transparent 100%)",
                  }}
                />

                {/* Number watermark */}
                <div
                  className="absolute top-6 right-6 font-display font-light leading-none select-none"
                  style={{ fontSize: "5rem", color: "rgba(201,169,110,0.08)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs tracking-widest uppercase px-3 py-1"
                      style={{ border: "1px solid rgba(201,169,110,0.4)", color: "#C9A96E" }}
                    >
                      {p.tag}
                    </span>
                    <span className="text-xs text-stone-500 tracking-widest">{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl text-stone-100 group-hover:text-gold transition-colors duration-300">
                    {p.title}
                  </h3>
                  <div
                    className="mt-4 flex items-center gap-2 text-xs tracking-widest uppercase text-stone-600 group-hover:text-gold transition-colors duration-300"
                  >
                    Смотреть <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
