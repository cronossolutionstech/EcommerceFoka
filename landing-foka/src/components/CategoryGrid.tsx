import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data'

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {CATEGORIES.map((c, i) => {
        const spans =
          i === 0
            ? 'md:row-span-2 md:col-span-1'
            : i === 1
              ? 'md:col-span-2'
              : 'md:col-span-1'
        const minH = i === 0 ? 480 : 230
        return (
          <Link
            key={c.slug}
            to={`/${c.slug}`}
            className={`${spans} group relative overflow-hidden bg-[#111110] cursor-pointer block`}
            style={{ minHeight: minH }}
          >
            <img
              src={c.img}
              alt={c.alt}
              className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ filter: i === 0 ? 'brightness(0.55)' : 'brightness(0.5)' }}
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(10,10,9,${i === 0 ? 0.85 : 0.8}) 0%, transparent 50%)` }} />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[#c9a84c] text-[10px] tracking-widest mb-1" style={{ fontFamily: 'var(--font-mono)' }}>{c.count}</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: i === 0 ? '2rem' : '1.75rem', color: '#f0ece4', lineHeight: 1 }}>{c.name}</h3>
              <span className="mt-3 inline-block text-xs tracking-widest text-[#a09a90] group-hover:text-[#c9a84c] transition-colors" style={{ fontFamily: 'var(--font-mono)' }}>
                EXPLORAR →
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
