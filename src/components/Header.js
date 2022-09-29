import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCall from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';                   
import AppsIcon from '@mui/icons-material/Apps';                   
import NotificationIcon from '@mui/icons-material/Notifications';  
import Avatar from '@mui/material/Avatar'
import "./header.scss"
const Header = () => {
  
  let coloring = {
    background: "#cd9d00",
    padding: "5px",
    color: 'white',
    borderRadius: "10px"
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon className="header__icon"/>
        {/* image */}
        <span className="header__logo">Your<span style={coloring}>Tube</span></span>

      </div>
      <div className='header__input'>
        <input type="text" placeholder='Search'/>
        <SearchIcon className="header__inputBtn"/> 
        
      </div>
      <div className='header__icons'>
        
        <VideoCall className="header__icon" /> 
        <AppsIcon  className="header__icon"/> 
        <NotificationIcon className="header__icon" />
        <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3a%2FCat03.jpg%2F1200px-Cat03.jpg&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&tbnid=hMjxy8pUhhc4QM&vet=12ahUKEwjI8K_Y9qn6AhXKB1MKHWzXBvkQMygAegUIARDcAQ..i&docid=3aBlXpmFZqFG2M&w=1200&h=1199&q=cat&ved=2ahUKEwjI8K_Y9qn6AhXKB1MKHWzXBvkQMygAegUIARDcAQ"/>
      </div>

    </div>
  )
}

export default Header