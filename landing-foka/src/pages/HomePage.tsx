import { Link, useNavigate } from 'react-router-dom'
import { FEATURED_PRODUCTS, TESTIMONIALS } from '../data'
import Marquee from '../components/Marquee'
import CategoryGrid from '../components/CategoryGrid'
import ProductCard from '../components/ProductCard'
import StarRating from '../components/StarRating'
import Newsletter from '../components/Newsletter'

function Hero({ onShop }: { onShop: () => void }) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0a09]" style={{ minHeight: '100dvh' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1761727074976-ea99983f8e0d?w=1400&h=1000&fit=crop&auto=format"
          alt="Homem em corredor com portas vermelhas — editorial Foka"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.38) saturate(0.7)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a09 0%, transparent 55%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,9,0.65) 0%, transparent 60%)' }} />
      </div>

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

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#3a3a38]" />
        <span className="text-[#3a3a38] text-[9px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>
    </section>
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
        <Link to="/colecoes" className="text-[#c9a84c] text-xs tracking-widest hover:text-[#d9b85c] transition-colors hidden sm:block" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
          VER TUDO →
        </Link>
      </div>

      <CategoryGrid />
    </section>
  )
}

function Destaques() {
  return (
    <section className="bg-[#0d0d0c] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#c9a84c] text-[10px] tracking-widest mb-2" style={{ fontFamily: 'var(--font-mono)' }}>SELEÇÃO ESPECIAL</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ece4', lineHeight: 1 }}>
              Destaques
            </h2>
          </div>
          <Link to="/colecoes" className="text-[#c9a84c] text-xs tracking-widest hover:text-[#d9b85c] transition-colors hidden sm:block" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
            VER TUDO →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {FEATURED_PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CampaignBanner() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
      <img
        src="https://images.unsplash.com/photo-1627379114594-7aff6664cd94?w=1400&h=600&fit=crop&auto=format"
        alt="Homem em blazer preto apoiado no corrimão"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.32) saturate(0.6)' }}
      />
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
            onClick={() => navigate('/promocoes')}
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

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <Hero onShop={() => navigate('/colecoes')} />
      <Marquee />
      <Categories />
      <Destaques />
      <CampaignBanner />
      <BrandValues />
      <Testimonials />
      <Newsletter />
    </>
  )
}
