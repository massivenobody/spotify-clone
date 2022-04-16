import React from 'react'
import Body from '../Body/Body'
import Controls from '../Controls/Controls'
import Sidebar from '../Sidebar/Sidebar'
import './Player.css'

export default function Player() {
  return (
    <div className='player'>
      <div className='player--body'>
        <Sidebar />
        <Body />
      </div>
      <Controls />
    </div>
  )
}