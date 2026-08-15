import type { CartItem } from '../types'
import { formatPrice } from '../lib/format'
import { useLockScroll } from '../lib/useLockScroll'

export default function CartPanel({
  items,
  onClose,
  onInc,
  onDec,
  onRemove,
}: {
  items: CartItem[]
  onClose: () => void
  onInc: (key: string) => void
  onDec: (key: string) => void
  onRemove: (key: string) => void
}) {
  useLockScroll(true)
  const count = items.reduce((s, it) => s + it.quantity, 0)
  const subtotal = items.reduce((s, it) => s + it.product.price * it.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0d0d0c] border-l border-[#1e1e1c] w-full max-w-md h-full flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e1c]" style={{ paddingTop: 'max(1.25rem, env(safe-area-inset-top))' }}>
          <span className="text-sm tracking-widest text-[#f0ece4]" style={{ fontFamily: 'var(--font-mono)' }}>SACOLA ({count})</span>
          <button onClick={onClose} className="text-[#5a5a56] hover:text-[#f0ece4] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center px-6">
            <div className="text-center">
              <svg className="mx-auto text-[#3a3a38]" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-[#3a3a38] text-sm mt-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Sua sacola está vazia.<br />Adicione peças para continuar.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 border border-[#2a2a28] text-[#a09a90] text-[10px] tracking-widest hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
              >
                CONTINUAR COMPRANDO
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 divide-y divide-[#1e1e1c]">
              {items.map(it => (
                <div key={it.key} className="py-5 flex gap-4">
                  <img
                    src={it.color.img}
                    alt={it.product.alt}
                    className="w-20 h-24 object-cover object-top bg-[#151513] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm text-[#f0ece4] font-medium leading-snug truncate" style={{ fontFamily: 'var(--font-sans)' }}>
                          {it.product.name}
                        </p>
                        <p className="text-[10px] tracking-wider text-[#5a5a56] mt-0.5" style={{ fontFamily: 'var(--font-mono)' }}>
                          {it.color.name.toUpperCase()} · TAM {it.size}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemove(it.key)}
                        className="text-[#3a3a38] hover:text-[#e0604a] transition-colors mt-0.5 flex-shrink-0"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#2a2a28]">
                        <button onClick={() => onDec(it.key)} className="w-8 h-8 text-[#a09a90] hover:text-[#f0ece4] transition-colors">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-xs text-[#f0ece4]" style={{ fontFamily: 'var(--font-mono)' }}>{it.quantity}</span>
                        <button onClick={() => onInc(it.key)} className="w-8 h-8 text-[#a09a90] hover:text-[#f0ece4] transition-colors">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                      <span className="text-[#c9a84c] text-sm font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(it.product.price * it.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1e1e1c] px-6 py-5" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5a5a56]" style={{ fontFamily: 'var(--font-mono)' }}>
                  <span>SUBTOTAL</span><span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#5a5a56]" style={{ fontFamily: 'var(--font-mono)' }}>
                  <span>FRETE</span><span className="text-[#c9a84c]">GRÁTIS</span>
                </div>
                <div className="flex justify-between text-[#f0ece4] pt-2.5 border-t border-[#1e1e1c]" style={{ fontFamily: 'var(--font-mono)' }}>
                  <span>TOTAL</span>
                  <span className="text-[#c9a84c] text-base">{formatPrice(subtotal)}</span>
                </div>
              </div>
              <button
                className="w-full mt-4 py-4 bg-[#c9a84c] text-[#0a0a09] text-xs font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors"
                style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
              >
                FINALIZAR COMPRA
              </button>
              <button
                onClick={onClose}
                className="w-full mt-2 py-2 text-[10px] tracking-widest text-[#5a5a56] hover:text-[#a09a90] transition-colors"
                style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
              >
                OU CONTINUAR COMPRANDO
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
