import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: '',
    user: {},
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    },

    setUser: (state, { payload }) => {
      state.user = payload
    }
  }
})

export const { setToken, setUser } = loginSlice.actions

export const selectToken = state => state.login.token
export const selectUser = state => state.login.user

export default loginSlice.reducer