# GATE.md — Migração do E-commerce FOKA para WordPress + WooCommerce

> **Objetivo:** transformar o site/protótipo atual (React/Vite em `landing-foka`) em um e-commerce completo e funcional usando WordPress + WooCommerce, preservando 100% da identidade visual FOKA e as funcionalidades já validadas (carrinho, quick-view, cores, tamanhos, promoções, categorias).

## Premissas (ajuste se necessário)

- O site em `landing-foka` é o **mockup oficial de referência** (design, textos, produtos, fluxos).
- Produtos atuais: **16 peças** em 4 categorias (Camisas, Ternos, Calças, Casual) + página de **Promoções**.
- Atributos obrigatórios por produto: **Cor** (3 opções por peça) e **Tamanho** (P, M, G, GG, XGG).
- Desconto = diferença entre **preço de tabela** (de) e **preço de venda** (por), igual ao `oldPrice`/`price` do React.
- Público-alvo: Brasil → **Pix**, cartão e boleto; frete via **Correios**.
- Hospedagem: se ainda não definida, use o **localhost** até o Gate 9 (a definição não bloqueia os Gates 1–8).
- Idiomas: pt-BR.

## Mapeamento React → WordPress/WooCommerce

| Site atual (React) | WordPress + WooCommerce |
|---|---|
| `src/pages/HomePage.tsx` | Página Início (templates/blocos do tema filho) |
| `ColecoesPage`, `CategoriaPage` | Arquivos de categoria WooCommerce (`taxonomy-product_cat.php`) |
| `PromocoesPage` (badge de % off) | Categoria virtual "Promoções" + preço de tabela/venda + produto em promoção |
| `QuickView` (galeria, cores, tamanhos) | Quick view (JS custom ou plugin) + variações nativas |
| `CartPanel` / `CartToast` | AJAX add-to-cart + mini-carrinho WooCommerce |
| `ProductCard` (tag, preço, desconto) | Loop de produto WooCommerce (cards custom) |
| `data.ts` (16 produtos) | Produtos WooCommerce via CSV import |
| Nav (Coleções, Camisas, Ternos, Calças, Casual, Promoções) | Menu WordPress + termo "Promoções" |
| Newsletter | Plugin de newsletter/formulário |
| Depoimentos | Bloco customizado (CPT ou conteúdo) |

---

## Gate 0 — Fundação e ambiente local

**Objetivo:** ter um WordPress rodando localmente e uma estrutura de projeto versionada.

- [ ] Instalar ambiente local (XAMPP/Local WP/HerD — no WAMP já temos `www/`).
- [ ] Baixar o WordPress mais recente em `Ecommerce_Foka\wp-foka\`.
- [ ] Criar banco de dados `wp_foka` (utf8mb4) e usuário dedicado.
- [ ] Instalar WordPress e concluir setup com idioma pt-BR.
- [ ] Configurar `wp-config.php`: prefixo de tabelas `wp_`, `WP_DEBUG` ativo em local.
- [ ] Iniciar repositório git (ou usar o existente) e commit do estado limpo do WP.
- [ ] Definir estrutura de pastas: `wp-content/themes/foka/` (tema filho) e `wp-content/plugins/` (plugins).

**Definição de pronto:** `http://localhost/wp-foka` abre o painel; instalação base versionada no git.

---

## Gate 1 — Núcleo WordPress & estrutura

**Objetivo:** WordPress enxuto, seguro e com a estrutura de conteúdos da FOKA.

- [ ] Definir **páginas base**: Início, Coleções, Promoções, Tamanhos, Cuidados, Devoluções, Rastrear Pedido, Sobre a Foka, Contato.
- [ ] Definir **menus**: principal (Coleções, Camisas, Ternos, Calças, Casual, Promoções) e rodapé.
- [ ] Criar estrutura de **categorias** de produto WooCommerce: Camisas, Ternos, Calças, Casual.
- [ ] Ajustar `Permalinks` para `/loja/%product_cat%/%postname%/`.
- [ ] Limpar conteúdo padrão (posts de exemplo, temas de exemplo).
- [ ] Configurar timezone e moeda **BRL (R$)**.
- [ ] Escolher tema base (recomendado: **Blocksy** ou **GeneratePress** — leve e compatível) ou tema puro custom.

