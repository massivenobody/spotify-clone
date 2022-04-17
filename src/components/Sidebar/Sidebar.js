import React from 'react'
import './Sidebar.css'
import SidebarTab from './SidebarTab'
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
      <div className='tabs'>
        <SidebarTab
          label='Home'
          iconOn={<HomeIcon fontSize='large' />}
          iconOff={<HomeOutlinedIcon fontSize='large' />} />
        <SidebarTab
          label='Search'
          iconOn={<SearchIcon fontSize='large' />}
          iconOff={<SearchIcon fontSize='large' />} />
        <SidebarTab
          label='Your Library'
          iconOn={<LibraryMusicIcon fontSize='large' />}
          iconOff={<LibraryMusicOutlinedIcon fontSize='large' />} />
      </div>
    </div>
  )
}
