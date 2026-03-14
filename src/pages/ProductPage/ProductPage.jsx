import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { getStockStatus, getStatusColor, calculateSavings } from '../../utils/stockHelpers'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import './ProductPage.css'

export default function ProductPage() {
  const { id } = useParams()
  const { stock, addToCart } = useCart()

  const product = stock.find(p => p.id === Number(id))

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return stock
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  }, [stock, product])

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  const status = getStockStatus(product)
  const savings = calculateSavings(product)

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span> / </span>
        <Link to={`/category/${encodeURIComponent(product.category)}`}>
          {product.category}
        </Link>
        <span> / </span>
        <span>{product.name}</span>
      </nav>

      <div className="product-detail">
        <div className="product-detail-image">
          <div className="image-placeholder-large">{product.name.charAt(0)}</div>
          {product.discount > 0 && (
            <div className="discount-badge-large">{product.discount}% OFF</div>
          )}
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-category">{product.category}</div>

          <div className="product-detail-price">
            {product.originalPrice && (
              <span className="original-price-large">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="current-price-large">{formatPrice(product.price)}</span>
            {savings > 0 && (
              <span className="savings-text-large">
                Te ahorrás {formatPrice(savings)}
              </span>
            )}
          </div>

          <div className="product-detail-stock">
            <span className="stock-label">Disponibilidad: </span>
            <span style={{ color: getStatusColor(status), fontWeight: 600 }}>
              {status === 'in-stock' && `${product.stock} ${product.unit} disponibles`}
              {status === 'low-stock' && `Solo quedan ${product.stock} ${product.unit}`}
              {status === 'out-of-stock' && 'Sin stock'}
            </span>
          </div>

          <div className="product-detail-unit">
            <span>Unidad de venta: </span>
            <strong>{product.unit}</strong>
          </div>

          <button
            className={`add-to-cart-btn-large ${status === 'out-of-stock' ? 'disabled' : ''}`}
            disabled={status === 'out-of-stock'}
            onClick={() => addToCart(product)}
          >
            {status === 'out-of-stock' ? 'Sin Stock' : 'Agregar al Carrito'}
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <ProductGrid
            products={relatedProducts}
            title="Productos Relacionados"
          />
        </div>
      )}
    </div>
  )
}
