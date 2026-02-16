import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function CategoryPage() {
  const { categoryName } = useParams()
  const { stock } = useCart()

  const decodedCategory = decodeURIComponent(categoryName)

  const filteredProducts = useMemo(() => {
    return stock.filter(item => item.category === decodedCategory)
  }, [stock, decodedCategory])

  return (
    <ProductGrid
      products={filteredProducts}
      title={decodedCategory}
      emptyMessage={`No hay productos en la categoría "${decodedCategory}"`}
    />
  )
}
