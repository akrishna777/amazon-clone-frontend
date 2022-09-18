import {
  PaymentElement,
  useElements,
  useStripe,
  CardElement,
} from '@stripe/react-stripe-js'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'
import './Payment.css'
import axios from 'axios'
import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../Context/Reducer'
import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import * as api from '../axios'
import Alert from '@mui/material/Alert'
import { Box, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const stripePromise = loadStripe(
  'pk_test_51LfQiJSHVloG65UlsNmYQ7XloskoGvimRSP2YSiM9cSVRcs74zKmyFnkpZOTxTp7fpdGipP5PIp9j2cwG3vJ1qdO00qn33kbZX',
)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: 'auto',
  color: theme.palette.text.secondary,
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 13px 7px -10px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
}))

const Payment = () => {
  const navigate = useNavigate()
  const [{ cart, user, deliveryAddress }, dispatch] = useStateValue()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        const docData = {
          userId: JSON.parse(localStorage.getItem('profile')).result._id,
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          paymentIntentId: paymentIntent.id,
        }

        try {
          const { data } = await api.createOrder(docData)

          console.log(data)
        } catch (error) {
          console.log(error)
        }

        // setSucceeded(true)
        // setError(null)
        // setProcessing(false)
        dispatch({
          type: 'EMPTY_CART',
        })
        navigate('/orders')
      })
      .catch((error) => {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setMessage(error.message)
        } else {
          setMessage('An unexpected error occurred.')
        }
      })

    setIsLoading(false)
  }

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `https://amazon-clone-ak777.herokuapp.com/payments/create-payment-intent?total=${getCartTotal(
          cart,
        )}`,
      })
      await setClientSecret(response.data.clientSecret)
    }

    getClientSecret()

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          setIsLoading(false)
          break
        case 'processing':
          setMessage('Your payment is processing.')
          setIsLoading(false)
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          setIsLoading(false)
          break
        default:
          setMessage('Something went wrong.')
          setIsLoading(false)
          break
      }
    })
  }, [cart, stripe, message])

  console.log(clientSecret)

  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{cart?.length}items</Link>)
          </h1>
          {/* Payment section - delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{deliveryAddress?.name}</p>
              <p>
                {deliveryAddress?.address?.house},{' '}
                {deliveryAddress?.address?.area}
              </p>
              <p>{deliveryAddress?.address?.landmark}</p>
              <p>
                {deliveryAddress?.address?.city},{' '}
                {deliveryAddress?.address?.state}, {deliveryAddress?.country}
              </p>
              <p>Pincode: {deliveryAddress?.pincode}</p>
            </div>
          </div>
          {/* Payment section - Review Items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
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
          </div>
          {/* Payment section - Payment Method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <Alert
                severity="info"
                sx={{
                  marginBottom: '10px',
                  width: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    textAlign: 'center',
                    fontFamily: 'Amazon Ember Rg',
                  }}
                >
                  Note: Use card No.
                </Typography>
                <Item>4242 4242 4242 4242</Item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    fontFamily: 'Amazon Ember Rg',
                  }}
                >
                  For a Successful Test Payment.
                </Typography>
              </Alert>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          Order Total: ({cart.length} items):&nbsp;
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
                  <button disabled={isLoading || !stripe || !elements}>
                    <span id="button-text">
                      {isLoading ? (
                        <div className="spinner" id="spinner"></div>
                      ) : (
                        'Pay now'
                      )}
                    </span>
                  </button>
                </div>

                {message && <div id="payment-message">{message}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
