import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/2/1.jpg' alt='' />
            <div>
              <strong>MacBook Pro</strong> - $1499
            </div>
            <footer>
              <small>
                Qty: 1
                <button>+</button>
              </small>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
