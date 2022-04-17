import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../components/Login/loginSlice'
import playerReducer from '../components/Player/playerSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    player: playerReducer
  }
})