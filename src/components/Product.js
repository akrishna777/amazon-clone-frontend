import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <div className="product__image">
        <img src={image} />
      </div>

      <div className="product__button">
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
