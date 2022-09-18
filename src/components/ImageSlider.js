import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './ImageSlider.css'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animate, setAnimate] = useState('')
  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }

  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
    animation: { animate },
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -350%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -350%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const goToPrevious = async () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setAnimate('w3-animate-right')
    setTimeout(() => {
      setAnimate('')
    }, 500)
  }
  const goToNext = async () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setAnimate('w3-animate-left')
    setTimeout(() => {
      setAnimate('')
    }, 500)
  }

  return (
    <div style={sliderStyles} className={animate}>
      <ArrowBackIos style={leftArrowStyles} onClick={goToPrevious} />
      <ArrowForwardIos style={rightArrowStyles} onClick={goToNext} />
      <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider
