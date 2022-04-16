import React from 'react'
import './Login.css'
import Logo from '../../img/logo.jpg'
import auth from '../../spotify'

export default function Login() {
  return (
    <div className='login'>
      <img src={Logo} alt='' />
      <a href={auth}>LOGIN</a>
    </div>
  )
}
