import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useLanguage } from '../../context/LanguageContext'
import logo from '../../assets/superseis-logo.png'
import './LoginPage.css'

export default function LoginPage() {
  const { toggleLogin } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('login')
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginForm(prev => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setRegisterForm(prev => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (!loginForm.email.trim() || !loginForm.password.trim()) return
    toggleLogin()
    navigate('/')
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (
      !registerForm.name.trim() ||
      !registerForm.email.trim() ||
      !registerForm.password.trim() ||
      !registerForm.confirmPassword.trim()
    ) return
    toggleLogin()
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <img src={logo} alt="Superseis" />
        </div>

        <div className="login-tabs">
          <button
            className={`login-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            {t('login.signIn')}
          </button>
          <button
            className={`login-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            {t('login.register')}
          </button>
        </div>

        {activeTab === 'login' ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="login-field">
              <label htmlFor="login-email">{t('login.email')}</label>
              <input
                type="email"
                id="login-email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                placeholder={t('login.email')}
              />
            </div>
            <div className="login-field">
              <label htmlFor="login-password">{t('login.password')}</label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder={t('login.password')}
              />
            </div>
            <button type="submit" className="login-submit-btn">
              {t('login.signIn')}
            </button>
            <p className="login-switch-text">
              <button type="button" className="login-switch-link" onClick={() => setActiveTab('register')}>
                {t('login.orRegister')}
              </button>
            </p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleRegisterSubmit}>
            <div className="login-field">
              <label htmlFor="register-name">{t('login.name')}</label>
              <input
                type="text"
                id="register-name"
                name="name"
                value={registerForm.name}
                onChange={handleRegisterChange}
                placeholder={t('login.name')}
              />
            </div>
            <div className="login-field">
              <label htmlFor="register-email">{t('login.email')}</label>
              <input
                type="email"
                id="register-email"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                placeholder={t('login.email')}
              />
            </div>
            <div className="login-field">
              <label htmlFor="register-password">{t('login.password')}</label>
              <input
                type="password"
                id="register-password"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                placeholder={t('login.password')}
              />
            </div>
            <div className="login-field">
              <label htmlFor="register-confirm">{t('login.confirmPassword')}</label>
              <input
                type="password"
                id="register-confirm"
                name="confirmPassword"
                value={registerForm.confirmPassword}
                onChange={handleRegisterChange}
                placeholder={t('login.confirmPassword')}
              />
            </div>
            <button type="submit" className="login-submit-btn">
              {t('login.createAccount')}
            </button>
            <p className="login-switch-text">
              <button type="button" className="login-switch-link" onClick={() => setActiveTab('login')}>
                {t('login.orSignIn')}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
