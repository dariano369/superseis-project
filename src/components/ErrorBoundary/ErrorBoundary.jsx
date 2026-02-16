import { Component } from 'react'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <div className="error-boundary-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#e60012" strokeWidth="2" />
                <path d="M12 8v5" stroke="#e60012" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1" fill="#e60012" />
              </svg>
            </div>
            <h1 className="error-boundary-title">Something went wrong</h1>
            <p className="error-boundary-message">
              An unexpected error occurred. Please try reloading the page.
            </p>
            <button className="error-boundary-btn" onClick={this.handleReload}>
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
