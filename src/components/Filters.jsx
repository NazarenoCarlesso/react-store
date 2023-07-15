import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export default function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const brandFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(filters => ({
      ...filters,
      minPrice: event.target.value
    }))
  }

  // const handleChangeCategory = (event) => {
  //   setFilters(filters => ({
  //     ...filters,
  //     category: event.target.value
  //   }))
  // }

  const handleChangeBrand = (event) => {
    setFilters(filters => ({
      ...filters,
      brand: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='22000'
          max='34000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={brandFilterId}>Marca</label>
        <select
          id={brandFilterId}
          onChange={handleChangeBrand}
        >
          <option value='all'>Todas</option>
          <option value="LEVI'S">Levi's</option>
          <option value='WRANGLER'>Wrangler</option>
          <option value='LEE'>Lee</option>
        </select>
      </div>
    </section>
  )
}
