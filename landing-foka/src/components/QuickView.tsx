import { useState } from 'react'
import type { ColorOption, Product } from '../types'
import { formatPrice } from '../lib/format'
import { useLockScroll } from '../lib/useLockScroll'
import StarRating from './StarRating'

export default function QuickView({
  product,
  onClose,
  onAdd,
}: {
  product: Product
  onClose: () => void
  onAdd: (product: Product, color: ColorOption, size: string, quantity: number) => void
}) {
  const [imgIndex, setImgIndex] = useState(() => {
    const first = product.colors[0]
    return first ? Math.max(0, product.images.indexOf(first.img)) : 0
  })
  const [color, setColor] = useState<ColorOption | null>(product.colors[0] ?? null)
  const [size, setSize] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [sizeError, setSizeError] = useState(false)

  useLockScroll(true)

  const selectColor = (c: ColorOption) => {
    setColor(c)
    const idx = product.images.indexOf(c.img)
    if (idx >= 0) setImgIndex(idx)
  }

  const go = (dir: number) =>
    setImgIndex(i => (i + dir + product.images.length) % product.images.length)

  const submit = () => {
    if (!size) {
      setSizeError(true)
      return
    }
    if (!color) return
    onAdd(product, color, size, qty)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0d0d0c] border border-[#1e1e1c] w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center text-[#5a5a56] hover:text-[#f0ece4] bg-[#0d0d0c]/90 border border-[#1e1e1c] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Gallery */}
          <div className="bg-[#151513]">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img src={product.images[imgIndex]} alt={product.alt} className="w-full h-full object-cover object-top" />
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#0d0d0c]/70 hover:bg-[#0d0d0c] text-[#f0ece4] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#0d0d0c]/70 hover:bg-[#0d0d0c] text-[#f0ece4] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 p-3">
              {product.images.map((im, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`w-16 h-20 overflow-hidden border transition-colors ${i === imgIndex ? 'border-[#c9a84c]' : 'border-[#2a2a28] hover:border-[#5a5a56]'}`}
                >
                  <img src={im} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#5a5a56] text-[10px] tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                {product.category.toUpperCase()}
              </span>
              <span
                className="text-[9px] font-medium tracking-widest px-2 py-1"
                style={{ fontFamily: 'var(--font-mono)', backgroundColor: product.tagColor, color: '#f0ece4', letterSpacing: '0.15em' }}
              >
                {product.tag.toUpperCase()}
              </span>
            </div>

            <h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#f0ece4', lineHeight: 1 }}
            >
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <StarRating n={5} />
              <span className="text-[#5a5a56] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>(4.8)</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-[#c9a84c] text-2xl font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-[#5a5a56] line-through" style={{ fontFamily: 'var(--font-mono)' }}>
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            {product.oldPrice && (
              <span className="text-[10px] tracking-widest text-[#c9a84c] mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
                ECONOMIZE {formatPrice(product.oldPrice - product.price)}
              </span>
            )}

            <p className="text-[#a09a90] text-sm leading-relaxed mt-5" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-6">
              <p className="text-[10px] tracking-widest text-[#5a5a56] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                COR: {color ? color.name.toUpperCase() : '—'}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => selectColor(c)}
                    className={`flex items-center gap-2 px-3 py-2 border text-xs transition-colors ${color?.name === c.name ? 'border-[#c9a84c] text-[#c9a84c]' : 'border-[#2a2a28] text-[#a09a90] hover:border-[#5a5a56]'}`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/30" style={{ backgroundColor: c.hex }} />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-5">
              <p className="text-[10px] tracking-widest text-[#5a5a56] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                TAMANHO{sizeError && !size && <span className="text-[#e0604a]"> — SELECIONE UM TAMANHO</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => {
                      setSize(s)
                      setSizeError(false)
                    }}
                    className={`min-w-11 h-11 px-2 text-xs border transition-colors ${size === s ? 'bg-[#c9a84c] text-[#0a0a09] border-[#c9a84c]' : sizeError ? 'border-[#e0604a]/50 text-[#a09a90] hover:border-[#c9a84c]' : 'border-[#2a2a28] text-[#a09a90] hover:border-[#c9a84c]'}`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + add */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <div className="flex items-center border border-[#2a2a28] self-start">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-12 text-[#a09a90] hover:text-[#f0ece4] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <span className="w-10 text-center text-[#f0ece4] text-sm" style={{ fontFamily: 'var(--font-mono)' }}>{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-12 text-[#a09a90] hover:text-[#f0ece4] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
              <button
                onClick={submit}
                className="w-full sm:flex-1 h-12 bg-[#c9a84c] text-[#0a0a09] text-xs font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors"
                style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
              >
                ADICIONAR À SACOLA
              </button>
            </div>

            <ul className="mt-6 space-y-1.5 border-t border-[#1e1e1c] pt-4">
              {product.benefits.map(b => (
                <li key={b} className="flex items-center gap-2 text-xs text-[#5a5a56]" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="text-[#c9a84c]">◆</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
