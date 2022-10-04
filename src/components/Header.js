import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCall from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';                   
import AppsIcon from '@mui/icons-material/Apps';                   
import NotificationIcon from '@mui/icons-material/Notifications';  
import Avatar from '@mui/material/Avatar'
import {Link} from "react-router-dom"
import "./header.scss"
const Header = () => {
   const [inputSearch, setInputSearch] = useState("")
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon className="header__icon"/>
        <Link to="/">
         <img 
          className='header__logo'
          src={require("../assets/images/yourTubeIcon.png")} alt="YourTube" />
        </Link>
      </div>
      <div className='header__input'>
        <input type="text" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search'/>
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputBtn"/> 
        </Link>
        
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