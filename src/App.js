import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import { getToken } from './spotify';
import { setToken, selectToken, setUser } from './components/Login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi();

export default function App() {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    const tokenObj = getToken();
    window.location.hash = '';
    const _token = tokenObj.access_token

    if (_token) {
      dispatch(setToken(_token))
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => dispatch(setUser(user)))
    }
  }, [])

  return (
    <div>
      {token ?
      <Player /> :
      <Login />}
    </div>
  )
}