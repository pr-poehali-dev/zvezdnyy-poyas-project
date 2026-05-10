import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface BridgeDetail {
  id: string;
  tag: string;
  name: string;
  stat: string;
  statLabel: string;
  description: string;
  icon: string;
  image?: string;
  facts: string[];
  year?: string;
  length?: string;
  river?: string;
}

const BRIDGE_DETAILS: BridgeDetail[] = [
  {
    id: "siniy",
    tag: "Гигант",
    name: "Синий мост",
    stat: "97 м",
    statLabel: "ширина",
    description: "Самый широкий мост Петербурга и один из самых широких в мире — многие горожане не замечают, что идут по мосту.",
    icon: "Maximize2",
    image: "https://cdn.poehali.dev/projects/6e2a49b9-f915-4a92-bcd5-a93cb69bdc47/bucket/d65a9764-78b3-423c-bb3e-7c42ac6fa381.png",
    facts: [
      "Синий мост перекинут через реку Мойку на Исаакиевской площади.",
      "Его ширина — 97,3 метра, что делает его одним из самых широких мостов в мире.",
      "Мост настолько широк, что воспринимается как часть площади, а не как мост.",
      "Построен в 1818 году по проекту Вильяма Гесте.",
      "Своё название получил по цвету окраски — мост традиционно красят в синий цвет.",
      "На опоре моста закреплён футшток — исторический водомерный столб для измерения уровня воды в Мойке.",
    ],
    year: "1818",
    length: "34 м",
    river: "Мойка",
  },
  {
    id: "ermitazhny",
    tag: "Ветеран",
    name: "Эрмитажный мост",
    stat: "1763",
    statLabel: "год постройки",
    description: "Самый старый сохранившийся каменный мост Петербурга. Стоит у стен Эрмитажа со времён Екатерины II.",
    icon: "Clock",
    image: "https://cdn.poehali.dev/projects/6e2a49b9-f915-4a92-bcd5-a93cb69bdc47/bucket/63473aaf-ebf9-4b21-bcde-066f6747d54a.png",
    facts: [
      "Эрмитажный мост — старейший из сохранившихся каменных мостов Петербурга.",
      "Перекинут через Зимнюю канавку между Эрмитажем и Эрмитажным театром.",
      "Построен в 1763–1766 годах во время правления Екатерины II.",
      "Мост однопролётный, с массивными гранитными устоями.",
      "Рядом с мостом — знаменитая Лоджия Рафаэля и галерея Эрмитажа.",
      "В народе это место называют «Мостом вздохов» по аналогии с венецианским.",
    ],
    year: "1763",
    length: "21 м",
    river: "Зимняя канавка",
  },
  {
    id: "troickiy",
    tag: "Шедевр",
    name: "Троицкий мост",
    stat: "582 м",
    statLabel: "длина",
    description: "Самый ажурный мост города. Французский модерн, узорчатые решётки и вид на Петропавловскую крепость.",
    icon: "Sparkles",
    image: "https://cdn.poehali.dev/projects/6e2a49b9-f915-4a92-bcd5-a93cb69bdc47/bucket/70cfcced-ce3d-40b1-8a3d-b9eaa5a658be.png",
    facts: [
      "Троицкий мост — один из самых длинных разводных мостов Петербурга.",
      "Длина моста составляет 582 метра, он перекинут через Неву.",
      "Построен в 1897–1903 годах французской компанией по проекту в стиле модерн.",
      "Торжественное открытие состоялось в 1903 году в присутствии Николая II.",
      "Ажурные чугунные решётки и фонари — образец художественного литья эпохи.",
      "С моста открывается один из лучших видов на Петропавловскую крепость.",
    ],
    year: "1903",
    length: "582 м",
    river: "Нева",
  },
];

const BRIDGE_LIST = [
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
];

