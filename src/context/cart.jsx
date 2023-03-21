import { createContext, useState } from 'react'

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear el provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // Verifica si el producto ya está en el carro
    const productInCart = cart.findIndex(item => item.id === product.id)

    if (productInCart >= 0) {
      // una forma sería usando con structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }

    // si no está en el carro
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
