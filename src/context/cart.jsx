import { createContext, useReducer } from 'react'

// 1. Crear el contexto
export const CartContext = createContext()

// update localStorage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_CART': {
      const productInCart = state.findIndex(item => item.id === payload.id)

      if (productInCart >= 0) {
        // una forma sería usando con structuredClone
        const newCart = structuredClone(state)
        newCart[productInCart].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }

      // si no está en el carro
      const newState = [...state, {
        ...payload,
        quantity: 1
      }]

      updateLocalStorage(newState)
      return newState
    }
    case 'REMOVE_FROM_CART': {
      const newState = state.filter(item => item.id !== payload.id)
      updateLocalStorage(newState)

      return newState
    }
    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }
  return state
}

// testing para el reducer

// expect(
//   reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])

// 2. Crear el provider
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
