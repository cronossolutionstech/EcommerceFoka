import { Link } from 'react-router-dom'

export default function PageBanner({
  kicker,
  title,
  description,
  image,
  count,
}: {
  kicker: string
  title: string
  description: string
  image: string
  count: string
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '360px', paddingTop: 'env(safe-area-inset-top)' }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.4) saturate(0.65)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a09 0%, transparent 55%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,9,0.7) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end py-14">
        <nav className="flex items-center gap-2 text-[10px] tracking-widest text-[#5a5a56] mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          <Link to="/" className="hover:text-[#c9a84c] transition-colors">INÍCIO</Link>
          <span className="text-[#3a3a38]">/</span>
          <span className="text-[#a09a90]">{title.toUpperCase()}</span>
        </nav>
        <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] mb-2 fade-up" style={{ fontFamily: 'var(--font-mono)' }}>
          {kicker}
        </p>
        <h1
          className="fade-up-2"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f0ece4', lineHeight: 0.95 }}
        >
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 fade-up-3">
          <p className="text-[#a09a90] text-sm leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
            {description}
          </p>
          <span className="text-[#c9a84c] text-xs tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
            {count.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  )
}
