export const getStockStatus = (item) => {
  if (item.stock === 0) return 'out-of-stock'
  if (item.stock <= 10) return 'low-stock'
  return 'in-stock'
}

export const getStatusColor = (status) => {
  switch (status) {
    case 'in-stock': return '#2a8703'
    case 'low-stock': return '#ff9500'
    case 'out-of-stock': return '#e60012'
    default: return '#6b7280'
  }
}

export const calculateSavings = (item) => {
  if (item.originalPrice) {
    return item.originalPrice - item.price
  }
  return 0
}
