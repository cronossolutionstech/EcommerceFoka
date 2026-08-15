import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1c] bg-[#080807] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span
              className="block text-xl tracking-[0.3em] text-[#f0ece4] mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              FOKA
            </span>
            <p className="text-[#5a5a56] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Moda masculina para quem não abre mão de qualidade e identidade.
            </p>
          </div>
          {[
            {
              title: 'Navegação',
              links: [
                { label: 'Coleções', to: '/colecoes' },
                { label: 'Camisas', to: '/camisas' },
                { label: 'Ternos', to: '/ternos' },
                { label: 'Promoções', to: '/promocoes' },
              ],
            },
            { title: 'Informações', links: ['Tamanhos', 'Cuidados', 'Devoluções', 'Rastrear Pedido'].map(label => ({ label, to: '#' })) },
            { title: 'Empresa', links: ['Sobre a Foka', 'Carreiras', 'Imprensa', 'Contato'].map(label => ({ label, to: '#' })) },
          ].map(col => (
            <div key={col.title}>
              <h5 className="text-[#f0ece4] text-[10px] tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                {col.title.toUpperCase()}
              </h5>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[#5a5a56] text-sm hover:text-[#a09a90] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e1e1c] pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#3a3a38] text-[10px] tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
            © 2026 FOKA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-5">
            {['Instagram', 'TikTok', 'Pinterest'].map(s => (
              <a key={s} href="#" className="text-[#3a3a38] text-[10px] tracking-wider hover:text-[#c9a84c] transition-colors" style={{ fontFamily: 'var(--font-mono)' }}>
                {s.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
