import React from 'react'
import Avatar from '@mui/material/Avatar'
import './scss/videoCard.scss'
const PlayListVideoCard = ({playlist}) => {
    const {title, channel, views, timestamp, image, channelImage}  = playlist
  return (
    <div className='videoCard'>
       <img className="videoCard__thumbnail" src={require('../assets/images/profile.png')}/>
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={require('../assets/images/profile.png')}/>
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayListVideoCard