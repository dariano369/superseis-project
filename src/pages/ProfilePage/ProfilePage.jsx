import { useLanguage } from '../../context/LanguageContext'
import './ProfilePage.css'

export default function ProfilePage() {
  const { t } = useLanguage()

  return (
    <div className="profile-page">
      <h1 className="profile-title">{t('profile.title')}</h1>
      <div className="profile-card">
        <div className="profile-avatar">
          <span>👤</span>
        </div>
        <div className="profile-info">
          <h2>{t('profile.user')}</h2>
          <p>usuario@email.com</p>
        </div>
      </div>
      <div className="profile-sections">
        <div className="profile-section">
          <h3>{t('profile.orders')}</h3>
          <p>{t('profile.noOrders')}</p>
        </div>
        <div className="profile-section">
          <h3>{t('profile.addresses')}</h3>
          <p>{t('profile.noAddresses')}</p>
        </div>
        <div className="profile-section">
          <h3>{t('profile.payments')}</h3>
          <p>{t('profile.noPayments')}</p>
        </div>
      </div>
    </div>
  )
}
