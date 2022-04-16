import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import { getToken } from './spotify';

export default function App() {
  useEffect(() => {
    const tokenObj = getToken();
    window.location.hash = '';
    const token = tokenObj.access_token
    console.log(token)
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}