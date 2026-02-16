import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { useAuth } from '../../context/AuthContext'
import { categories } from '../../data/products'
import { categoryTranslationKeys } from '../../utils/categoryKeys'
import { formatPrice } from '../../utils/formatPrice'
import { locales } from '../../i18n'
import CartDropdown from '../CartDropdown/CartDropdown'
import superseisLogo from '../../assets/superseis-logo.png'
import './Header.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const cartRef = useRef(null)
  const langRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { getCartItemCount, getCartTotal } = useCart()
  const { t, locale, changeLocale } = useLanguage()
  const { isLoggedIn, toggleLogin } = useAuth()

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

  useEffect(() => {
    const handleLangClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangMenu(false)
      }
    }

    if (showLangMenu) {
      document.addEventListener('mousedown', handleLangClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleLangClickOutside)
    }
  }, [showLangMenu])

  useEffect(() => {
    setShowCart(false)
    setShowLangMenu(false)
  }, [location.pathname])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  const activeCategory = location.pathname === '/products'
    ? (searchParams.get('category') || null)
    : null
  const isAllActive = location.pathname === '/products' && !searchParams.get('category') && !searchParams.get('q') && !searchParams.get('deals') && !searchParams.get('new') && !searchParams.get('popular')

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-inner">
          <Link to="/" className="logo-link">
            <img src={superseisLogo} alt="Superseis" className="logo-img" />
            <span className="logo-text">Superseis</span>
          </Link>

          <form className="search-container" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder={t('header.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8.5 3a5.5 5.5 0 014.383 8.823l4.147 4.147a.75.75 0 01-1.06 1.06l-4.147-4.147A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z" fill="currentColor"/>
              </svg>
            </button>
          </form>

          <div className="header-actions">
            <div className="language-switcher" ref={langRef}>
              <button
                className="lang-toggle"
                onClick={() => setShowLangMenu(!showLangMenu)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                </svg>
                <span>{locale.toUpperCase()}</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showLangMenu && (
                <div className="lang-dropdown">
                  {locales.map(loc => (
                    <button
                      key={loc.code}
                      className={`lang-option ${locale === loc.code ? 'active' : ''}`}
                      onClick={() => {
                        changeLocale(loc.code)
                        setShowLangMenu(false)
                      }}
                    >
                      <span className="lang-code">{loc.code.toUpperCase()}</span>
                      <span className="lang-name">{loc.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="header-action-item account-btn" onClick={toggleLogin}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor"/>
              </svg>
              <div className="action-text">
                <span className="action-label">
                  {isLoggedIn ? t('header.loggedInAs') : t('header.signIn')}
                </span>
                <span className="action-title">
                  {isLoggedIn ? t('profile.user') : t('header.myAccount')}
                </span>
              </div>
            </button>

            <button
              className="header-action-item cart-btn"
              onClick={() => setShowCart(!showCart)}
            >
              <div className="cart-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25z" fill="currentColor"/>
                </svg>
                {getCartItemCount() > 0 && (
                  <span className="cart-badge">{getCartItemCount()}</span>
                )}
              </div>
              <span className="cart-price">{formatPrice(getCartTotal())}</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="nav-bar">
        <div className="nav-container">
          <Link
            to="/products"
            className={`nav-item ${isAllActive ? 'active' : ''}`}
          >
            {t('nav.all')}
          </Link>
          {categories.filter(cat => cat !== 'Todos').map(category => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className={`nav-item ${activeCategory === category ? 'active' : ''}`}
            >
              {t(categoryTranslationKeys[category])}
            </Link>
          ))}
          <span className="nav-item nav-more">
            {t('header.more')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </nav>

      {showCart && (
        <CartDropdown ref={cartRef} onClose={() => setShowCart(false)} />
      )}
    </header>
  )
}
