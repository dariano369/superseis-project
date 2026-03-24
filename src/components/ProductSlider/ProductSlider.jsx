import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import { useLanguage } from '../../context/LanguageContext'
import './ProductSlider.css'

export default function ProductSlider({ products, title, viewMoreLink }) {
  const { t } = useLanguage()
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    updateScrollButtons()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons)
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [products])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = 260 * 3
    el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  }

  if (!products || products.length === 0) return null

  return (
    <section className="product-slider-section">
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
        {viewMoreLink && (
          <Link to={viewMoreLink} className="slider-view-more">
            {t('home.viewMore')} &rsaquo;
          </Link>
        )}
      </div>
      <div className="slider-container">
        {canScrollLeft && (
          <button className="slider-arrow slider-arrow-left" onClick={() => scroll(-1)} aria-label="Scroll left">
            &#8249;
          </button>
        )}
        <div className="slider-track" ref={scrollRef}>
          {products.map(item => (
            <div className="slider-card" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button className="slider-arrow slider-arrow-right" onClick={() => scroll(1)} aria-label="Scroll right">
            &#8250;
          </button>
        )}
      </div>
    </section>
  )
}
