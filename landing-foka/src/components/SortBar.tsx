import type { SortId } from '../types'

const SORT_OPTIONS: { id: SortId; label: string }[] = [
  { id: 'novidades', label: 'Novidades' },
  { id: 'menor', label: 'Menor preço' },
  { id: 'maior', label: 'Maior preço' },
  { id: 'desconto', label: 'Maior desconto' },
]

export default function SortBar({ value, onChange }: { value: SortId; onChange: (s: SortId) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#1e1e1c] pb-5">
      <span className="text-[#5a5a56] text-[10px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-mono)' }}>
        ORDENAR POR
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value as SortId)}
          className="appearance-none bg-[#151513] border border-[#2a2a28] px-4 py-2.5 pr-10 text-xs text-[#f0ece4] focus:outline-none focus:border-[#c9a84c] transition-colors cursor-pointer"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.id} value={o.id} className="bg-[#151513] text-[#f0ece4]">
              {o.label}
            </option>
          ))}
        </select>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5a5a56]"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  )
}
