import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { initialStock } from '../data/products'
import { getStockStatus } from '../utils/stockHelpers'

const CartContext = createContext(null)

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('superseis-cart')
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) {
        // Reset stock levels from fresh initialStock data
        return parsed.map(item => {
          const freshProduct = initialStock.find(p => p.id === item.id)
          if (freshProduct) {
            return { ...item, stock: freshProduct.stock, status: freshProduct.status }
          }
          return item
        }).filter(item => initialStock.some(p => p.id === item.id))
      }
    }
  } catch (e) {
    // If parsing fails, start with empty cart
  }
  return []
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCartFromStorage)
  const [stock] = useState(initialStock)

  useEffect(() => {
    localStorage.setItem('superseis-cart', JSON.stringify(cart))
  }, [cart])

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

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const value = {
    cart,
    stock,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
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
