import ProductCard from '../ProductCard/ProductCard'
import { useLanguage } from '../../context/LanguageContext'
import './ProductGrid.css'

export default function ProductGrid({ products, title, emptyMessage }) {
  const { t } = useLanguage()

  return (
    <div className="products-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="products-count">{products.length} {t('product.products')}</div>
      </div>
      <div className="products-grid">
        {products.length === 0 ? (
          <div className="no-results">
            <p>{emptyMessage || t('products.noResults')}</p>
            <span>Intenta con otra búsqueda o categoría</span>
          </div>
        ) : (
          products.map(item => <ProductCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}
