import React from "react";
import { motion } from "framer-motion";

// ======== Quick config you can edit ========
const CONFIG = {
  brand: "HOLO",
  tokenSymbol: "$HOLO",
  contractAddress: "CAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  links: {
    buy: "https://pump.fun/",
    twitter: "https://x.com/",
    dexscreener: "https://dexscreener.com/",
  },
};

// ======== Small helpers ========
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-24 sm:py-28 ${className}`}>
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(99,102,241,0.15),transparent_70%),radial-gradient(30rem_30rem_at_10%_20%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(30rem_30rem_at_90%_80%,rgba(244,63,94,0.12),transparent_60%)]"/>
    <div className="container mx-auto px-4 max-w-6xl">{children}</div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/80 shadow-sm backdrop-blur">
    {children}
  </span>
);

const CTA = () => (
  <div className="flex flex-wrap items-center gap-3">
    <a
      href={CONFIG.links.buy}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/20 transition"
    >
      Купить {CONFIG.tokenSymbol}
    </a>
    <a
      href={CONFIG.links.twitter}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:text-white/100 hover:bg-white/5 transition"
    >
      X (Twitter)
    </a>
    <a
      href={CONFIG.links.dexscreener}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:text-white/100 hover:bg-white/5 transition"
    >
      DexScreener
    </a>
  </div>
);

const Card = ({ title, subtitle, children }) => (
  <motion.div
    variants={fadeUp}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
  >
    <div className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" style={{
      background:
        "radial-gradient(40rem_20rem_at_0%_0%,rgba(168,85,247,0.15),transparent),radial-gradient(30rem_20rem_at_100%_100%,rgba(16,185,129,0.15),transparent)",
    }}/>
    <div className="relative">
      {subtitle && (
        <div className="mb-3">
          <Pill>{subtitle}</Pill>
        </div>
      )}
      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
        {title}
      </h3>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-white/80">
        {children}
      </div>
    </div>
  </motion.div>
);

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-emerald-400 animate-pulse"/>
            <span className="text-white font-bold tracking-widest">{CONFIG.brand}</span>
          </a>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white" href="#dim-white">Белая</a>
            <a className="hover:text-white" href="#rooms">Комнаты</a>
            <a className="hover:text-white" href="#ledger">Леджер</a>
            <a className="hover:text-white" href="#orderbook">Книга ордеров</a>
            <a className="hover:text-white" href="#rugsea">Море Рагов</a>
          </nav>
          <div className="flex items-center gap-3">
            <Pill>
              <span className="opacity-60">CA</span>
              <span className="font-mono select-all">{CONFIG.contractAddress}</span>
            </Pill>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Section id="top" className="pt-28 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <Starfield />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <Pill>
            <span className="font-semibold">HOLO LOGS</span>
            <span className="opacity-60">// мем-вселенная</span>
          </Pill>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Отчёты из <span className="bg-gradient-to-r from-indigo-400 to-emerald-300 bg-clip-text text-transparent">HOLO</span>
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-xl">
            Сюрреалистический мир мем-рынков, где комнаты живут своей жизнью, а ордера шепчут. Один скролл — и вы в другой реальности.
          </p>
          <div className="mt-8">
            <CTA />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <HoloOrb />
        </motion.div>
      </div>
    </Section>
  );
}

function Dimensions() {
  return (
    <Section id="dim-white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
        <Card title="ИЗМЕРЕНИЕ I — Белая" subtitle="пространство / тишина">
          <p>
            Ослепительная белизна без горизонта. Гравитация условна, воздух гудит чужими шёпотами рынка. Здесь отдыхают легенды и пылятся реликвии хайпа.
          </p>
        </Card>
        <Card title="ИЗМЕРЕНИЕ II — Комнаты" subtitle="мета / лабиринт" >
          <ul>
            <li>Окопный Рынок — солдаты-бэгхолдеры;</li>
            <li>Лаундроверс — Газы-Гоблины и прачечные;</li>
            <li>Фарма-поля — плавающие таблетки;</li>
            <li>Лягуший Трон — самодовольный божественный Pepe.</li>
          </ul>
        </Card>
        <Card title="ИЗМЕРЕНИЕ III — Леджер" subtitle="блоки / память">
          <p>
            Бесконечные коридоры из блоков-надгробий. Валидаторы ставят печати, сиротские блоки шепчут мёртвые цены — опасно слушать слишком долго.
          </p>
        </Card>
        <Card title="ИЗМЕРЕНИЕ IV — Книга ордеров" subtitle="спрэд / охота">
          <p>
            Две живые стены — зелёная и красная — сталкиваются как тетрис вселенной. Ликвидаторы кружат, ловя каждого, кто зазевался между ставками.
          </p>
        </Card>
        <Card title="ИЗМЕРЕНИЕ V — Море рагов" subtitle="сирены / ликвидность">
          <p>
            Чёрный океан под багровым небом. Полузатонувшие яхты, сундуки и баннеры мёртвых проектов дрейфуют мимо. Иногда всплывают реликвии.
          </p>
        </Card>
      </motion.div>
    </Section>
  );
}

function Logs() {
  const items = [
    {
      t: "Блок-улитки (Леджер)",
      d: "оставляют светящиеся хэши; визжат ‘GAS SPIKE’, если их задеть",
    },
    { t: "Импы-биддеры (Книга)", d: "толкают в зелёную стену, крича ‘BUY THE DIP’" },
    { t: "Пиявки-Чарт (Окопы)", d: "пьют уверенность; лечатся свечой пампа" },
    { t: "Газы-Гоблины (Лаундроверс)", d: "перепродают ваше же за газовый нацен" },
    { t: "Ангел Ликвидации (везде)", d: "глаза — цены ликвидации; приходит при овер-леverage" },
  ];
  return (
    <Section id="rooms">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid gap-6 sm:grid-cols-2">
        {items.map((it, i) => (
          <Card key={i} title={it.t} subtitle="запись столкновения">
            <p>{it.d}</p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}

function MemeDex() {
  return (
    <Section id="ledger">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <Card title="HOLOVERSE — MemeDex" subtitle="PvP / коллекционные карты">
          <p>
            Собирайте существ, реликвии и события из измерений и сражайтесь за Очки Клаута. Победите — и вернётесь в Белую как легенда.
          </p>
          <ul>
            <li>Существа — союзники и монстры</li>
            <li>Реликвии — экип и расходники</li>
            <li>События — разовые качели и хак-фазы</li>
            <li>Карты комнат — меняют поле боя</li>
          </ul>
        </Card>
      </motion.div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-sm text-white/60">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-indigo-500 to-emerald-400"/>
          <span className="tracking-widest">{CONFIG.brand}</span>
        </div>
        <div className="flex items-center gap-3">
          <a className="hover:text-white" href={CONFIG.links.twitter} target="_blank" rel="noreferrer">X</a>
          <a className="hover:text-white" href={CONFIG.links.dexscreener} target="_blank" rel="noreferrer">DexScreener</a>
          <a className="hover:text-white" href={CONFIG.links.buy} target="_blank" rel="noreferrer">Купить</a>
        </div>
        <p className="opacity-60">© {new Date().getFullYear()} {CONFIG.brand}. Не финансовый совет.</p>
      </div>
    </footer>
  );
}

function Starfield() {
  return (
    <div className="absolute inset-0 bg-black">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(#ffffff11 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
      <div className="absolute inset-0 animate-twinkle" style={{ backgroundImage: "radial-gradient(#ffffff0f 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
    </div>
  );
}

function HoloOrb() {
  return (
    <div className="relative mx-auto grid h-64 w-64 place-items-center sm:h-80 sm:w-80">
      <div className="absolute -inset-8 rounded-full bg-[conic-gradient(from_0deg,rgba(99,102,241,0.2),rgba(16,185,129,0.2),rgba(244,63,94,0.2),rgba(99,102,241,0.2))] blur-2xl" />
      <div className="relative aspect-square w-full overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-indigo-600/30 via-black to-emerald-600/30 shadow-2xl">
        <div className="absolute inset-0 mix-blend-screen" style={{ backgroundImage: "radial-gradient(60%_40%_at_50%_30%,rgba(255,255,255,0.25),transparent), radial-gradient(30%_20%_at_70%_70%,rgba(16,185,129,0.25),transparent)" }} />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_70%)]">
          <GridNoise />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs tracking-wider text-white/80">{CONFIG.tokenSymbol}</span>
        </div>
      </div>
    </div>
  );
}

function GridNoise() {
  return (
    <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        </pattern>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.5"/>
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" filter="url(#noise)" opacity="0.15" />
    </svg>
  );
}

export default function HoloLikeLanding() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-400/30 selection:text-white">
      <Header />
      <Hero />
      <Dimensions />
      <Logs />
      <MemeDex />
      <Section id="orderbook">
        <Card title="Книга ордеров — Симулякр" subtitle="демо / интерактив">
          <OrderbookDemo />
        </Card>
      </Section>
      <Section id="rugsea">
        <Card title="Море рагов — Примечания" subtitle="полевой справочник">
          <ul>
            <li>Сирены рага поют обещания x100 — не слушайте их.</li>
            <li>Киты-девы таскают кошельки за собой — не злите.</li>
            <li>Угри ликвидности медленно высасывают энергию — берегите газ.</li>
          </ul>
        </Card>
      </Section>
      <Footer />

      {/* Global styles for tiny animations */}
      <style>{`
        .animate-twinkle { animation: twinkle 4s linear infinite; }
        @keyframes twinkle { 0%{opacity:.2} 50%{opacity:.5} 100%{opacity:.2} }
      `}</style>
    </div>
  );
}

function OrderbookDemo() {
  const [bid, setBid] = React.useState(49);
  const [ask, setAsk] = React.useState(51);
  const mid = ((bid + ask) / 2).toFixed(2);

  return (
    <div className="grid gap-6 sm:grid-cols-3 items-start">
      <div className="space-y-3">
        <label className="block text-sm text-white/70">Bid</label>
        <input type="range" min={1} max={99} value={bid} onChange={(e)=>setBid(parseFloat(e.target.value))} className="w-full"/>
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 font-mono text-sm">{bid.toFixed(2)}</div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm text-white/70">Ask</label>
        <input type="range" min={1} max={99} value={ask} onChange={(e)=>setAsk(parseFloat(e.target.value))} className="w-full"/>
        <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 font-mono text-sm">{ask.toFixed(2)}</div>
      </div>
      <div className="space-y-3">
        <label className="block text-sm text-white/70">Mid</label>
        <div className="rounded-xl border border-white/15 bg-white/5 p-3 font-mono text-lg">{mid}</div>
        <div className="text-xs text-white/50">Спрэд: {(ask - bid).toFixed(2)}</div>
      </div>
    </div>
  );
}
