export const initialState = {
  cart: [],
  user: null,
  deliveryAddress: {},
}

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price.props.value + amount, 0)

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id,
      )
      let newCart = [...state.cart]

      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the cart.`,
        )
      }

      return {
        ...state,
        cart: newCart,
      }

    case 'SET_USER':
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
      return {
        ...state,
        user: action.payload,
      }

    case 'SET_ADDRESS':
      return {
        ...state,
        deliveryAddress: action.payload,
      }

    case 'LOGOUT':
      window.localStorage.clear()
      return { ...state, user: null }

    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      }

    default:
      break
  }
}
