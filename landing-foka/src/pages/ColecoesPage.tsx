import { PRODUCTS } from '../data'
import PageBanner from '../components/PageBanner'
import CategoryGrid from '../components/CategoryGrid'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'

const BANNER = 'https://images.unsplash.com/photo-1761727074976-ea99983f8e0d?w=1600&h=900&fit=crop&auto=format'

export default function ColecoesPage() {
  return (
    <>
      <PageBanner
        kicker="TODAS AS COLEÇÕES"
        title="Coleções"
        description="Todas as peças Foka em um só lugar. Do escritório ao fim de semana, cada detalhe pensado para o homem moderno."
        image={BANNER}
        count={`${PRODUCTS.length} peças`}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#c9a84c] text-[10px] tracking-widest mb-2" style={{ fontFamily: 'var(--font-mono)' }}>EXPLORE POR CATEGORIA</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ece4', lineHeight: 1 }}>
              Categorias
            </h2>
          </div>
        </div>
        <CategoryGrid />
      </section>

      <section className="bg-[#0d0d0c] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#c9a84c] text-[10px] tracking-widest mb-2" style={{ fontFamily: 'var(--font-mono)' }}>CATÁLOGO COMPLETO</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ece4', lineHeight: 1 }}>
                Todas as peças
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} discount />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
