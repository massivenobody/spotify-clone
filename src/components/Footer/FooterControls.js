import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Slider } from '@mui/material';

export default function FooterControls() {
  return (
    <div className='controls'>
      <div className='buttons'>
        <ShuffleIcon fontSize='medium' />
        <SkipPreviousIcon fontSize='medium' />
        <PlayCircleIcon fontSize='large' className='play' />
        <SkipNextIcon fontSize='medium' />
        <RepeatIcon fontSize='medium' />
      </div>
      <Slider size='small' className='seek'/>
    </div>
  )
}
