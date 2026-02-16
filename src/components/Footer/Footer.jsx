import { useLanguage } from '../../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t('footer.about')}</h4>
          <ul>
            <li>{t('footer.history')}</li>
            <li>{t('footer.locations')}</li>
            <li>{t('footer.careers')}</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t('footer.support')}</h4>
          <ul>
            <li>{t('footer.faq')}</li>
            <li>{t('footer.delivery')}</li>
            <li>{t('footer.returns')}</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul>
            <li>{t('footer.phone')}</li>
            <li>{t('footer.email')}</li>
            <li>{t('footer.hours')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  )
}
