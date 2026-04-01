import { useState } from "react";
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

const stats = [
  { value: "17", label: "лет\nна рынке" },
  { value: "430+", label: "объектов\nсдано" },
  { value: "98%", label: "клиентов\nдовольны" },
  { value: "60", label: "мастеров\nв штате" },
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

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  return (
    <div
      className="min-h-screen font-sans text-stone-200 overflow-x-hidden"
      style={{ background: "#0D0C0A" }}
    >
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

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <section id="о-нас" className="py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">О компании</p>
            <h2
              className="font-display font-light leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F1EE" }}
            >
              Строим с<br /><em className="italic">душой</em><br />с 2007 года
            </h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              АРТ·СТРОЙ — это команда профессионалов, которые относятся к каждому объекту как к собственному дому. Мы не строим «квадратные метры» — мы создаём пространства, в которых хочется жить и работать.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              За 17 лет работы мы выстроили процессы так, чтобы клиент получал максимум качества в оговорённые сроки и без скрытых доплат.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Фиксированная смета без неожиданных доплат",
                "Авторский надзор на каждом этапе",
                "Гарантия на все виды работ — 5 лет",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-6 h-6 flex-shrink-0 flex items-center justify-center"
                    style={{ border: "1px solid #C9A96E" }}
                  >
                    <Icon name="Check" size={12} className="text-gold" />
                  </div>
                  <span className="text-sm text-stone-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div
              className="aspect-square relative overflow-hidden"
              style={{ background: "#1E1B17" }}
            >
              {/* Decorative pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      rgba(201,169,110,0.04) 0px,
                      rgba(201,169,110,0.04) 1px,
                      transparent 1px,
                      transparent 40px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      rgba(201,169,110,0.04) 0px,
                      rgba(201,169,110,0.04) 1px,
                      transparent 1px,
                      transparent 40px
                    )
                  `,
                }}
              />

              {/* Central diamond */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-40 h-40 flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(201,169,110,0.3)",
                    transform: "rotate(45deg)",
                  }}
                >
                  <div
                    className="w-24 h-24 flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(201,169,110,0.15)",
                      background: "rgba(201,169,110,0.05)",
                    }}
                  >
                    <span
                      className="font-display font-light text-5xl text-gold"
                      style={{ transform: "rotate(-45deg)", display: "block" }}
                    >
                      А
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              {[
                "top-4 left-4",
                "top-4 right-4",
                "bottom-4 left-4",
                "bottom-4 right-4",
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-8 h-8`}
                  style={{ border: "1px solid rgba(201,169,110,0.2)" }}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 px-8 py-6"
              style={{ background: "#C9A96E" }}
            >
              <div className="font-display font-light text-4xl text-stone-950 leading-none">17</div>
              <div className="text-xs tracking-widest uppercase text-stone-800 mt-1">лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / CONTACT ───────────────────────────────────────── */}
      <section
        id="контакты"
        className="py-24 px-6 md:px-16"
        style={{
          background: `
            linear-gradient(135deg, #141210 0%, #1E1B17 50%, #141210 100%)
          `,
          borderTop: "1px solid rgba(201,169,110,0.12)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Начнём?</p>
            <h2
              className="font-display font-light leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F1EE" }}
            >
              Расскажите нам<br />о вашем <em className="italic text-gold">проекте</em>
            </h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Оставьте заявку — и наш менеджер свяжется с вами в течение 30 минут для бесплатной консультации.
            </p>
          </div>

          <div
            className="p-8 md:p-12"
            style={{
              background: "rgba(30,27,23,0.8)",
              border: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-500 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent px-4 py-3 text-stone-200 text-sm outline-none transition-all duration-300 placeholder:text-stone-700"
                  style={{ border: "1px solid rgba(201,169,110,0.2)" }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.6)"}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)"}
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-500 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent px-4 py-3 text-stone-200 text-sm outline-none transition-all duration-300 placeholder:text-stone-700"
                  style={{ border: "1px solid rgba(201,169,110,0.2)" }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.6)"}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)"}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs tracking-widest uppercase text-stone-500 mb-2">
                Опишите проект
              </label>
              <textarea
                rows={4}
                placeholder="Хочу построить загородный дом 200 м², бюджет — обсуждается..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent px-4 py-3 text-stone-200 text-sm outline-none transition-all duration-300 placeholder:text-stone-700 resize-none"
                style={{ border: "1px solid rgba(201,169,110,0.2)" }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.6)"}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)"}
              />
            </div>

            <button
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
              style={{ background: "#C9A96E", color: "#0D0C0A" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#E8C98A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#C9A96E"}
            >
              Отправить заявку
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Contacts row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12" style={{ borderTop: "1px solid rgba(201,169,110,0.12)" }}>
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: "MapPin", label: "Офис", value: "Москва, Пресненская наб. 12" },
              { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–19:00" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ border: "1px solid rgba(201,169,110,0.25)" }}
                >
                  <Icon name={c.icon} size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-stone-600 mb-1">{c.label}</div>
                  <div className="text-stone-300 text-sm">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(201,169,110,0.12)" }}
      >
        <span className="font-display text-lg tracking-widest text-stone-600">АРТ·СТРОЙ</span>
        <span className="text-xs text-stone-700 tracking-widest">© 2024 · Все права защищены</span>
        <div className="flex gap-6">
          {["ВКонтакте", "Telegram", "WhatsApp"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-widest uppercase text-stone-600 hover:text-gold transition-colors duration-300"
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
