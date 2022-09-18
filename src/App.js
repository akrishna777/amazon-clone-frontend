import './App.css'

import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useStateValue } from './Context/StateProvider'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './components/Payment'
import Orders from './components/Orders'
import { loadStripe } from '@stripe/stripe-js'
import Signup from './components/Signup'
import DeliveryAddress from './components/DeliveryAddress'

const stripePromise = loadStripe(
  'pk_test_51LfQiJSHVloG65UlsNmYQ7XloskoGvimRSP2YSiM9cSVRcs74zKmyFnkpZOTxTp7fpdGipP5PIp9j2cwG3vJ1qdO00qn33kbZX',
)

function App() {
  const [{}, dispatch] = useStateValue()

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/delivery" element={<DeliveryAddress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
