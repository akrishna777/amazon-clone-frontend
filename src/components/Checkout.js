import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Context/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'
import Subtotal from './Subtotal'
import { getCartTotal } from '../Context/Reducer'
import Footer from './Footer'

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg"
          />
          <div>
            <div className="checkout__title">
              <h1>Shopping Cart</h1>
              <hr
                style={{
                  height: '0px',
                  border: 'none',
                  borderTop: '1px solid #DDD',
                }}
              />

              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
            <div className="checkout__subtotal">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Subtotal({cart.length} items):&nbsp;
                      <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
              />
            </div>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout
