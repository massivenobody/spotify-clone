import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    }
  }
})

export const { setToken } = loginSlice.actions

export const selectToken = state => state.login.token

export default loginSlice.reducer