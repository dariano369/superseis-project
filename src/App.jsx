import { useState, useMemo, useEffect, useRef } from 'react'
import './App.css'

// Sample stock data with typical Paraguayan supermarket products
const initialStock = [
  // Carnes y Aves
  { id: 1, name: 'Asado', category: 'Carnes y Aves', price: 15000, originalPrice: 18000, stock: 45, unit: 'kg', status: 'in-stock', discount: 17 },
  { id: 2, name: 'Pollo Entero', category: 'Carnes y Aves', price: 8500, originalPrice: 9500, stock: 32, unit: 'kg', status: 'in-stock', discount: 11 },
  { id: 3, name: 'Chorizo Paraguayo', category: 'Carnes y Aves', price: 12000, originalPrice: null, stock: 18, unit: 'kg', status: 'low-stock', discount: 0 },
  { id: 4, name: 'Vacio', category: 'Carnes y Aves', price: 18000, originalPrice: null, stock: 28, unit: 'kg', status: 'in-stock', discount: 0 },
  
  // Lacteos
  { id: 5, name: 'Leche Entera La Vaqueita', category: 'Lácteos', price: 5200, originalPrice: 5800, stock: 120, unit: 'unidades', status: 'in-stock', discount: 10 },
  { id: 6, name: 'Queso Paraguay', category: 'Lácteos', price: 9500, originalPrice: null, stock: 8, unit: 'kg', status: 'low-stock', discount: 0 },
  { id: 7, name: 'Manteca La Paulina', category: 'Lácteos', price: 4800, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 8, name: 'Yogur Natural', category: 'Lácteos', price: 3500, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0 },
  
  // Frutas y Verduras
  { id: 9, name: 'Mandarina', category: 'Frutas y Verduras', price: 4500, originalPrice: null, stock: 52, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 10, name: 'Tomate', category: 'Frutas y Verduras', price: 3800, originalPrice: 4500, stock: 68, unit: 'kg', status: 'in-stock', discount: 16 },
  { id: 11, name: 'Cebolla', category: 'Frutas y Verduras', price: 2500, originalPrice: null, stock: 85, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 12, name: 'Locoto', category: 'Frutas y Verduras', price: 8000, originalPrice: null, stock: 15, unit: 'kg', status: 'low-stock', discount: 0 },
  { id: 13, name: 'Zapallo', category: 'Frutas y Verduras', price: 3200, originalPrice: null, stock: 42, unit: 'kg', status: 'in-stock', discount: 0 },
  
  // Bebidas
  { id: 14, name: 'Coca Cola 2L', category: 'Bebidas', price: 7500, originalPrice: 8500, stock: 150, unit: 'unidades', status: 'in-stock', discount: 12 },
  { id: 15, name: 'Tereré Orgánico', category: 'Bebidas', price: 12000, originalPrice: null, stock: 58, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 16, name: 'Cerveza Brahma', category: 'Bebidas', price: 8500, originalPrice: null, stock: 200, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 17, name: 'Jugo Pulp', category: 'Bebidas', price: 4200, originalPrice: null, stock: 5, unit: 'unidades', status: 'low-stock', discount: 0 },
  { id: 18, name: 'Agua Mineral', category: 'Bebidas', price: 2800, originalPrice: null, stock: 180, unit: 'unidades', status: 'in-stock', discount: 0 },
  
  // Almacén
  { id: 19, name: 'Arroz Doña Berta', category: 'Almacén', price: 6500, originalPrice: 7200, stock: 85, unit: 'unidades', status: 'in-stock', discount: 10 },
  { id: 20, name: 'Fideos Lucchetti', category: 'Almacén', price: 3200, originalPrice: null, stock: 110, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 21, name: 'Aceite Girasol', category: 'Almacén', price: 9800, originalPrice: 11000, stock: 72, unit: 'unidades', status: 'in-stock', discount: 11 },
  { id: 22, name: 'Azúcar Refinada', category: 'Almacén', price: 5500, originalPrice: null, stock: 12, unit: 'unidades', status: 'low-stock', discount: 0 },
  { id: 23, name: 'Harina de Trigo', category: 'Almacén', price: 4200, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 24, name: 'Sal Fina', category: 'Almacén', price: 2100, originalPrice: null, stock: 130, unit: 'unidades', status: 'in-stock', discount: 0 },
  
  // Panadería
  { id: 25, name: 'Pan de Miga', category: 'Panadería', price: 5000, originalPrice: null, stock: 45, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 26, name: 'Chipá', category: 'Panadería', price: 3500, originalPrice: 4000, stock: 6, unit: 'unidades', status: 'low-stock', discount: 13 },
  { id: 27, name: 'Tortilla Paraguaya', category: 'Panadería', price: 4500, originalPrice: null, stock: 28, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 28, name: 'Medialunas', category: 'Panadería', price: 2800, originalPrice: null, stock: 38, unit: 'unidades', status: 'in-stock', discount: 0 },
  
  // Limpieza
  { id: 29, name: 'Detergente Ala', category: 'Limpieza', price: 8500, originalPrice: 9800, stock: 65, unit: 'unidades', status: 'in-stock', discount: 13 },
  { id: 30, name: 'Jabón en Polvo', category: 'Limpieza', price: 12000, originalPrice: null, stock: 42, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 31, name: 'Papel Higiénico Elite', category: 'Limpieza', price: 15500, originalPrice: 18000, stock: 9, unit: 'unidades', status: 'low-stock', discount: 14 },
  { id: 32, name: 'Limpiador Multiuso', category: 'Limpieza', price: 6800, originalPrice: null, stock: 55, unit: 'unidades', status: 'in-stock', discount: 0 },
]

