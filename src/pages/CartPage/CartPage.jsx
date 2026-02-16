import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatPrice } from '../../utils/formatPrice'
import CartItem from '../../components/CartItem/CartItem'
import './CartPage.css'

export default function CartPage() {
  const { cart, getCartTotal, getCartItemCount } = useCart()
  const { t } = useLanguage()

  if (cart.length === 0) {
    return (
      <div className="cart-page-empty">
        <h2>{t('cart.emptyTitle')}</h2>
        <p>{t('cart.emptyMessage')}</p>
        <Link to="/" className="continue-shopping-btn">
          {t('cart.continueShopping')}
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page-title">{t('cart.title')}</h1>
      <div className="cart-page-layout">
        <div className="cart-page-items">
          {cart.map(item => (
            <CartItem key={item.id} item={item} variant="full" />
          ))}
        </div>
        <div className="cart-page-summary">
          <h3>{t('cart.summary')}</h3>
          <div className="summary-row">
            <span>{t('cart.products')} ({getCartItemCount()})</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
          <div className="summary-row">
            <span>{t('cart.shipping')}</span>
            <span className="free-shipping">{t('cart.free')}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row summary-total">
            <span>{t('cart.total')}</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
          <button className="checkout-btn-large">{t('cart.checkout')}</button>
          <Link to="/" className="continue-shopping-link">
            {t('cart.continueShopping')}
          </Link>
        </div>
      </div>
    </div>
  )
}
