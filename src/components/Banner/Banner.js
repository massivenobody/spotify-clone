import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div className='banner'>
      <img src='https://t2.genius.com/unsafe/686x0/https%3A%2F%2Fimages.genius.com%2Fd01ae63bd1f7c9410e36dfe463f21c87.1000x1000x1.png' alt='' />
      <div className='info'>
        <h5>PLAYLIST</h5>
        <h1>Liked Songs</h1>
        <p>Description</p>
      </div>
    </div>
  )
}
