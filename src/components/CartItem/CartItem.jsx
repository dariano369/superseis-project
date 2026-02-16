import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatPrice } from '../../utils/formatPrice'
import './CartItem.css'

export default function CartItem({ item, variant = 'compact' }) {
  const { updateCartQuantity, removeFromCart } = useCart()
  const { t, productName } = useLanguage()

  return (
    <div className={`cart-item ${variant === 'full' ? 'cart-item--full' : ''}`}>
      {variant === 'full' && (
        <div className="cart-item-image">
          <div className="image-placeholder-small">{productName(item).charAt(0)}</div>
        </div>
      )}
      <div className="cart-item-info">
        <h4>{productName(item)}</h4>
        <div className="cart-item-price">{formatPrice(item.price)}</div>
        {variant === 'full' && (
          <div className="cart-item-subtotal">
            {t('cart.subtotal')}: {formatPrice(item.price * item.quantity)}
          </div>
        )}
      </div>
      <div className="cart-item-controls">
        <button
          className="quantity-btn"
          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="cart-quantity">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
          disabled={item.quantity >= item.stock}
        >
          +
        </button>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  )
}
