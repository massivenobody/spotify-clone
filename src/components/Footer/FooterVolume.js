import React from 'react'
import ListIcon from '@mui/icons-material/List';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Slider, ThemeProvider } from '@mui/material';
import theme from '../../app/theme'

export default function FooterVolume() {
  return (
    <div className='volume'>
      <ListIcon />
      <VolumeDownIcon />
      <ThemeProvider theme={theme}>
        <Slider
          aria-label='volume'
          className='slider'
          size='small'
          defaultValue={100}
        />
      </ThemeProvider>
    </div>
  )
}