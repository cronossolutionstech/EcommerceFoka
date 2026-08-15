import { useMemo, useState } from 'react'
import type { CategorySlug, SortId } from '../types'
import { CATEGORY_PAGES, PRODUCTS } from '../data'
import PageBanner from '../components/PageBanner'
import SortBar from '../components/SortBar'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'

export default function CategoriaPage({ slug }: { slug: CategorySlug }) {
  const meta = CATEGORY_PAGES[slug]
  const [sort, setSort] = useState<SortId>('novidades')

  const items = useMemo(() => {
    const list = PRODUCTS.filter(p => p.categorySlug === slug)
    const sorted = [...list]
    if (sort === 'menor') sorted.sort((a, b) => a.price - b.price)
    else if (sort === 'maior') sorted.sort((a, b) => b.price - a.price)
    else if (sort === 'desconto') {
      const off = (p: { price: number; oldPrice: number | null }) =>
        p.oldPrice ? p.oldPrice - p.price : 0
      sorted.sort((a, b) => off(b) - off(a))
    } else sorted.sort((a, b) => b.id - a.id)
    return sorted
  }, [slug, sort])

  return (
    <>
      <PageBanner
        kicker={meta.kicker}
        title={meta.title}
        description={meta.description}
        image={meta.banner}
        count={`${items.length} peças`}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <SortBar value={sort} onChange={setSort} />
        {items.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {items.map(p => (
              <ProductCard key={p.id} product={p} discount />
            ))}
          </div>
        ) : (
          <p className="text-[#5a5a56] text-center py-16" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            Nenhuma peça encontrada nesta categoria.
          </p>
        )}
      </section>

      <Newsletter />
    </>
  )
}
