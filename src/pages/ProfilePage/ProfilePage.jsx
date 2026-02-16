import './ProfilePage.css'

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <h1 className="profile-title">Mi Cuenta</h1>
      <div className="profile-card">
        <div className="profile-avatar">
          <span>👤</span>
        </div>
        <div className="profile-info">
          <h2>Usuario</h2>
          <p>usuario@email.com</p>
        </div>
      </div>
      <div className="profile-sections">
        <div className="profile-section">
          <h3>Mis Pedidos</h3>
          <p>No tienes pedidos recientes.</p>
        </div>
        <div className="profile-section">
          <h3>Direcciones de Envío</h3>
          <p>No hay direcciones guardadas.</p>
        </div>
        <div className="profile-section">
          <h3>Métodos de Pago</h3>
          <p>No hay métodos de pago guardados.</p>
        </div>
      </div>
    </div>
  )
}
