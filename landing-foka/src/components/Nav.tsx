import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../data'
import { useStore } from '../context/StoreContext'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { cartCount, openCart } = useStore()

  const closeMenu = () => setOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,9,0.96) 0%, rgba(10,10,9,0) 100%)', paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl tracking-[0.25em] text-[#f0ece4] select-none"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
        >
          FOKA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-[#c9a84c]' : 'text-[#a09a90] hover:text-[#f0ece4]'}`
              }
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em' }}
            >
              {item.label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-[#a09a90] hover:text-[#f0ece4] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button onClick={openCart} className="relative text-[#a09a90] hover:text-[#f0ece4] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#c9a84c] text-[#0a0a09] text-[9px] font-semibold flex items-center justify-center" style={{ fontFamily: 'var(--font-mono)' }}>
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(v => !v)} className="md:hidden text-[#a09a90] hover:text-[#f0ece4] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d0c] border-t border-[#1e1e1c] px-6 py-5 flex flex-col gap-4">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-[#c9a84c]' : 'text-[#a09a90] hover:text-[#f0ece4]'}`
              }
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
            >
              {item.label.toUpperCase()}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
