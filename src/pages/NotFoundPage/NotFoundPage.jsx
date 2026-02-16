import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-code">{t('notFound.title')}</h1>
        <p className="not-found-message">{t('notFound.message')}</p>
        <Link to="/" className="not-found-btn">
          {t('notFound.goHome')}
        </Link>
      </div>
    </div>
  )
}
