import React from 'react'
import Filters from './Filters'

export default function Header ({ setFilters }) {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters setFilters={setFilters} />
    </header>
  )
}
