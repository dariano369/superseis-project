import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import './Banner.css'

export default function Banner() {
  const { t } = useLanguage()

  return (
    <div className="banner-section">
      <div className="banner">
        <div className="banner-content">
          <p className="banner-eyebrow">{t('banner.eyebrow')}</p>
          <h2 className="banner-title">{t('banner.title')}</h2>
          <Link to="/products" className="banner-cta">{t('banner.cta')}</Link>
        </div>
      </div>

      <div className="deals-header">
        <div>
          <h3 className="deals-title">{t('banner.dealsTitle')}</h3>
          <p className="deals-subtitle">{t('banner.dealsSubtitle')}</p>
        </div>
        <Link to="/products?deals=true" className="deals-view-all">{t('banner.viewAll')}</Link>
      </div>
    </div>
  )
}
