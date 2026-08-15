import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { CartItem, ColorOption, Product } from '../types'

interface Toast {
  name: string
  img: string
}

interface Store {
  cart: CartItem[]
  cartCount: number
  toast: Toast | null
  showCart: boolean
  quickView: Product | null
  addToCart: (product: Product, color: ColorOption, size: string, quantity: number) => void
  incCart: (key: string) => void
  decCart: (key: string) => void
  removeItem: (key: string) => void
  openCart: () => void
  closeCart: () => void
  openQuickView: (product: Product) => void
  closeQuickView: () => void
  dismissToast: () => void
}

const StoreContext = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [toast, setToast] = useState<Toast | null>(null)
  const [showCart, setShowCart] = useState(false)
  const [quickView, setQuickView] = useState<Product | null>(null)
  const toastTimer = useRef<number | null>(null)

  const cartCount = useMemo(() => cart.reduce((s, it) => s + it.quantity, 0), [cart])

  const dismissToast = useCallback(() => {
    if (toastTimer.current !== null) {
      window.clearTimeout(toastTimer.current)
      toastTimer.current = null
    }
    setToast(null)
  }, [])

  const addToCart = useCallback((product: Product, color: ColorOption, size: string, quantity: number) => {
    const key = `${product.id}-${color.name}-${size}`
    setCart(prev => {
      const existing = prev.find(it => it.key === key)
      if (existing) return prev.map(it => (it.key === key ? { ...it, quantity: it.quantity + quantity } : it))
      return [...prev, { key, product, color, size, quantity }]
    })
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current)
    setToast({ name: product.name, img: color.img })
    toastTimer.current = window.setTimeout(() => setToast(null), 3000)
  }, [])

  useEffect(
    () => () => {
      if (toastTimer.current !== null) window.clearTimeout(toastTimer.current)
    },
    [],
  )

  const incCart = useCallback((key: string) => {
    setCart(prev => prev.map(it => (it.key === key ? { ...it, quantity: it.quantity + 1 } : it)))
  }, [])

  const decCart = useCallback((key: string) => {
    setCart(prev => prev.map(it => (it.key === key ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it)))
  }, [])

  const removeItem = useCallback((key: string) => {
    setCart(prev => prev.filter(it => it.key !== key))
  }, [])

  const value = useMemo<Store>(
    () => ({
      cart,
      cartCount,
      toast,
      showCart,
      quickView,
      addToCart,
      incCart,
      decCart,
      removeItem,
      openCart: () => setShowCart(true),
      closeCart: () => setShowCart(false),
      openQuickView: product => setQuickView(product),
      closeQuickView: () => setQuickView(null),
      dismissToast,
    }),
    [cart, cartCount, toast, showCart, quickView, addToCart, incCart, decCart, removeItem, dismissToast],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): Store {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore deve ser usado dentro de StoreProvider')
  return ctx
}
