import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'

export const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      {/* <footer>
        <small>
          Qty: {quantity}
          <button onClick={addToCart}>+</button>
        </small>
      </footer> */}
    </li>
  )
}

export const Cart = () => {
  const { addToCart, cart, clearCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
        CARRO
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(item =>
              <CartItem
                key={item.id}
                price={item.price}
                title={item.title}
                quantity={item.quantity}
                thumbnail={item.image}
                addToCart={() => addToCart(item)}
              />)
          }
          <button
            className='clear'
            onClick={() => clearCart()}
          >
            <ClearCartIcon />
          </button>
        </ul>
      </aside>
    </>
  )
}
