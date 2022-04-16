import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import { getToken } from './spotify';
import { setToken, selectToken } from './components/Login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  console.log(useSelector(selectToken))

  useEffect(() => {
    const tokenObj = getToken();
    window.location.hash = '';
    const _token = tokenObj.access_token
    dispatch(setToken(_token))
  }, [])

  return (
    <div>
      {token ?
      <h1>Logged in</h1> :
      <Login />}
    </div>
  )
}