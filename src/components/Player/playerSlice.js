import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playlists: {}
  },
  reducers: {
    setPlaylists: (state, { payload }) => {
      state.playlists = payload
    }
  }
})

export const { setPlaylists } = playerSlice.actions

export const selectPlaylists = state => state.player.playlists

export default playerSlice.reducer