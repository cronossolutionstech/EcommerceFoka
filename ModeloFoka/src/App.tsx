import { useState } from 'react'

/* ─── Data ─────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: 1,
    name: 'Camisa Obsidian',
    category: 'Camisas',
    price: 'R$ 349',
    oldPrice: 'R$ 420',
    tag: 'Novo',
    img: 'https://images.unsplash.com/photo-1764698072732-ea0230fc5d8e?w=600&h=800&fit=crop&auto=format',
    alt: 'Homem de camisa preta desbotada apoiado na parede',
  },
  {
    id: 2,
    name: 'Jaqueta Carbone',
    category: 'Jaquetas',
    price: 'R$ 689',
    oldPrice: null,
    tag: 'Exclusivo',
    img: 'https://images.unsplash.com/photo-1783430455894-9858f0efcb06?w=600&h=800&fit=crop&auto=format',
    alt: 'Homem com jaqueta escura olhando por cima do ombro',
  },
  {
    id: 3,
    name: 'Terno Havana',
    category: 'Ternos',
    price: 'R$ 1.290',
    oldPrice: 'R$ 1.580',
    tag: 'Sale',
    img: 'https://images.unsplash.com/photo-1741709847811-e02d0502e46f?w=600&h=800&fit=crop&auto=format',
    alt: 'Homem de terno marrom em pose elegante',
  },
  {
    id: 4,
    name: 'Conjunto Noir',
    category: 'Conjuntos',
    price: 'R$ 890',
    oldPrice: null,
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1742319692068-f63de5b5d4b0?w=600&h=800&fit=crop&auto=format',
    alt: 'Homem em terno preto com óculos de sol',
  },
]

const TESTIMONIALS = [
  {
    name: 'Lucas Ferreira',
    city: 'São Paulo, SP',
    text: 'A qualidade das peças superou minhas expectativas. O Terno Havana chegou impecável, com acabamento de altíssimo nível. Voltarei com certeza.',
    rating: 5,
  },
  {
    name: 'Matheus Andrade',
    city: 'Rio de Janeiro, RJ',
    text: 'A Foka tem o melhor equilíbrio entre estilo urbano e sofisticação. Uso as camisas no trabalho e nas saídas — sempre recebo elogios.',
    rating: 5,
  },
  {
    name: 'Rafael Oliveira',
    city: 'Curitiba, PR',
    text: 'Entrega rápida, embalagem cuidadosa e as peças são exatamente como no site. Finalmente uma marca que entende o que o homem moderno quer.',
    rating: 5,
  },
]

const CATEGORIES = [
  { name: 'Camisas', count: '48 peças', img: 'https://images.unsplash.com/photo-1783097906573-9bdb0225c39a?w=500&h=640&fit=crop&auto=format', alt: 'Homem de gola-preta preta' },
  { name: 'Ternos', count: '24 peças', img: 'https://images.unsplash.com/photo-1741709847860-85286566b5c9?w=500&h=640&fit=crop&auto=format', alt: 'Homem de terno na rua' },
  { name: 'Casual', count: '62 peças', img: 'https://images.unsplash.com/photo-1763750581767-b367bcd6c117?w=500&h=640&fit=crop&auto=format', alt: 'Homem casual com óculos de sol' },
]

/* ─── Sub-components ────────────────────────────────────── */

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function Nav({ cartCount, onCart }: { cartCount: number; onCart: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,9,0.96) 0%, rgba(10,10,9,0) 100%)', paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-2xl tracking-[0.25em] text-[#f0ece4] select-none"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >
          FOKA
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Coleções', 'Camisas', 'Ternos', 'Casual', 'Sale'].map(l => (
            <a
              key={l}
              href="#"
              className="text-sm text-[#a09a90] hover:text-[#f0ece4] transition-colors"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em' }}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-[#a09a90] hover:text-[#f0ece4] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button onClick={onCart} className="relative text-[#a09a90] hover:text-[#f0ece4] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#c9a84c] text-[#0a0a09] text-[9px] font-semibold flex items-center justify-center" style={{ fontFamily: 'var(--font-mono)' }}>
                {cartCount}
              </span>
            )}
          </button>
          {/* Mobile burger */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden text-[#a09a90] hover:text-[#f0ece4] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0c] border-t border-[#1e1e1c] px-6 py-5 flex flex-col gap-4">
          {['Coleções', 'Camisas', 'Ternos', 'Casual', 'Sale'].map(l => (
            <a key={l} href="#" className="text-sm text-[#a09a90] hover:text-[#f0ece4] transition-colors" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function Hero({ onShop }: { onShop: () => void }) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0a09]" style={{ minHeight: '100dvh' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1761727074976-ea99983f8e0d?w=1400&h=1000&fit=crop&auto=format"
          alt="Homem em corredor com portas vermelhas — editorial Foka"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.38) saturate(0.7)' }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a09 0%, transparent 55%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,9,0.65) 0%, transparent 60%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p
            className="text-[#c9a84c] mb-4 fade-up"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            COLEÇÃO INVERNO 2026
          </p>
          <h1
            className="leading-none mb-6 fade-up-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 11vw, 7.5rem)',
              color: '#f0ece4',
              lineHeight: 0.95,
            }}
          >
            Veste&shy;quem<br />
            <span style={{ color: '#c9a84c' }}>você é.</span>
          </h1>
          <p className="text-[#a09a90] text-lg leading-relaxed mb-8 max-w-md fade-up-3" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            Roupas masculinas para homens que entendem que estilo não é vaidade — é caráter.
          </p>
          <div className="flex flex-wrap gap-3 fade-up-3">
            <button
              onClick={onShop}
              className="px-8 py-3.5 bg-[#c9a84c] text-[#0a0a09] text-sm font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors"
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
            >
              VER COLEÇÃO
            </button>
            <button
              className="px-8 py-3.5 border border-[#3a3a38] text-[#a09a90] text-sm tracking-widest hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
            >
              LOOKBOOK
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#3a3a38]" />
        <span className="text-[#3a3a38] text-[9px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['FEITO PARA DURAR', 'ESTILO SEM ESFORÇO', 'INVERNO 2026', 'CORTE PRECISO', 'TECIDOS PREMIUM', 'ENVIO EM 48H']
  const repeated = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-[#1e1e1c] py-3.5 bg-[#0d0d0c]">
      <div className="marquee-track">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.25em', color: '#5a5a56' }}
          >
            {t}
            <span style={{ color: '#c9a84c' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <h2
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ece4', lineHeight: 1 }}
        >
          Categorias
        </h2>
        <a href="#" className="text-[#c9a84c] text-xs tracking-widest hover:text-[#d9b85c] transition-colors hidden sm:block" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
          VER TUDO →
        </a>
      </div>

      {/* Asymmetric 3-col grid: left tall + right 2 stacked */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Large left */}
        <div className="md:row-span-2 md:col-span-1 group relative overflow-hidden bg-[#111110] cursor-pointer" style={{ minHeight: '480px' }}>
          <img
            src={CATEGORIES[0].img}
            alt={CATEGORIES[0].alt}
            className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,9,0.85) 0%, transparent 50%)' }} />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-[#c9a84c] text-[10px] tracking-widest mb-1" style={{ fontFamily: 'var(--font-mono)' }}>{CATEGORIES[0].count}</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#f0ece4', lineHeight: 1 }}>{CATEGORIES[0].name}</h3>
            <span className="mt-3 inline-block text-xs tracking-widest text-[#a09a90] group-hover:text-[#c9a84c] transition-colors" style={{ fontFamily: 'var(--font-mono)' }}>
              EXPLORAR →
            </span>
          </div>
        </div>

        {/* Top right */}
        <div className="md:col-span-2 group relative overflow-hidden bg-[#111110] cursor-pointer" style={{ minHeight: '230px' }}>
          <img
            src={CATEGORIES[1].img}
            alt={CATEGORIES[1].alt}
            className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.5)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,9,0.8) 0%, transparent 55%)' }} />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-[#c9a84c] text-[10px] tracking-widest mb-1" style={{ fontFamily: 'var(--font-mono)' }}>{CATEGORIES[1].count}</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: '#f0ece4', lineHeight: 1 }}>{CATEGORIES[1].name}</h3>
          </div>
        </div>

        {/* Bottom right */}
        <div className="md:col-span-2 group relative overflow-hidden bg-[#111110] cursor-pointer" style={{ minHeight: '230px' }}>
          <img
            src={CATEGORIES[2].img}
            alt={CATEGORIES[2].alt}
            className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.5)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,9,0.8) 0%, transparent 55%)' }} />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-[#c9a84c] text-[10px] tracking-widest mb-1" style={{ fontFamily: 'var(--font-mono)' }}>{CATEGORIES[2].count}</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: '#f0ece4', lineHeight: 1 }}>{CATEGORIES[2].name}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

