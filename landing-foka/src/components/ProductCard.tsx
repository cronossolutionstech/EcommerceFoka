import type { Product } from '../types'
import { useStore } from '../context/StoreContext'
import { discountPct, formatPrice } from '../lib/format'

export default function ProductCard({ product, discount = false }: { product: Product; discount?: boolean }) {
  const { openQuickView } = useStore()

  return (
    <div className="group cursor-pointer" onClick={() => openQuickView(product)}>
      <div className="relative overflow-hidden bg-[#151513] mb-3" style={{ aspectRatio: '3/4' }}>
        <img
          src={product.images[0]}
          alt={product.alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className="absolute top-3 left-3 text-[9px] font-medium tracking-widest px-2 py-1"
          style={{
            fontFamily: 'var(--font-mono)',
            backgroundColor: product.tagColor,
            color: '#f0ece4',
            letterSpacing: '0.15em',
          }}
        >
          {product.tag.toUpperCase()}
        </span>

        {discount && product.oldPrice && (
          <span
            className="absolute top-3 right-3 text-[9px] font-semibold tracking-widest px-2 py-1 bg-[#c9a84c] text-[#0a0a09]"
            style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
          >
            -{discountPct(product.price, product.oldPrice)}%
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={e => {
              e.stopPropagation()
              openQuickView(product)
            }}
            className="flex-1 py-3 text-[10px] tracking-widest font-semibold bg-[#c9a84c] text-[#0a0a09] hover:bg-[#d9b85c] transition-colors"
            style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
          >
            + ADICIONAR
          </button>
          <button
            onClick={e => e.stopPropagation()}
            className="px-4 bg-[#1e1e1c] text-[#f0ece4] hover:bg-[#2a2a28] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-[#5a5a56] text-[10px] tracking-widest mb-0.5" style={{ fontFamily: 'var(--font-mono)' }}>{product.category.toUpperCase()}</p>
      <p className="text-[#f0ece4] text-sm font-medium mb-1.5" style={{ fontFamily: 'var(--font-sans)' }}>{product.name}</p>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
        <span className="text-[#c9a84c] font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{formatPrice(product.price)}</span>
        {product.oldPrice && <span className="text-[#5a5a56] text-sm line-through" style={{ fontFamily: 'var(--font-mono)' }}>{formatPrice(product.oldPrice)}</span>}
      </div>
    </div>
  )
}
