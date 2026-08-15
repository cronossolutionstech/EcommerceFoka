export default function CartToast({ item, onClose }: { item: { name: string; img: string }; onClose: () => void }) {
  return (
    <div
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 z-50 flex items-center gap-3 border border-[#c9a84c]/40 bg-[#0d0d0c] px-4 sm:px-5 py-3.5 shadow-2xl"
      style={{ animation: 'fadeUp 0.3s ease both', bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <img src={item.img} alt="" className="w-10 h-12 object-cover object-top flex-shrink-0" />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <p className="flex-1 min-w-0 text-sm text-[#f0ece4] truncate" style={{ fontFamily: 'var(--font-sans)' }}>
        <span className="text-[#c9a84c]">{item.name}</span> adicionado à sacola
      </p>
      <button onClick={onClose} className="text-[#5a5a56] hover:text-[#f0ece4] ml-2 transition-colors">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