function Products({ onAdd }: { onAdd: (name: string) => void }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const TAG_COLORS: Record<string, string> = {
    'Novo': '#1a5c3a',
    'Exclusivo': '#3a2a0a',
    'Sale': '#5c1a1a',
    'Bestseller': '#1a3a5c',
  }

  return (
    <section id="products" className="bg-[#0d0d0c] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#c9a84c] text-[10px] tracking-widest mb-2" style={{ fontFamily: 'var(--font-mono)' }}>SELEÇÃO ESPECIAL</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ece4', lineHeight: 1 }}>
              Destaques
            </h2>
          </div>
          <a href="#" className="text-[#c9a84c] text-xs tracking-widest hover:text-[#d9b85c] transition-colors hidden sm:block" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
            VER TUDO →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PRODUCTS.map(p => (
            <div
              key={p.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#151513] mb-3" style={{ aspectRatio: '3/4' }}>
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tag */}
                <span
                  className="absolute top-3 left-3 text-[9px] font-medium tracking-widest px-2 py-1"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: TAG_COLORS[p.tag] ?? '#1a1a18',
                    color: '#f0ece4',
                    letterSpacing: '0.15em',
                  }}
                >
                  {p.tag.toUpperCase()}
                </span>

                {/* Quick add overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 flex transition-all duration-300"
                  style={{
                    transform: hovered === p.id ? 'translateY(0)' : 'translateY(100%)',
                    opacity: hovered === p.id ? 1 : 0,
                  }}
                >
                  <button
                    onClick={() => onAdd(p.name)}
                    className="flex-1 py-3 text-[10px] tracking-widest font-semibold bg-[#c9a84c] text-[#0a0a09] hover:bg-[#d9b85c] transition-colors"
                    style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
                  >
                    + ADICIONAR
                  </button>
                  <button className="px-4 bg-[#1e1e1c] text-[#f0ece4] hover:bg-[#2a2a28] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Info */}
              <p className="text-[#5a5a56] text-[10px] tracking-widest mb-0.5" style={{ fontFamily: 'var(--font-mono)' }}>{p.category.toUpperCase()}</p>
              <p className="text-[#f0ece4] text-sm font-medium mb-1.5" style={{ fontFamily: 'var(--font-sans)' }}>{p.name}</p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-[#c9a84c] font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{p.price}</span>
                {p.oldPrice && <span className="text-[#5a5a56] text-sm line-through" style={{ fontFamily: 'var(--font-mono)' }}>{p.oldPrice}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CampaignBanner() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
      <img
        src="https://images.unsplash.com/photo-1627379114594-7aff6664cd94?w=1400&h=600&fit=crop&auto=format"
        alt="Homem em blazer preto apoiado no corrimão"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.32) saturate(0.6)' }}
      />
      {/* Diagonal split overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(10,10,9,0.9) 45%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center py-20">
        <div className="max-w-lg">
          <p className="text-[#c9a84c] text-[10px] tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            ◆ OFERTA EXCLUSIVA
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0ece4', lineHeight: 0.95 }}>
            Até 40% off<br />
            <span style={{ color: '#c9a84c' }}>em Ternos.</span>
          </h2>
          <p className="text-[#a09a90] mt-4 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            Eleve o seu guarda-roupa com nossos ternos de corte italiano. Válido somente até 31 de agosto.
          </p>
          <button
            className="px-8 py-3.5 bg-[#c9a84c] text-[#0a0a09] text-xs font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors"
            style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
          >
            APROVEITAR AGORA
          </button>
        </div>
      </div>
    </section>
  )
}

function BrandValues() {
  const vals = [
    { icon: '✦', title: 'Tecidos Premium', desc: 'Selecionamos apenas os melhores tecidos nacionais e importados para cada coleção.' },
    { icon: '◈', title: 'Corte Preciso', desc: 'Cada peça é desenvolvida com modelagem exclusiva para o corpo masculino moderno.' },
    { icon: '⬡', title: 'Entrega em 48h', desc: 'Para todo o Brasil com embalagem cuidadosa e rastreamento em tempo real.' },
    { icon: '◉', title: 'Troca Grátis', desc: 'Não ficou bom? Troque sem custo adicional em até 30 dias após a compra.' },
  ]
  return (
    <section className="border-y border-[#1e1e1c] bg-[#0a0a09] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {vals.map(v => (
          <div key={v.title}>
            <span className="block text-[#c9a84c] text-xl mb-3">{v.icon}</span>
            <h4 className="text-[#f0ece4] font-medium mb-2" style={{ fontFamily: 'var(--font-sans)' }}>{v.title}</h4>
            <p className="text-[#5a5a56] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-[#0d0d0c] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#c9a84c] text-[10px] tracking-widest mb-3" style={{ fontFamily: 'var(--font-mono)' }}>QUEM USA, APROVA</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ece4', lineHeight: 1 }}>
            O que dizem sobre a Foka
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="border border-[#1e1e1c] p-7 hover:border-[#c9a84c]/30 transition-colors">
              <StarRating n={t.rating} />
              <p className="text-[#a09a90] text-sm leading-relaxed mt-4 mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                "{t.text}"
              </p>
              <div>
                <p className="text-[#f0ece4] text-sm font-medium">{t.name}</p>
                <p className="text-[#5a5a56] text-[10px] tracking-wider mt-0.5" style={{ fontFamily: 'var(--font-mono)' }}>{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSent(true) }
  }

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1510 0%, #0a0a09 50%, #100d05 100%)' }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#c9a84c] text-[10px] tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          FIQUE POR DENTRO
        </p>
        <h2
          className="mb-4"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#f0ece4', lineHeight: 1 }}
        >
          Acesso antecipado<br />
          <span style={{ color: '#c9a84c' }}>às novas coleções.</span>
        </h2>
        <p className="text-[#5a5a56] mb-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          Cadastre-se e receba as novidades Foka antes de todo mundo, além de 10% de desconto na sua primeira compra.
        </p>

        {sent ? (
          <div className="border border-[#c9a84c]/30 py-4 px-6 inline-block">
            <span className="text-[#c9a84c] text-sm tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
              ✓ INSCRITO COM SUCESSO
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-[#151513] border border-[#2a2a28] border-r-0 px-4 py-3.5 text-base sm:text-xs text-[#f0ece4] placeholder:text-[#3a3a38] focus:outline-none focus:border-[#c9a84c] transition-colors"
              style={{ fontFamily: 'var(--font-mono)' }}
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#c9a84c] text-[#0a0a09] text-[10px] font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors whitespace-nowrap"
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
            >
              CADASTRAR
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#1e1e1c] bg-[#080807] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span
              className="block text-xl tracking-[0.3em] text-[#f0ece4] mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              FOKA
            </span>
            <p className="text-[#5a5a56] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Moda masculina para quem não abre mão de qualidade e identidade.
            </p>
          </div>
          {[
            { title: 'Navegação', links: ['Coleções', 'Novidades', 'Sale', 'Lookbook'] },
            { title: 'Informações', links: ['Tamanhos', 'Cuidados', 'Devoluções', 'Rastrear Pedido'] },
            { title: 'Empresa', links: ['Sobre a Foka', 'Carreiras', 'Imprensa', 'Contato'] },
          ].map(col => (
            <div key={col.title}>
              <h5 className="text-[#f0ece4] text-[10px] tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                {col.title.toUpperCase()}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-[#5a5a56] text-sm hover:text-[#a09a90] transition-colors" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e1e1c] pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#3a3a38] text-[10px] tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
            © 2026 FOKA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-5">
            {['Instagram', 'TikTok', 'Pinterest'].map(s => (
              <a key={s} href="#" className="text-[#3a3a38] text-[10px] tracking-wider hover:text-[#c9a84c] transition-colors" style={{ fontFamily: 'var(--font-mono)' }}>
                {s.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Cart Toast ──────────────────────────────────────── */
function CartToast({ item, onClose }: { item: string; onClose: () => void }) {
  return (
    <div
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 z-50 flex items-center gap-3 border border-[#c9a84c]/40 bg-[#0d0d0c] px-4 sm:px-5 py-3.5 shadow-2xl"
      style={{ animation: 'fadeUp 0.3s ease both', bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <p className="flex-1 min-w-0 text-sm text-[#f0ece4] truncate" style={{ fontFamily: 'var(--font-sans)' }}>
        <span className="text-[#c9a84c]">{item}</span> adicionado à sacola
      </p>
      <button onClick={onClose} className="text-[#5a5a56] hover:text-[#f0ece4] ml-2 transition-colors">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}

/* ─── App ───────────────────────────────────────────────── */
export default function App() {
  const [cart, setCart] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const [showCartPanel, setShowCartPanel] = useState(false)

  const handleAdd = (name: string) => {
    setCart(c => c + 1)
    setToast(name)
    setTimeout(() => setToast(null), 3000)
  }

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ background: '#0a0a09', minHeight: '100vh' }}>
      <Nav cartCount={cart} onCart={() => setShowCartPanel(v => !v)} />
      <Hero onShop={scrollToProducts} />
      <Marquee />
      <Categories />
      <Products onAdd={handleAdd} />
      <CampaignBanner />
      <BrandValues />
      <Testimonials />
      <Newsletter />
      <Footer />

      {toast && <CartToast item={toast} onClose={() => setToast(null)} />}

      {/* Simple cart side panel */}
      {showCartPanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCartPanel(false)} />
          <div className="relative bg-[#0d0d0c] border-l border-[#1e1e1c] w-80 h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm tracking-widest text-[#f0ece4]" style={{ fontFamily: 'var(--font-mono)' }}>SACOLA ({cart})</span>
              <button onClick={() => setShowCartPanel(false)} className="text-[#5a5a56] hover:text-[#f0ece4] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {cart === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#3a3a38] text-sm text-center" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                  Sua sacola está vazia.<br />Adicione peças para continuar.
                </p>
              </div>
            ) : (
              <div className="flex-1 flex items-end">
                <button
                  className="w-full py-4 bg-[#c9a84c] text-[#0a0a09] text-xs font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors"
                  style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
                >
                  FINALIZAR COMPRA
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
