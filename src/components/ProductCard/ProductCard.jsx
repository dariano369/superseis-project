import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatPrice } from '../../utils/formatPrice'
import { getStockStatus, getStatusColor } from '../../utils/stockHelpers'
import './ProductCard.css'

export default function ProductCard({ item }) {
  const { addToCart } = useCart()
  const { t, productName } = useLanguage()
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
          <div className="discount-badge">{t('product.reducedPrice')}</div>
        )}
        {status === 'low-stock' && (
          <div className="low-stock-badge">{t('product.lowStock')}</div>
        )}
        {status === 'out-of-stock' && (
          <div className="out-stock-badge">{t('product.outOfStock')}</div>
        )}

        <div className="product-image">
          <div className="image-placeholder">{productName(item).charAt(0)}</div>
        </div>

        <div className="product-info">
          <h3 className="product-name">{productName(item)}</h3>
          <div className="product-category">{item.category}</div>

          <div className="price-container">
            {item.originalPrice ? (
              <>
                <div className="price-now">
                  <span className="price-now-label">{t('product.now')} </span>
                  <span className="current-price">{formatPrice(item.price)}</span>
                </div>
                <span className="original-price">{formatPrice(item.originalPrice)}</span>
              </>
            ) : (
              <span className="current-price">{formatPrice(item.price)}</span>
            )}
          </div>

          <div className="stock-info">
            <span className="stock-label">{t('product.availableStock')}</span>
            <span className="stock-value" style={{ color: getStatusColor(status) }}>
              {item.stock} {item.unit}
            </span>
          </div>

          <button
            className={`add-to-cart-btn ${status === 'out-of-stock' ? 'disabled' : ''}`}
            disabled={status === 'out-of-stock'}
            onClick={handleAddToCart}
          >
            {status === 'out-of-stock' ? t('product.noStock') : t('product.addToCart')}
          </button>
        </div>
      </div>
    </Link>
  )
}
