import React from 'react'
import Avatar from '@mui/material/Avatar'
import './scss/videoCard.scss'
const VideoCard = ({image, title, channel, timestamp, views, channelImage}) => {
  return (
    <div className='videoCard'>
       <img className="videoCard__thumbnail" src={require('../assets/images/profile.png')}/>
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={require('../assets/images/profile.png')}/>
        <div className='videoCard__text'>
          <h4>{title}Titles are Awesome to See</h4>
          <p>{channel}</p>
          <p>{views}89 • {timestamp}06/55/1922</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard