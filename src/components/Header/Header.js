import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../Login/loginSlice'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Header.css'

export default function Header() {
  const user = useSelector(selectUser);


  return (
    <header className='header'>
      <div className='left'>
        <ArrowBackIosNewIcon className='arrow' />
      </div>
      <div className='right'>
        <Avatar src='' alt={user?.display_name} className='avatar' />
        {/* <p>{user?.display_name}</p> */}
      </div>
    </header>
  )
}
