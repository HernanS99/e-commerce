const cartReducers = (state, action) => {
  const { type, payload } = action

  const getQty = (cart) => {
    const qty = cart.reduce((acc, total) => {
      return acc + Number(total.qty)
    }, 0)
    return qty
  }

  switch (type) {
    case 'ADD':
      const validation = state.cart.some((el) => el._id === payload.item._id)
      if (validation) {
        state.cart.forEach((el) => {
          if (el._id === payload.item._id) {

            el.qty = payload.qty
          }
        })
      } else {
        state.cart.push({ ...payload.item, qty: payload.qty })
      }
      return { cart: state.cart, qty: getQty(state.cart) }
    case 'DELETE':
      const resultado = state.cart.filter((el) => el._id !== payload)
      return {
        cart: resultado,
        qty: getQty(resultado)
      }

    case 'CLEAN':
      localStorage.removeItem('cart')
      return { cart: [], qty: 0 }

    default:
      return state
  }
}

export default cartReducers