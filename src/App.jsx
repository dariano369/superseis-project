import { Routes, Route, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function CategoryRedirect() {
  const { categoryName } = useParams()
  return <Navigate to={`/products?category=${categoryName}`} replace />
}

function SearchRedirect() {
  const [searchParams] = useSearchParams()
  return <Navigate to={`/products?q=${searchParams.get('q') || ''}`} replace />
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/category/:categoryName" element={<CategoryRedirect />} />
              <Route path="/search" element={<SearchRedirect />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App