**Definição de pronto:** estrutura de páginas/menus/categorias criada; permalinks e moeda corretos; navegação "Início → Categoria" funcionando em placeholder.

---

## Gate 2 — Plugins essenciais

**Objetivo:** biblioteca mínima de plugins estáveis (sem inchaço).

- [ ] **WooCommerce** — núcleo do e-commerce.
- [ ] **WooCommerce Extra Checkout Fields** ou equivalente (campos de CPF/CNPJ no checkout).
- [ ] **WP Crontrol** (agendamentos) e **Query Monitor** (debug local).
- [ ] **Smush / EWWW** (otimização de imagem) — ou configurar manualmente no Gate 8.
- [ ] **WPS Hide Login** (ocultar `/wp-login.php` em produção).
- [ ] (Opcional) **Code Snippets** para CSS/JS via painel em vez de editar arquivos.
- [ ] Lista de plug-ins NÃO usar: page builders pesados (Elementor) e mega-plugins de "tudo em um".

**Definição de pronto:** plugins instalados e ativos; sem erros de compatibilidade com o PHP local.

---

## Gate 3 — Identidade visual FOKA (tema filho)

**Objetivo:** réplica fiel do visual atual em WordPress.

**Referência visual (copiar do `index.css` / `App.tsx`):**

| Elemento | Valor |
|---|---|
| Fundo principal | `#0a0a09` / `#0d0d0c` |
| Texto | `#f0ece4` |
| Dourado (destaques/CTA) | `#c9a84c` (hover `#d9b85c`) |
| Texto secundário | `#a09a90` / `#5a5a56` / `#3a3a38` |
| Bordas | `#1e1e1c` |
| Fonte display (títulos) | Abril Fatface |
| Fonte corpo | Outfit (300–600) |
| Fonte mono (labels/CTAs) | DM Mono |

- [ ] Criar **tema filho** `foka` (child theme) com `functions.php`, `style.css`, `theme.json`.
- [ ] Carregar fontes (Google Fonts enqueue em `functions.php` ou upload local p/ performance).
- [ ] Aplicar paleta global (Customizer ou `theme.json`).
- [ ] Header custom: logo FOKA (display), menu principal, ícones (busca, carrinho com contador, hambúrguer mobile), safe-area/top fixo.
- [ ] Footer custom: 4 colunas (marca + Navegação + Informações + Empresa), copyright e redes sociais.
- [ ] Botões/CTAs globais: mono, tracking wide, dourado; hover definido.
- [ ] Tipografia de títulos com `clamp()` (responsivo igual ao React).

**Definição de pronto:** header/footer/cores/fontes idênticos ao `landing-foka` em qualquer página; paridade visual conferida lado a lado.

---

## Gate 4 — Páginas e templates

**Objetivo:** todas as páginas da loja com o layout do site atual.

- [ ] **Início** — Hero (100dvh), Marquee, Categorias (4 cards), Destaques (grid 2/4 col), Banner campanha, Diferenciais, Depoimentos, Newsletter.
- [ ] **Coleções** — banner + grade de categorias + catálogo completo.
- [ ] **Página de categoria** (Camisas/Ternos/Calças/Casual) — banner com breadcrumb, ordenação (Novidades/Menor/Maior/Maior desconto), grid de cards.
- [ ] **Promoções** — filtro de produtos com preço de tabela > venda; badge `-X%`.
- [ ] **Página de produto** — galeria (3 imagens), nome, preço de/por, cor + tamanho (variações), quantidade, "ADICIONAR À SACOLA", benefícios, avaliações.
- [ ] **Quick view** no grid (JS custom ou plugin) com galeria/cores/tamanhos.
- [ ] **Carrinho** e **mini-carrinho** com AJAX (toast "adicionado à sacola").
- [ ] **Checkout** (página padrão WooCommerce estilizada).
- [ ] **Busca** (resultados com cards de produto), **404** e **página "sem resultados"** estilizadas.

