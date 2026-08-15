import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSent(true) }
  }

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1510 0%, #0a0a09 50%, #100d05 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#c9a84c] text-[10px] tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          FIQUE POR DENTRO
        </p>
        <h2
          className="mb-4"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#f0ece4', lineHeight: 1 }}
        >
          Acesso antecipado<br />
          <span style={{ color: '#c9a84c' }}>às novas coleções.</span>
        </h2>
        <p className="text-[#5a5a56] mb-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          Cadastre-se e receba as novidades Foka antes de todo mundo, além de 10% de desconto na sua primeira compra.
        </p>

        {sent ? (
          <div className="border border-[#c9a84c]/30 py-4 px-6 inline-block">
            <span className="text-[#c9a84c] text-sm tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
              ✓ INSCRITO COM SUCESSO
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-[#151513] border border-[#2a2a28] border-r-0 px-4 py-3.5 text-base sm:text-xs text-[#f0ece4] placeholder:text-[#3a3a38] focus:outline-none focus:border-[#c9a84c] transition-colors"
              style={{ fontFamily: 'var(--font-mono)' }}
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#c9a84c] text-[#0a0a09] text-[10px] font-semibold tracking-widest hover:bg-[#d9b85c] transition-colors whitespace-nowrap"
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}
            >
              CADASTRAR
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
