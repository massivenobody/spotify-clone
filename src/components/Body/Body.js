import React from 'react'
import Header from '../Header/Header'
import Playlist from '../Playlist/Playlist'
import './Body.css'

export default function Body() {
  return (
    <div className='body'>
      <Header />
      <Playlist />
    </div>
  )
}