**Definição de pronto:** navegando pelos templates, todas as seções do `landing-foka` existem em WP com o mesmo comportamento.

---

## Gate 5 — Catálogo completo (16 produtos)

**Objetivo:** migrar todos os produtos do `src/data.ts` para WooCommerce.

- [ ] Criar **atributos globais**: `Cor` (preto, grafite, azul-noite, caramelo, etc.) e `Tamanho` (P, M, G, GG, XGG).
- [ ] Criar variações por produto: combinações cor × tamanho.
- [ ] Cadastrar para cada produto: nome, categoria, descrição, benefícios (lista), tags (Novo/Essencial/Promoção/Exclusivo/Bestseller), alt das imagens.
- [ ] Cadastrar **preço de tabela (de)** e **preço de venda (por)** → gera desconto automático.
- [ ] Subir as 3 imagens por produto (baixar do Unsplash p/ a mídia do WP — nunca hotlink).
- [ ] **(Alternativa recomendada)** montar **CSV de importação** (WooCommerce > Produtos > Importar) com produtos + variações.
- [ ] Conferir estoque mínimo por tamanho (simular poucas unidades em "Promoção").
- [ ] Tag/categoria virtual **Promoções** vinculada aos produtos com preço de tabela.

**Definição de pronto:** 16 produtos ativos, variações funcionais, preços de/por corretos e páginas de categoria populadas.

---

## Gate 6 — Checkout, pagamento & frete (Brasil)

**Objetivo:** vender de verdade (ou em sandbox) com gateways e Correios.

**Pagamento**
- [ ] Escolher gateway: **Mercado Pago**, **PagSeguro**, **Appmax** ou **Stone** (depende do CNPJ/banco).
- [ ] Configurar **Pix**, **cartão de crédito** e **boleto** em modo sandbox/homologação.
- [ ] Configurar **taxas/regras de imposto** (simples: preço já inclui impostos — definir CFOP/NCM por categoria).
- [ ] Testar fluxo completo: carrinho → checkout → pagamento sandbox → status do pedido.

**Frete**
- [ ] Plugin **Correios (Melhor Envio ou Correios Calc)** — cálculo por CEP.
- [ ] Configurar dimensões/peso padrão por produto (ou por categoria).
- [ ] Promoção "FRETE GRÁTIS" acima de valor X (regra de cupom/envio).
- [ ] Definir prazo estimado exibido no carrinho.

**Pós-venda**
- [ ] E-mail de confirmação de pedido (modelo WooCommerce pt-BR).
- [ ] Notificação de pagamento aprovado (webhooks do gateway).
- [ ] Página "Rastrear Pedido" vinculada ao status/envio.

**Definição de pronto:** pedido de teste concluído em sandbox com cobrança simulada + cálculo de frete por CEP + e-mail de confirmação.

---

## Gate 7 — Conteúdo, newsletter & SEO

**Objetivo:** presença editorial e encontrabilidade.

- [ ] **Newsletter** — plugin (Klaviyo/Mailchimp/Brevo) ou formulário próprio; seção "Acesso antecipado" com estado de sucesso.
- [ ] **Depoimentos** — bloco/CPT replicando as 3 avaliações; depois migrar para avaliações reais de produto.
- [ ] **Lookbook/editorial** — 2–3 artigos do blog para SEO (substitui o botão "LOOKBOOK").
- [ ] **SEO**: RankMath ou Yoast — título/descrição por página, OpenGraph, `sitemap.xml`, schema de `Product` e `Store`.
- [ ] **URLs limpas** e canonical (cuidado com paginação de categoria).
- [ ] **Alt text** em todas as imagens de produto.
- [ ] Redirecionamento de URLs do protótipo (ex.: `/promocoes` → `/promocoes/`).

