import { useContext, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'

function useFilters () {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
