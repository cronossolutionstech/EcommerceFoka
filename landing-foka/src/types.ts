export type CategorySlug = 'camisas' | 'ternos' | 'calcas' | 'casual'

export type SortId = 'novidades' | 'menor' | 'maior' | 'desconto'

export interface ColorOption {
  name: string
  hex: string
  img: string
}

export interface Product {
  id: number
  name: string
  category: string
  categorySlug: CategorySlug
  price: number
  oldPrice: number | null
  tag: string
  tagColor: string
  images: string[]
  colors: ColorOption[]
  sizes: string[]
  alt: string
  description: string
  benefits: string[]
  featured?: boolean
}

export interface CartItem {
  key: string
  product: Product
  color: ColorOption
  size: string
  quantity: number
}

export interface Testimonial {
  name: string
  city: string
  text: string
  rating: number
}

export interface Category {
  name: string
  count: string
  img: string
  alt: string
  slug: CategorySlug
}

export interface NavItem {
  label: string
  to: string
}

export interface CategoryPageMeta {
  title: string
  kicker: string
  description: string
  banner: string
}
