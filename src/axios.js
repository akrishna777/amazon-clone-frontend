import axios from 'axios'

const API = axios.create({
  baseURL: 'https://amazon-clone-ak777.herokuapp.com/',
})

export const signIn = (formData) => API.post(`/users/signin`, formData)
export const signUp = (formData) => API.post(`/users/signup`, formData)
export const createOrder = (docData) => API.post(`/orders/postOrders`, docData)
export const getOrders = (docData) => API.post(`/orders/getOrders`, docData)
