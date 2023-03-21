import React from 'react'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export default function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                  onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
