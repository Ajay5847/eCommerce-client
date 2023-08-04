import React from 'react'
import './Hero.scss'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='hero'>
      <div className="hero-content center">
        <h2 className="heading">Exclusive Print and Artwork</h2>
        <p className="subheading">Exclusive Art Pieces, For the Exclusive You</p>
        <button className="cta primary-btn" onClick={() => navigate('/category')}>Explore More</button>
      </div>
    </div>
  )
}

export default Hero