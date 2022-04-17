import React from 'react'
import './Sidebar.css'

export default function SidebarTab({ label, iconOn, iconOff }) {
  return (
    <div className='sidebarTab'>
      {iconOff}
      <span className='label'>{label}</span>
    </div>
  )
}
