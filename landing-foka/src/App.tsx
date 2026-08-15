import { HashRouter, Route, Routes } from 'react-router-dom'
import { StoreProvider, useStore } from './context/StoreContext'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Footer from './components/Footer'
import QuickView from './components/QuickView'
import CartPanel from './components/CartPanel'
import CartToast from './components/CartToast'
import HomePage from './pages/HomePage'
import ColecoesPage from './pages/ColecoesPage'
import CategoriaPage from './pages/CategoriaPage'
import PromocoesPage from './pages/PromocoesPage'
import NotFoundPage from './pages/NotFoundPage'

function Shell() {
  const {
    cart,
    quickView,
    closeQuickView,
    addToCart,
    showCart,
    closeCart,
    incCart,
    decCart,
    removeItem,
    toast,
    dismissToast,
  } = useStore()

  return (
    <div style={{ background: '#0a0a09', minHeight: '100vh' }}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colecoes" element={<ColecoesPage />} />
        <Route path="/camisas" element={<CategoriaPage slug="camisas" />} />
        <Route path="/ternos" element={<CategoriaPage slug="ternos" />} />
        <Route path="/calcas" element={<CategoriaPage slug="calcas" />} />
        <Route path="/casual" element={<CategoriaPage slug="casual" />} />
        <Route path="/promocoes" element={<PromocoesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

      {quickView && (
        <QuickView
          key={quickView.id}
          product={quickView}
          onClose={closeQuickView}
          onAdd={addToCart}
        />
      )}
      {showCart && (
        <CartPanel
          items={cart}
          onClose={closeCart}
          onInc={incCart}
          onDec={decCart}
          onRemove={removeItem}
        />
      )}
      {toast && <CartToast item={toast} onClose={dismissToast} />}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <ScrollToTop />
        <Shell />
      </StoreProvider>
    </HashRouter>
  )
}