function BridgeModal({ bridge, onClose }: { bridge: BridgeDetail; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 border-b border-black">
          <div>
            <div className="text-xs uppercase tracking-widest text-red-600 mb-2">{bridge.tag}</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{bridge.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shrink-0 ml-4 cursor-pointer"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Image */}
        {bridge.image && (
          <div className="w-full h-64 overflow-hidden">
            <img
              src={bridge.image}
              alt={bridge.name}
              className="w-full h-full object-cover py-0 px-0"
            />
          </div>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-3 border-b border-black">
          <div className="p-6 border-r border-black">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Год</div>
            <div className="text-2xl font-bold tracking-tighter">{bridge.year ?? "—"}</div>
          </div>
          <div className="p-6 border-r border-black">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Длина</div>
            <div className="text-2xl font-bold tracking-tighter">{bridge.length ?? "—"}</div>
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Река</div>
            <div className="text-2xl font-bold tracking-tighter">{bridge.river ?? "—"}</div>
          </div>
        </div>

        {/* Big stat */}
        <div className="px-8 pt-8 pb-4">
          <div className="text-7xl font-bold tracking-tighter text-neutral-100 leading-none">{bridge.stat}</div>
          <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">{bridge.statLabel}</div>
        </div>

        {/* Description */}
        <div className="px-8 pb-6">
          <p className="text-lg text-neutral-700 leading-relaxed">{bridge.description}</p>
        </div>

        {/* Facts */}
        <div className="px-8 pb-8">
          <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4 border-t border-neutral-200 pt-6">Факты</div>
          <ul className="space-y-3">
            {bridge.facts.map((fact, i) => (
              <li key={i} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                <span className="text-red-600 font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [activeBridge, setActiveBridge] = useState<BridgeDetail | null>(null);

  const openBridge = (bridge: BridgeDetail) => setActiveBridge(bridge);
  const closeBridge = () => setActiveBridge(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Modal */}
      {activeBridge && <BridgeModal bridge={activeBridge} onClose={closeBridge} />}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b border-black">
        <div className="container mx-auto md:px-8 flex justify-between items-center bg-transparent rounded-0 py-0 px-0">
          <a href="/" className="text-xl font-bold tracking-tighter"></a>
          <div className="flex space-x-8">
            <a href="#champions" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"></a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"></a>
            <a href="#quote" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 container mx-auto py-[216px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Костов Владислав · 9Г
            </div>
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              МОСТЫ
              <br />
              <span className="text-red-600">ПИТЕРА</span>
            </h1>
            <p className="text-xl max-w-xl text-neutral-600">Один день. Один маршрут. Двадцать один мост Санкт-Петербурга — пешком, вживую.</p>

            <div className="flex gap-12 mt-12">
              <div>
                <div className="text-6xl font-bold tracking-tighter leading-none">21</div>
                <div className="text-sm uppercase tracking-widest text-neutral-500 mt-1">посещённый объект</div>
              </div>
              <div className="w-px bg-black"></div>
              <div>
                <div className="text-6xl font-bold tracking-tighter leading-none text-red-600">1</div>
                <div className="text-sm uppercase tracking-widest text-neutral-500 mt-1">день</div>
              </div>
            </div>
          </div>

          {/* Map Visual */}
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/6e2a49b9-f915-4a92-bcd5-a93cb69bdc47/bucket/feb06211-c245-4049-9c8a-633c52cb012f.png"
                alt="Маршрут 21 мост"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bridges List Section */}
      <section id="champions" className="px-4 md:px-8 bg-black text-white py-[134px]">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">МАРШРУТ</h2>
          <p className="text-neutral-400 uppercase tracking-widest text-sm mb-12">21 мост · весь день в пути</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-neutral-800">
            {BRIDGE_LIST.map(({ n, name }) => (
              <div
                key={n}
                className="group flex items-center gap-6 border-b border-r border-neutral-800 px-6 py-5 hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  const detail = BRIDGE_DETAILS.find(
                    (b) => name.toLowerCase().includes(b.name.split(" ")[0].toLowerCase()) ||
                           b.name.toLowerCase().includes(name.split(" ")[0].toLowerCase())
                  );
                  if (detail) openBridge(detail);
                }}
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
      <section className="px-4 md:px-8 bg-white py-[195px] rounded-none">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-2">САМОЕ ИНТЕРЕСНОЕ</h2>
          <p className="text-neutral-400 uppercase tracking-widest text-sm mb-12"></p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black">
            {BRIDGE_DETAILS.map((bridge, idx) => (
              <div
                key={bridge.id}
                onClick={() => openBridge(bridge)}
                className={`group flex flex-col gap-4 p-8 hover:bg-red-600 transition-colors duration-200 cursor-pointer ${
                  idx < BRIDGE_DETAILS.length - 1 ? "border-b md:border-b-0 border-r-0 md:border-r border-black" : ""
                }`}
              >
                <div className="w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon name={bridge.icon} size={22} className="text-black group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs uppercase tracking-widest text-red-600 group-hover:text-white/70 transition-colors">{bridge.tag}</div>
                <h3 className="text-2xl font-bold tracking-tighter group-hover:text-white transition-colors">{bridge.name}</h3>
                <div className="text-5xl font-bold text-neutral-200 group-hover:text-white/20 transition-colors">{bridge.stat}</div>
                <p className="text-neutral-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                  {bridge.description}
                </p>
                <div className="flex items-center gap-2 mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs uppercase tracking-widest">Подробнее</span>
                  <Icon name="ArrowRight" size={14} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 md:px-8 py-[150px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О ПОХОДЕ</h2>
              <div className="aspect-[4/5] relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/6e2a49b9-f915-4a92-bcd5-a93cb69bdc47/bucket/3bafbba8-02bd-4491-9b8b-3c8b92ad652c.png"
                  alt="О походе"
                  className="w-full h-full object-cover"
                />
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
      <section id="quote" className="px-4 md:px-8 bg-red-600 text-white py-[400px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl font-bold tracking-tighter leading-none mb-12 opacity-20 py-0"></div>
            <blockquote className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-12 -mt-16">
              Мосты — это не просто конструкции, это история, которую я потрогал руками.
            </blockquote>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl uppercase tracking-widest mb-2"></p>
            <p className="text-sm uppercase tracking-widest opacity-70"></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 md:px-8 bg-black text-white py-[327px]">
        <div className="container mx-auto text-center">
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8">СПАСИБО ЗА ВНИМАНИЕ</h2>
          <p className="text-2xl uppercase tracking-widest text-neutral-400 mb-2"></p>
          <p className="text-sm uppercase tracking-widest text-neutral-600 mt-8"></p>
        </div>
      </section>
    </main>
  );
}