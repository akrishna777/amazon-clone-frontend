import React from 'react'
import CurrencyFormat from 'react-currency-format'

import Header from './Header'
import './Home.css'
import Product from './Product'

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.jpg'
import banner7 from '../assets/banner7.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  const slides = [
    { url: banner1, title: banner1 },
    { url: banner2, title: banner2 },
    { url: banner3, title: banner3 },
    { url: banner4, title: banner4 },
    { url: banner5, title: banner5 },
    { url: banner6, title: banner6 },
    { url: banner7, title: banner7 },
  ]

  return (
    <>
      <Header />
      <Navbar />
      <div className="home">
        <div className="home__container">
          {/* Carousel Start */}
          <div className="carousel__image">
            <ImageSlider slides={slides} />
          </div>

          {/* Carousel End */}

          <div className="home__row">
            <Product
              id="1"
              title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)"
              price={
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <strong>{value}</strong>
                    </>
                  )}
                  decimalScale={2}
                  value={389}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
              }
              image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="2"
              title="Amazfit GTR 2e Smart Watch with Curved Design, 1.39 Always-on AMOLED Display, SpO2 & Stress Monitor, Built-in Alexa, Built-in GPS, 24-Day Battery Life, 90+ Sports Models, 50+Watch Faces(Matcha Green)"
              price={
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <strong>{value}</strong>
                    </>
                  )}
                  decimalScale={2}
                  value={7999.0}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
              }
              image="https://images-eu.ssl-images-amazon.com/images/I/41N7JHkITsL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="3"
              title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Acoustic Red)"
              price={
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <strong>{value}</strong>
                    </>
                  )}
                  decimalScale={2}
                  value={1999.0}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
              }
              image="https://m.media-amazon.com/images/I/51RP1QMh-mL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="4"
              title="Yardley London Gentleman Range Deo Body Spray Tripack (Classic + Urbane + Royale) for Men, 150ml Each (Pack of 3)"
              price={
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <strong>{value}</strong>
                    </>
                  )}
                  decimalScale={2}
                  value={358.0}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
              }
              image="https://m.media-amazon.com/images/I/71CICAL9ouS._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg"
              rating={4}
            />
            <Product
              id="5"
              title="HammerSmith Men Casual Shirt"
              price={
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <strong>{value}</strong>
                    </>
                  )}
                  decimalScale={2}
                  value={619.0}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
              }
              image="https://m.media-amazon.com/images/I/71aWaMENo0L._UY879_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row" style={{ width: '600px' }}>
            <Product
              id="6"
              title="Samsung 34-inch(86.42cm) Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium (LC34G55TWWWXXL, Black)"
              price={
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <strong>{value}</strong>
                    </>
                  )}
                  decimalScale={2}
                  value={46499.0}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
              }
              image="https://m.media-amazon.com/images/I/71it2biogSS._SX679_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
