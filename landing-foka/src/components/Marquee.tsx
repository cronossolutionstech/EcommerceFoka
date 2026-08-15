import { MARQUEE_ITEMS } from '../data'

export default function Marquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
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
