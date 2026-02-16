import { createContext, useContext, useState, useCallback } from 'react'
import { translations, defaultLocale } from '../i18n'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('superseis-lang') || defaultLocale
  })

  const t = useCallback((key) => {
    return translations[locale]?.[key] || translations[defaultLocale]?.[key] || key
  }, [locale])

  const productName = useCallback((product) => {
    if (locale === defaultLocale) return product.name
    const key = `name${locale.charAt(0).toUpperCase() + locale.slice(1)}`
    return product[key] || product.name
  }, [locale])

  const changeLocale = useCallback((newLocale) => {
    setLocale(newLocale)
    localStorage.setItem('superseis-lang', newLocale)
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t, productName, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
