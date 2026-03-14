import { useCart } from '../../context/CartContext'
import Banner from '../../components/Banner/Banner'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function HomePage() {
  const { stock } = useCart()

  return (
    <>
      <Banner />
      <ProductGrid
        products={stock}
        title="Productos Destacados"
      />
    </>
  )
}
