import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import './SearchResultsPage.css'

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { stock } = useCart()

  const results = useMemo(() => {
    if (!query.trim()) return []
    return stock.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [stock, query])

  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <h2>Resultados para: &ldquo;{query}&rdquo;</h2>
      </div>
      <ProductGrid
        products={results}
        title={`${results.length} resultado${results.length !== 1 ? 's' : ''}`}
        emptyMessage={`No se encontraron productos para "${query}"`}
      />
    </div>
  )
}