**Definição de pronto:** sitemap válido no Google (indexação ok), newsletter captando, OpenGraph correto ao compartilhar no WhatsApp/Instagram.

---

## Gate 8 — Performance, segurança & backups

**Objetivo:** loja rápida e segura.

- [ ] Otimizar imagens (WebP, tamanhos responsivos; reutilizar `w=`/`h=` do Unsplash como referência de proporção).
- [ ] **Cache**: LiteSpeed Cache ou WP Super Cache + cache de página do tema.
- [ ] **Lazy-load** de imagens do grid (igual ao padrão atual).
- [ ] **Fontes**: servir Google Fonts com `display=swap` e pré-conexão, ou self-host.
- [ ] CSS/JS críticos: enfileirar apenas o necessário (desativar plugins não usados).
- [ ] SSL (**https**) em produção.
- [ ] **Segurança**: senhas fortes, `WPS Hide Login`, limitar tentativas de login, firewall básico, ocultar versão do WP.
- [ ] **Backups** automáticos (UpdraftPlus) — banco + arquivos, diário; teste de restauração.
- [ ] Meta **robots** para páginas administrativas/pesquisa interna.

**Definição de pronto:** Lighthouse ≥ 85 em mobile; página inicial < 2s; backup restaurado com sucesso em ambiente de teste.

---

## Gate 9 — QA, homologação & lançamento

**Objetivo:** validar tudo antes de abrir as portas.

**QA funcional (checklist)**
- [ ] Navegação em todas as páginas (menu desktop + mobile).
- [ ] Adicionar ao carrinho via quick view e card; contador do carrinho atualiza.
- [ ] Mudar cor/tamanho; validar erro "selecione um tamanho".
- [ ] Cupom de desconto + frete grátis no checkout.
- [ ] Pedido teste com Pix, cartão e boleto (sandbox).
- [ ] Tela **mobile** (320px–430px): sem scroll horizontal, `100dvh`, safe-areas, input ≥ 16px (sem zoom iOS).
- [ ] `prefers-reduced-motion` respeitado (marquee/animações).
- [ ] 404, busca sem resultado, categoria vazia.

**Homologação**
- [ ] Subir para **staging** (subdomínio `homologacao.foka.com.br`) e repetir o QA no ar.
- [ ] Testar em 2 dispositivos reais (celular + desktop) e 2 navegadores.
- [ ] Migração final de produção (se houver ambiente já em uso).

**Lançamento**
- [ ] Registrar/apontar domínio e DNS (A/CNAME + SSL).
- [ ] Desativar `WP_DEBUG` e ativar cache/segurança.
- [ ] Redirecionar/limpar ambiente local de referência.
- [ ] Ferramentas de analytics (GA4 + Search Console) e monitoramento de uptime.
- [ ] Checklist pós-lançamento em 24h: pedidos chegando, e-mails saindo, backups rodando, pagamento aprovando.

**Definição de pronto:** loja pública no domínio final, sem erros, com 1 pedido real concluído de ponta a ponta.

---

## Resumo de dependências

```
Gate 0 ─► Gate 1 ─► Gate 2 ─► Gate 3 ─► Gate 4 ─► Gate 5 ─► Gate 6 ─► Gate 7 ─► Gate 8 ─► Gate 9
  (base)   (estrutura) (plugins) (visual)  (páginas)  (catálogo) (pagamento/frete) (SEO)  (perf/seg)  (QA/lançamento)
```

- Gates 3 e 4 podem rodar em paralelo com o Gate 5 (importação de produtos não depende do visual).
- Gate 6 depende do Gate 5 (precisa de produto para testar checkout).
- Gate 9 só após todos os demais.

## Padrão de trabalho

- Commitar a cada Gate concluído (mensagens em pt-BR, estilo do repo).
- Manter o `landing-foka` como referência visual até o Gate 9.
- Toda mudança de design passa primeiro pelo mockup React (é mais barato validar lá).
- Ao final, atualizar este arquivo marcando os checkboxes e registrando decisões tomadas.
