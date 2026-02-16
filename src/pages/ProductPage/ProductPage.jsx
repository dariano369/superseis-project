import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { useToast } from '../../context/ToastContext'
import { usePageTitle } from '../../hooks/usePageTitle'
import { formatPrice } from '../../utils/formatPrice'
import { getStockStatus, getStatusColor, calculateSavings } from '../../utils/stockHelpers'
import { categoryTranslationKeys } from '../../utils/categoryKeys'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import './ProductPage.css'

export default function ProductPage() {
  const { id } = useParams()
  const { stock, addToCart } = useCart()
  const { t, productName } = useLanguage()
  const { addToast } = useToast()

  const product = stock.find(p => p.id === Number(id))
  usePageTitle(product ? productName(product) : t('detail.notFound'))

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return stock
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  }, [stock, product])

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>{t('detail.notFound')}</h2>
        <Link to="/">{t('detail.backHome')}</Link>
      </div>
    )
  }

  const status = getStockStatus(product)
  const savings = calculateSavings(product)

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <Link to="/">{t('detail.home')}</Link>
        <span> / </span>
        <Link to={`/products?category=${encodeURIComponent(product.category)}`}>
          {categoryTranslationKeys[product.category] ? t(categoryTranslationKeys[product.category]) : product.category}
        </Link>
        <span> / </span>
        <span>{productName(product)}</span>
      </nav>

      <div className="product-detail">
        <div className="product-detail-image">
          <div className="image-placeholder-large">{product.emoji || productName(product).charAt(0)}</div>
          {product.discount > 0 && (
            <div className="discount-badge-large">{product.discount}% OFF</div>
          )}
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{productName(product)}</h1>
          <div className="product-detail-category">
            {categoryTranslationKeys[product.category] ? t(categoryTranslationKeys[product.category]) : product.category}
          </div>

          <div className="product-detail-price">
            {product.originalPrice && (
              <span className="original-price-large">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="current-price-large">{formatPrice(product.price)}</span>
            {savings > 0 && (
              <span className="savings-text-large">
                {t('detail.youSave')} {formatPrice(savings)}
              </span>
            )}
          </div>

          <div className="product-detail-stock">
            <span className="stock-label">{t('detail.availability')} </span>
            <span style={{ color: getStatusColor(status), fontWeight: 600 }}>
              {status === 'in-stock' && `${product.stock} ${product.unit} ${t('detail.available')}`}
              {status === 'low-stock' && `${t('detail.onlyLeft')} ${product.stock} ${product.unit}`}
              {status === 'out-of-stock' && t('detail.noStock')}
            </span>
          </div>

          <div className="product-detail-unit">
            <span>{t('detail.salesUnit')} </span>
            <strong>{product.unit}</strong>
          </div>

          <button
            className={`add-to-cart-btn-large ${status === 'out-of-stock' ? 'disabled' : ''}`}
            disabled={status === 'out-of-stock'}
            onClick={() => { addToCart(product); addToast(`${productName(product)} — ${t('toast.addedToCart')}`) }}
          >
            {status === 'out-of-stock' ? t('product.noStock') : t('detail.addToCart')}
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <ProductGrid
            products={relatedProducts}
            title={t('detail.relatedProducts')}
          />
        </div>
      )}
    </div>
  )
}
