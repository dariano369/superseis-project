import { useMemo } from 'react'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { useLanguage } from '../../context/LanguageContext'
import Banner from '../../components/Banner/Banner'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import {
  getDealsProducts,
  getNewArrivals,
  getPopularProducts,
  getItemsForYou
} from '../../utils/productFilters'

const SESSION_SEED = Date.now()

export default function HomePage() {
  const { stock } = useCart()
  const { isLoggedIn } = useAuth()
  const { t } = useLanguage()

  const deals = useMemo(() => getDealsProducts(stock), [stock])
  const newArrivals = useMemo(() => getNewArrivals(stock), [stock])
  const popular = useMemo(() => getPopularProducts(stock), [stock])
  const forYou = useMemo(() => getItemsForYou(stock, SESSION_SEED), [stock])

  return (
    <>
      <Banner />

      <ProductSlider
        products={deals}
        title={t('home.hottestDeals')}
        viewMoreLink="/products?deals=true"
      />

      {isLoggedIn && (
        <ProductSlider
          products={forYou}
          title={t('home.itemsForYou')}
          viewMoreLink="/products"
        />
      )}

      <ProductSlider
        products={newArrivals}
        title={t('home.newArrivals')}
        viewMoreLink="/products?new=true"
      />

      <ProductSlider
        products={popular}
        title={t('home.popularItems')}
        viewMoreLink="/products?popular=true"
      />
    </>
  )
}
