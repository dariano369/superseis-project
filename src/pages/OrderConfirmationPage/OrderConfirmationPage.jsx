import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import './OrderConfirmationPage.css'

export default function OrderConfirmationPage() {
  const { t } = useLanguage()

  return (
    <div className="order-confirmation-page">
      <div className="order-confirmation-card">
        <div className="order-confirmation-checkmark">
          <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25" fill="none" stroke="#4a8c2a" strokeWidth="2" />
            <path fill="none" stroke="#4a8c2a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M14 27l7 7 16-16" />
          </svg>
        </div>
        <h1 className="order-confirmation-title">{t('order.confirmed')}</h1>
        <p className="order-confirmation-message">{t('order.successMessage')}</p>
        <Link to="/" className="order-confirmation-btn">
          {t('order.continueShopping')}
        </Link>
      </div>
    </div>
  )
}