const categories = ['Todos', 'Carnes y Aves', 'Lácteos', 'Frutas y Verduras', 'Bebidas', 'Almacén', 'Panadería', 'Limpieza']

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [stock] = useState(initialStock)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const cartRef = useRef(null)

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        const cartButton = event.target.closest('.cart-btn')
        if (!cartButton) {
          setShowCart(false)
        }
      }
    }

    if (showCart) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCart])

  const filteredStock = useMemo(() => {
    return stock.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, stock])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-PY', { 
      style: 'currency', 
      currency: 'PYG',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('PYG', '₲')
  }

  const getStockStatus = (item) => {
    if (item.stock === 0) return 'out-of-stock'
    if (item.stock <= 10) return 'low-stock'
    return 'in-stock'
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-stock': return '#00a650'
      case 'low-stock': return '#ff9500'
      case 'out-of-stock': return '#e60012'
      default: return '#6b7280'
    }
  }

  const calculateSavings = (item) => {
    if (item.originalPrice) {
      return item.originalPrice - item.price
    }
    return 0
  }

  const addToCart = (product) => {
    const status = getStockStatus(product)
    if (status === 'out-of-stock') return

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        // If item exists, increase quantity (but check stock)
        if (existingItem.quantity < product.stock) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return prevCart
      } else {
        // Add new item to cart
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })

    // Show cart briefly
    setShowCart(true)
    setTimeout(() => setShowCart(false), 2000)
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const product = stock.find(p => p.id === productId)
          // Don't allow more than available stock
          const maxQuantity = product ? product.stock : item.quantity
          return { ...item, quantity: Math.min(newQuantity, maxQuantity) }
        }
        return item
      })
    )
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="logo-container">
            <span className="logo">SUPERSEIS</span>
          </div>
          <div className="header-actions">
            <button className="header-btn">
              <span className="icon">👤</span>
              <span className="text">Mi Cuenta</span>
            </button>
            <button 
              className="header-btn cart-btn"
              onClick={() => setShowCart(!showCart)}
            >
              <span className="icon">🛒</span>
              <span className="text">Carrito</span>
              {getCartItemCount() > 0 && (
                <span className="badge">{getCartItemCount()}</span>
              )}
            </button>
          </div>
        </div>
        <div className="header-search">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar productos, marcas o descripciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
        <nav className="nav-bar">
          <div className="nav-container">
            {categories.filter(cat => cat !== 'Todos').map(category => (
              <button
                key={category}
                className={`nav-item ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Cart Dropdown */}
        {showCart && (
          <div ref={cartRef} className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="cart-dropdown-header">
              <h3>Carrito de Compras</h3>
              <button className="close-cart-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            {cart.length === 0 ? (
              <div className="cart-empty">
                <p>Tu carrito está vacío</p>
                <span>Agrega productos para comenzar</span>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <div className="cart-item-price">{formatPrice(item.price)}</div>
                      </div>
                      <div className="cart-item-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="cart-quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                        >
                          +
                        </button>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span className="cart-total-price">{formatPrice(getCartTotal())}</span>
                  </div>
                  <button className="checkout-btn">Finalizar Compra</button>
                </div>
              </>
            )}
          </div>
        )}
      </header>

      <main className="main-content">
        {selectedCategory === 'Todos' && (
          <div className="banner-section">
            <div className="banner">
              <h2>Ofertas Especiales</h2>
              <p>Aprovecha nuestros descuentos en productos seleccionados</p>
            </div>
          </div>
        )}

        <div className="products-section">
          <div className="section-header">
            <h2 className="section-title">
              {selectedCategory === 'Todos' ? 'Productos Destacados' : selectedCategory}
            </h2>
            <div className="products-count">{filteredStock.length} productos</div>
          </div>

          <div className="products-grid">
            {filteredStock.length === 0 ? (
              <div className="no-results">
                <p>No se encontraron productos</p>
                <span>Intenta con otra búsqueda o categoría</span>
              </div>
            ) : (
              filteredStock.map(item => {
                const status = getStockStatus(item)
                const savings = calculateSavings(item)
                return (
                  <div key={item.id} className="product-card">
                    {item.discount > 0 && (
                      <div className="discount-badge">
                        {item.discount}% OFF
                      </div>
                    )}
                    {status === 'low-stock' && (
                      <div className="low-stock-badge">Stock bajo</div>
                    )}
                    {status === 'out-of-stock' && (
                      <div className="out-stock-badge">Agotado</div>
                    )}
                    
                    <div className="product-image">
                      <div className="image-placeholder">{item.name.charAt(0)}</div>
                    </div>
                    
                    <div className="product-info">
                      <h3 className="product-name">{item.name}</h3>
                      <div className="product-category">{item.category}</div>
                      
                      <div className="price-container">
                        {item.originalPrice ? (
                          <>
                            <span className="original-price">{formatPrice(item.originalPrice)}</span>
                            <span className="current-price">{formatPrice(item.price)}</span>
                            {savings > 0 && (
                              <span className="savings-text">Te ahorrás {formatPrice(savings)}</span>
                            )}
                          </>
                        ) : (
                          <span className="current-price">{formatPrice(item.price)}</span>
                        )}
                      </div>
                      
                      <div className="stock-info">
                        <span className="stock-label">Stock disponible:</span>
                        <span className="stock-value" style={{ color: getStatusColor(status) }}>
                          {item.stock} {item.unit}
                        </span>
                      </div>
                      
                      <button 
                        className={`add-to-cart-btn ${status === 'out-of-stock' ? 'disabled' : ''}`}
                        disabled={status === 'out-of-stock'}
                        onClick={() => addToCart(item)}
                      >
                        {status === 'out-of-stock' ? 'Sin Stock' : 'Agregar'}
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Acerca de Superseis</h4>
            <ul>
              <li>Nuestra Historia</li>
              <li>Sucursales</li>
              <li>Trabaja con Nosotros</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Atención al Cliente</h4>
            <ul>
              <li>Preguntas Frecuentes</li>
              <li>Envíos y Entregas</li>
              <li>Devoluciones</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>Teléfono: (021) 123-456</li>
              <li>Email: contacto@superseis.com.py</li>
              <li>Horarios: Lunes a Domingo 8:00 - 22:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Superseis. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
