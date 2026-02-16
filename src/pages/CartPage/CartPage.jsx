import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import CartItem from '../../components/CartItem/CartItem'
import './CartPage.css'

export default function CartPage() {
  const { cart, getCartTotal, getCartItemCount } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-page-empty">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar</p>
        <Link to="/" className="continue-shopping-btn">
          Seguir Comprando
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page-title">Carrito de Compras</h1>
      <div className="cart-page-layout">
        <div className="cart-page-items">
          {cart.map(item => (
            <CartItem key={item.id} item={item} variant="full" />
          ))}
        </div>
        <div className="cart-page-summary">
          <h3>Resumen de Compra</h3>
          <div className="summary-row">
            <span>Productos ({getCartItemCount()})</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
          <div className="summary-row">
            <span>Envío</span>
            <span className="free-shipping">Gratis</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
          <button className="checkout-btn-large">Finalizar Compra</button>
          <Link to="/" className="continue-shopping-link">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  )
}
