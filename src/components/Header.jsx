import React from 'react'
import Filters from './Filters'
import './Header.css'

export const Header = () => {
  return (
    <>
      <header className='topHeader'>
        <h1>React Jeans Store</h1>
        <span>quality clothing</span>
      </header>
      <header className='filterHeader'>
        <Filters />
      </header>
    </>
  )
}
