import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { getStockStatus, getStatusColor } from '../../utils/stockHelpers'
import './ProductCard.css'

export default function ProductCard({ item }) {
  const { addToCart } = useCart()
  const status = getStockStatus(item)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(item)
  }

  return (
    <Link to={`/product/${item.id}`} className="product-card-link">
      <div className="product-card">
        {item.discount > 0 && (
          <div className="discount-badge">Precio reducido</div>
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
                <div className="price-now">
                  <span className="price-now-label">Ahora </span>
                  <span className="current-price">{formatPrice(item.price)}</span>
                </div>
                <span className="original-price">{formatPrice(item.originalPrice)}</span>
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
            onClick={handleAddToCart}
          >
            {status === 'out-of-stock' ? 'Sin Stock' : '+ Agregar'}
          </button>
        </div>
      </div>
    </Link>
  )
}
