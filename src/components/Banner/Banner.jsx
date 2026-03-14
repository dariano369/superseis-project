import { Link } from 'react-router-dom'
import './Banner.css'

export default function Banner() {
  return (
    <div className="banner-section">
      <div className="banner">
        <div className="banner-content">
          <p className="banner-eyebrow">Tantos precios bajos, no te los pierdas</p>
          <h2 className="banner-title">Ofertas especiales para el hogar</h2>
          <Link to="/category/Almac%C3%A9n" className="banner-cta">Comprar ahora</Link>
        </div>
      </div>

      <div className="deals-header">
        <div>
          <h3 className="deals-title">Ofertas Flash</h3>
          <p className="deals-subtitle">Hasta 20% de descuento</p>
        </div>
        <Link to="/category/Bebidas" className="deals-view-all">Ver todo</Link>
      </div>
    </div>
  )
}
