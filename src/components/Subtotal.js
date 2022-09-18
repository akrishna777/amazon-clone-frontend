import { cardActionAreaClasses } from '@mui/material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../Context/Reducer'
import { useStateValue } from '../Context/StateProvider'
import './Subtotal.css'

const Subtotal = () => {
  const navigate = useNavigate()
  const [{ cart, deliveryAddress }, dispatch] = useStateValue()
  console.log(cart)

  const handleSubmit = () => {
    if (deliveryAddress.address) {
      navigate('/payment')
    } else {
      navigate('/delivery')
    }
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({cart.length} items):&nbsp;
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button onClick={handleSubmit}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
