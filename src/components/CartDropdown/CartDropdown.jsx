import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import CartItem from '../CartItem/CartItem'
import './CartDropdown.css'

const CartDropdown = forwardRef(function CartDropdown({ onClose }, ref) {
  const { cart, getCartTotal } = useCart()

  return (
    <div ref={ref} className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
      <div className="cart-dropdown-header">
        <h3>Carrito de Compras</h3>
        <button className="close-cart-btn" onClick={onClose}>&times;</button>
      </div>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito está vacío</p>
          <span>Agrega productos para comenzar</span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <CartItem key={item.id} item={item} variant="compact" />
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="cart-total-price">{formatPrice(getCartTotal())}</span>
            </div>
            <Link to="/cart" className="checkout-btn" onClick={onClose}>
              Ver Carrito Completo
            </Link>
          </div>
        </>
      )}
    </div>
  )
})

export default CartDropdown
