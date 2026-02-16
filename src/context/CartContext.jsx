import { createContext, useContext, useState, useCallback } from 'react'
import { initialStock } from '../data/products'
import { getStockStatus } from '../utils/stockHelpers'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [stock] = useState(initialStock)

  const addToCart = useCallback((product) => {
    const status = getStockStatus(product)
    if (status === 'out-of-stock') return

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return prevCart
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }, [])

  const updateCartQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId))
      return
    }

    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const product = stock.find(p => p.id === productId)
          const maxQuantity = product ? product.stock : item.quantity
          return { ...item, quantity: Math.min(newQuantity, maxQuantity) }
        }
        return item
      })
    )
  }, [stock])

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [cart])

  const getCartItemCount = useCallback(() => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }, [cart])

  const value = {
    cart,
    stock,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartTotal,
    getCartItemCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
