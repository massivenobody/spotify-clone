import React from 'react'
import FooterControls from './FooterControls';
import FooterVolume from './FooterVolume';
import './Footer.css'
import FooterDetails from './FooterDetails';

export default function Controls() {
  return (
    <div className='footer'>
      <FooterDetails />
      <FooterControls />
      <FooterVolume />
    </div>
  )
}