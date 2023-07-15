import React from 'react'
import Filters from './Filters'
import './Header.css'

export const Header = () => {
  return (
    <>
      <header className='topHeader'>
        <h1>React Shop 🛒</h1>
      </header>
      <header className='filterHeader'>
        <Filters />
      </header>
    </>
  )
}
