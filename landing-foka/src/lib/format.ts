export const formatPrice = (n: number) =>
  n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

export const discountPct = (price: number, oldPrice: number | null) =>
  oldPrice ? Math.max(0, Math.round((1 - price / oldPrice) * 100)) : 0
