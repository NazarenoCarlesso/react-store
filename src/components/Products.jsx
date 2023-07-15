import React from 'react'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'
import { applyDiscount } from '../utils/applyDiscount'

export const Products = ({ products }) => {
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
              <img src={product.image} alt={product.title} />
              <div>
                <h3><strong>{product.title}</strong></h3>
                {
                  product.discount
                    ? (
                      <h3>
                        <strong className='price'>
                          ${applyDiscount(product.price, product.discount).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </strong>
                        <strong className='basePrice'>
                          ${product.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </strong>
                        <strong className='discount'>
                          {product.discount}%
                        </strong>
                      </h3>)
                    : (
                      <h3>
                        <strong className='price'>
                          ${product.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </strong>
                      </h3>)
                }
              </div>
              <div>
                <button
                  className='cartButton'
                  style={{ backgroundColor: isProductInCart ? '#c93838' : '#bebebe' }}
                  onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                  <strong>
                    {isProductInCart ? 'Quitar del carro' : 'Añadir al carro'}
                  </strong>
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
