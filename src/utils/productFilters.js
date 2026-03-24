export function getDealsProducts(stock) {
  return stock.filter(p => p.discount > 0).sort((a, b) => b.discount - a.discount)
}

export function getNewArrivals(stock) {
  return stock.filter(p => p.isNew)
}

export function getPopularProducts(stock) {
  return stock.filter(p => p.isPopular)
}

export function getItemsForYou(stock, seed) {
  let s = seed
  const shuffled = [...stock].sort(() => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280 - 0.5
  })
  return shuffled.slice(0, 12)
}

export function filterProducts(stock, filters) {
  let result = [...stock]

  if (filters.category && filters.category !== 'Todos') {
    result = result.filter(p => p.category === filters.category)
  }
  if (filters.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(p => p.name.toLowerCase().includes(q))
  }
  if (filters.deals) {
    result = result.filter(p => p.discount > 0)
  }
  if (filters.newArrivals) {
    result = result.filter(p => p.isNew)
  }
  if (filters.popular) {
    result = result.filter(p => p.isPopular)
  }
  if (filters.minPrice !== undefined) {
    result = result.filter(p => p.price >= filters.minPrice)
  }
  if (filters.maxPrice !== undefined) {
    result = result.filter(p => p.price <= filters.maxPrice)
  }
  if (filters.stockStatus === 'in-stock') {
    result = result.filter(p => p.stock > 10)
  } else if (filters.stockStatus === 'low-stock') {
    result = result.filter(p => p.stock > 0 && p.stock <= 10)
  }

  if (filters.sort === 'price-asc') result.sort((a, b) => a.price - b.price)
  else if (filters.sort === 'price-desc') result.sort((a, b) => b.price - a.price)
  else if (filters.sort === 'discount') result.sort((a, b) => b.discount - a.discount)
  else if (filters.sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name))

  return result
}
