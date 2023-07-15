export const applyDiscount = (price, discount) => {
  return (price * 100 - price * discount) / 100
}
