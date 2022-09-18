import React, { useEffect, useState } from 'react'
import './Orders.css'

import { useStateValue } from '../Context/StateProvider'

import Order from './Order'
import Header from './Header'
import * as api from '../axios'

const Orders = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('profile'))?.result?._id

    const docData = {
      uid: userId,
    }
    console.log(docData)

    const getOrderData = async () => {
      try {
        const data = await api.getOrders(docData)
        console.log(data)
        setOrders(data.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    if (userId) {
      getOrderData()
    }
  }, [])

  console.log(orders)
  console.log(orders.orders)

  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your orders</h1>
        <div className="orders__order">
          {orders.orders ? (
            orders?.orders?.map((order) => <Order order={order} />)
          ) : (
            <p>Sign-in to see your orders.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Orders
