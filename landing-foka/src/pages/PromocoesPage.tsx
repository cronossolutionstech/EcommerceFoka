import { useMemo, useState } from 'react'
import type { SortId } from '../types'
import { PRODUCTS } from '../data'
import PageBanner from '../components/PageBanner'
import SortBar from '../components/SortBar'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'

const BANNER = 'https://images.unsplash.com/photo-1627379114594-7aff6664cd94?w=1600&h=900&fit=crop&auto=format'

export default function PromocoesPage() {
  const [sort, setSort] = useState<SortId>('desconto')

  const items = useMemo(() => {
    const list = PRODUCTS.filter(p => p.oldPrice !== null)
    const sorted = [...list]
    if (sort === 'menor') sorted.sort((a, b) => a.price - b.price)
    else if (sort === 'maior') sorted.sort((a, b) => b.price - a.price)
    else if (sort === 'novidades') sorted.sort((a, b) => b.id - a.id)
    else {
      const off = (p: { price: number; oldPrice: number | null }) =>
        p.oldPrice ? p.oldPrice - p.price : 0
      sorted.sort((a, b) => off(b) - off(a))
    }
    return sorted
  }, [sort])

  return (
    <>
      <PageBanner
        kicker="OFERTAS POR TEMPO LIMITADO"
        title="Promoções"
        description="Peças selecionadas com descontos imperdíveis. Aproveite antes que os tamanhos acabem."
        image={BANNER}
        count={`${items.length} peças em oferta`}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <SortBar value={sort} onChange={setSort} />
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map(p => (
            <ProductCard key={p.id} product={p} discount />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
