import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            МОСТЫ ПИТЕРА
          </a>
          <div className="flex space-x-8">
            <a href="#champions" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Маршрут
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О походе
            </a>
            <a href="#quote" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Итог
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            {/* Corner tag */}
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Костов Владислав · 9Г
            </div>
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              МОСТЫ
              <br />
              <span className="text-red-600">ПИТЕРА</span>
            </h1>
            <p className="text-xl max-w-xl text-neutral-600">
              Один день. Один маршрут. Двадцать один мост Санкт-Петербурга — пешком, вживую, руками.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mt-12">
              <div>
                <div className="text-6xl font-bold tracking-tighter leading-none">21</div>
                <div className="text-sm uppercase tracking-widest text-neutral-500 mt-1">посещённый объект</div>
              </div>
              <div className="w-px bg-black"></div>
              <div>
                <div className="text-6xl font-bold tracking-tighter leading-none text-red-600">1</div>
                <div className="text-sm uppercase tracking-widest text-neutral-500 mt-1">весь день в пути</div>
              </div>
            </div>
          </div>

          {/* Map Visual */}
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-neutral-900 overflow-hidden">
              {/* Stylized map of St. Petersburg center */}
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect width="400" height="400" fill="#111111"/>

                {/* Water (Neva) */}
                <path d="M40,180 Q120,160 200,175 Q280,190 360,170" stroke="#1a3a5c" strokeWidth="28" fill="none" opacity="0.7"/>
                <path d="M100,220 Q150,210 200,215 Q250,220 300,210" stroke="#1a3a5c" strokeWidth="16" fill="none" opacity="0.5"/>

                {/* Streets grid */}
                <line x1="80" y1="100" x2="80" y2="320" stroke="#222" strokeWidth="8"/>
                <line x1="160" y1="80" x2="160" y2="340" stroke="#222" strokeWidth="8"/>
                <line x1="240" y1="80" x2="240" y2="340" stroke="#222" strokeWidth="8"/>
                <line x1="320" y1="100" x2="320" y2="320" stroke="#222" strokeWidth="8"/>
                <line x1="50" y1="130" x2="350" y2="130" stroke="#222" strokeWidth="8"/>
                <line x1="50" y1="250" x2="350" y2="250" stroke="#222" strokeWidth="8"/>
                <line x1="50" y1="310" x2="350" y2="310" stroke="#222" strokeWidth="8"/>

                {/* Route line — bright red */}
                <polyline
                  points="60,290 80,260 100,240 120,220 140,195 160,185 180,178 200,175 220,178 240,182 260,190 280,195 300,200 320,195 340,185 360,180"
                  stroke="#dc2626"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="6,3"
                />

                {/* Bridge points */}
                {[
                  [80,260],[120,220],[160,185],[200,175],[240,182],[280,195],[320,195]
                ].map(([cx,cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="6" fill="#dc2626"/>
                    <circle cx={cx} cy={cy} r="10" fill="none" stroke="#dc2626" strokeWidth="1.5" opacity="0.5"/>
                  </g>
                ))}

                {/* Labels */}
                <text x="200" y="360" textAnchor="middle" fill="#555" fontSize="11" fontFamily="monospace" letterSpacing="3">МАРШРУТ · ЦЕНТР СПБ</text>
                <text x="200" y="30" textAnchor="middle" fill="#dc2626" fontSize="13" fontFamily="monospace" letterSpacing="4" fontWeight="bold">21 МОСТ</text>
              </svg>
              <div className="absolute bottom-4 right-4 text-white text-xs font-mono opacity-40">СПБ / 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridges List Section */}
      <section id="champions" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">МАРШРУТ</h2>
          <p className="text-neutral-400 uppercase tracking-widest text-sm mb-12">21 мост · весь день в пути</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-neutral-800">
            {[
              { n: "01", name: "Нева мост" },
              { n: "02", name: "Троицкий мост" },
              { n: "03", name: "Эрмитажный мост" },
              { n: "04", name: "Поцелуев мост" },
              { n: "05", name: "Зелёный мост" },
              { n: "06", name: "Певческий мост" },
              { n: "07", name: "Краснофлотский мост" },
              { n: "08", name: "Мост Декабристов" },
              { n: "09", name: "Матвеев мост" },
              { n: "10", name: "Театральный мост" },
              { n: "11", name: "Красный мост" },
              { n: "12", name: "Синий мост" },
              { n: "13", name: "Мало-Конюшенный мост" },
              { n: "14", name: "Почтамтский мост" },
              { n: "15", name: "1-й Садовый мост" },
              { n: "16", name: "1-й Инженерный мост" },
              { n: "17", name: "2-й Садовый мост" },
              { n: "18", name: "Прачечный мост" },
              { n: "19", name: "Большой Конюшенный мост" },
              { n: "20", name: "Нижний Лебяжий мост" },
              { n: "21", name: "Верхний Лебяжий мост" },
            ].map(({ n, name }) => (
              <div
                key={n}
                className="group flex items-center gap-6 border-b border-r border-neutral-800 px-6 py-5 hover:bg-red-600 transition-colors duration-200 cursor-default"
              >
                <span className="text-2xl font-bold text-neutral-700 group-hover:text-white/60 transition-colors w-10 shrink-0">
                  {n}
                </span>
                <span className="text-lg font-semibold tracking-tight group-hover:text-white transition-colors">
                  {name}
                </span>
                <Icon name="ArrowRight" size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champions Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-2">ЧЕМПИОНЫ</h2>
          <p className="text-neutral-400 uppercase tracking-widest text-sm mb-12">Самое интересное</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black">
            {/* Photo */}
            <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
              <img
                src="https://cdn.poehali.dev/projects/6e2a49b9-f915-4a92-bcd5-a93cb69bdc47/bucket/1370ffd7-114d-47da-aea0-40f82472eab1.png"
                alt="Костов Владислав на фоне разводного моста"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm uppercase tracking-widest">Костов Владислав · 9Г</p>
                <p className="text-white/60 text-xs mt-1">На фоне разводного моста · СПБ</p>
              </div>
            </div>

            {/* 3 cards */}
            <div className="flex flex-col divide-y divide-black border-t border-black lg:border-t-0 lg:border-l">
              {/* Гигант */}
              <div className="group flex gap-6 p-8 hover:bg-red-600 transition-colors duration-200">
                <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon name="Maximize2" size={22} className="text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-red-600 group-hover:text-white/70 mb-1 transition-colors">Гигант</div>
                  <h3 className="text-2xl font-bold tracking-tighter mb-1 group-hover:text-white transition-colors">Синий мост</h3>
                  <div className="text-4xl font-bold text-neutral-200 group-hover:text-white/20 mb-2 transition-colors">97 м</div>
                  <p className="text-neutral-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                    Самый широкий мост Петербурга и один из самых широких в мире — многие горожане не замечают, что идут по мосту.
                  </p>
                </div>
              </div>

              {/* Ветеран */}
              <div className="group flex gap-6 p-8 hover:bg-red-600 transition-colors duration-200">
                <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon name="Clock" size={22} className="text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-red-600 group-hover:text-white/70 mb-1 transition-colors">Ветеран</div>
                  <h3 className="text-2xl font-bold tracking-tighter mb-1 group-hover:text-white transition-colors">Эрмитажный мост</h3>
                  <div className="text-4xl font-bold text-neutral-200 group-hover:text-white/20 mb-2 transition-colors">1763</div>
                  <p className="text-neutral-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                    Самый старый сохранившийся каменный мост Петербурга. Стоит у стен Эрмитажа со времён Екатерины II.
                  </p>
                </div>
              </div>

              {/* Шедевр */}
              <div className="group flex gap-6 p-8 hover:bg-red-600 transition-colors duration-200">
                <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon name="Sparkles" size={22} className="text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-red-600 group-hover:text-white/70 mb-1 transition-colors">Шедевр</div>
                  <h3 className="text-2xl font-bold tracking-tighter mb-1 group-hover:text-white transition-colors">Троицкий мост</h3>
                  <div className="text-4xl font-bold text-neutral-200 group-hover:text-white/20 mb-2 transition-colors">582 м</div>
                  <p className="text-neutral-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                    Самый ажурный мост города. Французский модерн, узорчатые решётки и вид на Петропавловскую крепость.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О ПОХОДЕ</h2>
              <div className="aspect-[4/5] bg-neutral-900 relative mb-8 md:mb-0 overflow-hidden">
                {/* Decorative bridge silhouette */}
                <svg viewBox="0 0 300 375" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="375" fill="#111"/>
                  {/* Bridge arch */}
                  <path d="M20,280 Q150,100 280,280" stroke="#dc2626" strokeWidth="3" fill="none"/>
                  <path d="M20,280 Q150,140 280,280" stroke="#444" strokeWidth="1.5" fill="none"/>
                  {/* Vertical cables */}
                  {[60,90,120,150,180,210,240].map((x, i) => {
                    const y = 280 - Math.round(60 * Math.sin(((x - 20) / 260) * Math.PI));
                    return <line key={i} x1={x} y1={280} x2={x} y2={y} stroke="#555" strokeWidth="1"/>;
                  })}
                  {/* Road */}
                  <line x1="20" y1="280" x2="280" y2="280" stroke="#333" strokeWidth="8"/>
                  <text x="150" y="340" textAnchor="middle" fill="#444" fontSize="11" fontFamily="monospace" letterSpacing="2">САНКТ-ПЕТЕРБУРГ</text>
                  <text x="150" y="50" textAnchor="middle" fill="#dc2626" fontSize="40" fontFamily="sans-serif" fontWeight="bold">21</text>
                  <text x="150" y="80" textAnchor="middle" fill="#666" fontSize="11" fontFamily="monospace" letterSpacing="2">МОСТОВ</text>
                </svg>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Один день — весь маршрут по центру Санкт-Петербурга. 21 мост: деревянные, каменные, разводные, ажурные.
              </p>
              <p className="mb-6">
                Это не просто экскурсия по карте. Каждый мост — это отдельная история: архитектура, эпоха, люди, которые его строили. Мосты Петербурга отражают 300 лет городской истории.
              </p>
              <p className="mb-6">
                Маршрут охватывает Неву, Фонтанку, Мойку и Канал Грибоедова — главные водные артерии города.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Маршрут</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>Нева</li>
                    <li>Фонтанка</li>
                    <li>Мойка</li>
                    <li>Канал Грибоедова</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Факты</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>21 объект</li>
                    <li>Весь день в пути</li>
                    <li>3 чемпиона</li>
                    <li>300 лет истории</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl font-bold tracking-tighter leading-none mb-12 opacity-20">"</div>
            <blockquote className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-12 -mt-16">
              Мосты — это не просто конструкции, это история, которую я потрогал руками.
            </blockquote>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl uppercase tracking-widest mb-2">Костов Владислав</p>
            <p className="text-sm uppercase tracking-widest opacity-70">9Г · Санкт-Петербург · 2024</p>
          </div>
        </div>
      </section>

      {/* Footer / Thanks */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8">
            СПАСИБО
          </h2>
          <p className="text-2xl uppercase tracking-widest text-neutral-400 mb-2">За внимание</p>
          <p className="text-sm uppercase tracking-widest text-neutral-600 mt-8">
            Костов Владислав · 9Г · Мосты Питера
          </p>
        </div>
      </section>
    </main>
  );
}