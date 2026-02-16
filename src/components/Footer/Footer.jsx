import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Acerca de Superseis</h4>
          <ul>
            <li>Nuestra Historia</li>
            <li>Sucursales</li>
            <li>Trabaja con Nosotros</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Atención al Cliente</h4>
          <ul>
            <li>Preguntas Frecuentes</li>
            <li>Envíos y Entregas</li>
            <li>Devoluciones</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>Teléfono: (021) 123-456</li>
            <li>Email: contacto@superseis.com.py</li>
            <li>Horarios: Lunes a Domingo 8:00 - 22:00</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Superseis. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
