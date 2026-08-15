import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6" style={{ background: '#0a0a09', minHeight: '100dvh' }}>
      <div className="text-center">
        <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          ERRO 404
        </p>
        <h1
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 5rem)', color: '#f0ece4', lineHeight: 1 }}
        >
          Página não<br />
          <span style={{ color: '#c9a84c' }}>encontrada.</span>
        </h1>
        <p className="text-[#5a5a56] text-sm mt-6 mb-8" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 bg-[#c9a84c] text-[#0a0a09] text-xs font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors"
          style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
        >
          VOLTAR PARA A HOME
        </Link>
      </div>
    </section>
  )
}
