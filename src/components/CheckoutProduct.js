import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">{price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove From Cart</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct
