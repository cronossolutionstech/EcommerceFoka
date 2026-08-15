# landing-foka

Ecommerce de roupas masculinas (FOKA) com páginas funcionais, carrinho e quick-view de produto.

## Scripts

- `npm run dev` — servidor de desenvolvimento Vite (porta 5173)
- `npm run build` — build de produção
- `npm run preview` — preview do build
- `npm run format` — formatação (oxfmt)

## Estrutura

- `src/main.tsx` — entrypoint React
- `src/App.tsx` — shell com HashRouter e rotas (Nav, Footer, QuickView, Carrinho, Toast)
- `src/context/StoreContext.tsx` — estado global (carrinho, toast, quick-view)
- `src/components/` — Nav, Footer, ProductCard, QuickView, CartPanel, CartToast, PageBanner, CategoryGrid, SortBar, Newsletter, Marquee, StarRating, ScrollToTop
- `src/pages/` — HomePage, ColecoesPage, CategoriaPage, PromocoesPage, NotFoundPage
- `src/data.ts` — produtos (com galeria, cores e tamanhos), categorias, páginas, nav
- `src/types.ts` — tipos compartilhados
- `src/lib/` — utilitários (format, useLockScroll)
- `src/index.css` — tema global (Tailwind v4 + fontes)

## Rotas

- `/` — Home
- `/colecoes` — todas as peças
- `/camisas`, `/ternos`, `/calcas`, `/casual` — páginas de categoria
- `/promocoes` — peças com desconto

## Convenções

- React 19 + Vite + Tailwind CSS v4 (`@tailwindcss/vite`), sem arquivo tailwind.config
- Roteamento com react-router-dom (HashRouter)
- Exportar componentes como default export
- Usar aspas duplas em strings com apóstrofos
- O projeto é standalone (sem integração Figma Make)
