import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatPrice } from '../../utils/formatPrice'
import './CheckoutPage.css'

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart()
  const { t, productName } = useLanguage()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    paymentMethod: 'cash',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = true
    if (!form.address.trim()) newErrors.address = true
    if (!form.city.trim()) newErrors.city = true
    if (!form.phone.trim()) newErrors.phone = true

    if (form.paymentMethod === 'credit' || form.paymentMethod === 'debit') {
      if (!form.cardNumber.trim()) newErrors.cardNumber = true
      if (!form.expiry.trim()) newErrors.expiry = true
      if (!form.cvv.trim()) newErrors.cvv = true
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    clearCart()
    navigate('/order-confirmation')
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>{t('cart.emptyTitle')}</h2>
        <p>{t('cart.emptyMessage')}</p>
        <Link to="/" className="checkout-continue-btn">
          {t('cart.continueShopping')}
        </Link>
      </div>
    )
  }

  const showCardFields = form.paymentMethod === 'credit' || form.paymentMethod === 'debit'

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">{t('checkout.title')}</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-section">
            <h2 className="checkout-section-title">{t('checkout.shipping')}</h2>
            <div className="checkout-field">
              <label htmlFor="name">{t('checkout.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder={t('checkout.name')}
              />
            </div>
            <div className="checkout-field">
              <label htmlFor="address">{t('checkout.address')}</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                className={errors.address ? 'input-error' : ''}
                placeholder={t('checkout.address')}
              />
            </div>
            <div className="checkout-field-row">
              <div className="checkout-field">
                <label htmlFor="city">{t('checkout.city')}</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={errors.city ? 'input-error' : ''}
                  placeholder={t('checkout.city')}
                />
              </div>
              <div className="checkout-field">
                <label htmlFor="phone">{t('checkout.phone')}</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'input-error' : ''}
                  placeholder={t('checkout.phone')}
                />
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section-title">{t('checkout.payment')}</h2>
            <div className="checkout-radio-group">
              <label className={`checkout-radio ${form.paymentMethod === 'cash' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={form.paymentMethod === 'cash'}
                  onChange={handleChange}
                />
                <span className="radio-indicator"></span>
                <span className="radio-label">{t('checkout.cashOnDelivery')}</span>
              </label>
              <label className={`checkout-radio ${form.paymentMethod === 'credit' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={form.paymentMethod === 'credit'}
                  onChange={handleChange}
                />
                <span className="radio-indicator"></span>
                <span className="radio-label">{t('checkout.creditCard')}</span>
              </label>
              <label className={`checkout-radio ${form.paymentMethod === 'debit' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debit"
                  checked={form.paymentMethod === 'debit'}
                  onChange={handleChange}
                />
                <span className="radio-indicator"></span>
                <span className="radio-label">{t('checkout.debitCard')}</span>
              </label>
            </div>

            {showCardFields && (
              <div className="checkout-card-fields">
                <div className="checkout-field">
                  <label htmlFor="cardNumber">{t('checkout.cardNumber')}</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    className={errors.cardNumber ? 'input-error' : ''}
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="checkout-field-row">
                  <div className="checkout-field">
                    <label htmlFor="expiry">{t('checkout.expiry')}</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      className={errors.expiry ? 'input-error' : ''}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="checkout-field">
                    <label htmlFor="cvv">{t('checkout.cvv')}</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.cvv}
                      onChange={handleChange}
                      className={errors.cvv ? 'input-error' : ''}
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="checkout-place-order-btn">
            {t('checkout.placeOrder')}
          </button>
          <Link to="/cart" className="checkout-back-link">
            {t('checkout.backToCart')}
          </Link>
        </form>

        <div className="checkout-summary">
          <h2 className="checkout-summary-title">{t('cart.summary')}</h2>
          <div className="checkout-summary-items">
            {cart.map(item => (
              <div key={item.id} className="checkout-summary-item">
                <div className="checkout-summary-item-info">
                  <span className="checkout-summary-item-name">{productName(item)}</span>
                  <span className="checkout-summary-item-qty">x{item.quantity}</span>
                </div>
                <span className="checkout-summary-item-price">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="checkout-summary-divider"></div>
          <div className="checkout-summary-total">
            <span>{t('cart.total')}</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
