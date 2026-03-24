import { useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { categories } from '../../data/products'
import { filterProducts } from '../../utils/productFilters'
import { categoryTranslationKeys } from '../../utils/categoryKeys'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductsPage.css'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { stock } = useCart()
  const { t } = useLanguage()

  const filters = useMemo(() => ({
    category: searchParams.get('category') || 'Todos',
    search: searchParams.get('q') || '',
    deals: searchParams.get('deals') === 'true',
    newArrivals: searchParams.get('new') === 'true',
    popular: searchParams.get('popular') === 'true',
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    stockStatus: searchParams.get('stock') || '',
    sort: searchParams.get('sort') || '',
  }), [searchParams])

  const filteredProducts = useMemo(() => filterProducts(stock, filters), [stock, filters])

  const updateFilter = useCallback((key, value) => {
    const params = new URLSearchParams(searchParams)
    if (!value || value === 'Todos' || value === '' || value === 'false' || value === false) {
      params.delete(key)
    } else {
      params.set(key, String(value))
    }
    setSearchParams(params)
  }, [searchParams, setSearchParams])

  const clearFilters = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  let pageTitle = t('nav.all')
  if (filters.search) pageTitle = `${t('products.resultsFor')}: "${filters.search}"`
  else if (filters.deals) pageTitle = t('home.hottestDeals')
  else if (filters.newArrivals) pageTitle = t('home.newArrivals')
  else if (filters.popular) pageTitle = t('home.popularItems')
  else if (filters.category !== 'Todos') {
    const key = categoryTranslationKeys[filters.category]
    pageTitle = key ? t(key) : filters.category
  }

  const hasActiveFilters = filters.category !== 'Todos' || filters.search || filters.deals ||
    filters.newArrivals || filters.popular || filters.minPrice !== undefined ||
    filters.maxPrice !== undefined || filters.stockStatus || filters.sort

  return (
    <div className="products-page">
      <aside className="filters-sidebar">
        <div className="filters-header">
          <h3>{t('products.filters')}</h3>
          {hasActiveFilters && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              {t('products.clearFilters')}
            </button>
          )}
        </div>

        <div className="filter-group">
          <h4>{t('products.category')}</h4>
          {categories.map(cat => (
            <label key={cat} className={`filter-option ${filters.category === cat ? 'active' : ''}`}>
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => updateFilter('category', cat)}
              />
              <span>{t(categoryTranslationKeys[cat]) || cat}</span>
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h4>{t('products.priceRange')}</h4>
          <div className="price-inputs">
            <input
              type="number"
              placeholder={t('products.minPrice')}
              value={searchParams.get('minPrice') || ''}
              onChange={(e) => updateFilter('minPrice', e.target.value)}
            />
            <span className="price-separator">-</span>
            <input
              type="number"
              placeholder={t('products.maxPrice')}
              value={searchParams.get('maxPrice') || ''}
              onChange={(e) => updateFilter('maxPrice', e.target.value)}
            />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={filters.deals}
              onChange={(e) => updateFilter('deals', e.target.checked ? 'true' : '')}
            />
            <span>{t('products.showDeals')}</span>
          </label>
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={filters.newArrivals}
              onChange={(e) => updateFilter('new', e.target.checked ? 'true' : '')}
            />
            <span>{t('products.showNew')}</span>
          </label>
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={filters.popular}
              onChange={(e) => updateFilter('popular', e.target.checked ? 'true' : '')}
            />
            <span>{t('products.showPopular')}</span>
          </label>
        </div>

        <div className="filter-group">
          <h4>{t('products.stockStatus')}</h4>
          <select
            value={filters.stockStatus}
            onChange={(e) => updateFilter('stock', e.target.value)}
            className="filter-select"
          >
            <option value="">{t('products.allStock')}</option>
            <option value="in-stock">{t('products.inStock')}</option>
            <option value="low-stock">{t('products.lowStock')}</option>
          </select>
        </div>

        <div className="filter-group">
          <h4>{t('products.sortBy')}</h4>
          <select
            value={filters.sort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="filter-select"
          >
            <option value="">{t('products.sortDefault')}</option>
            <option value="price-asc">{t('products.sortPriceAsc')}</option>
            <option value="price-desc">{t('products.sortPriceDesc')}</option>
            <option value="discount">{t('products.sortDiscount')}</option>
            <option value="name">{t('products.sortName')}</option>
          </select>
        </div>
      </aside>

      <div className="products-main">
        <div className="products-main-header">
          <h2>{pageTitle}</h2>
          <span className="products-count-text">
            {filteredProducts.length} {t('product.products')}
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <h3>{t('products.noResults')}</h3>
            <p>{t('products.tryAnother')}</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
