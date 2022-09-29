import React from 'react'
import Avatar from '@mui/material/Avatar'
import './videoCard.scss'
const VideoCard = ({image, title, channel, timestamp, views, channelImage}) => {
  return (
    <div className='videoCard'>
       <img className="videoCard__thumbnail" src={image}/>
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={channelImage} alt={channel} />
        <div className='videoCard__text'>
          <h4>{title}Titles are Awesome to See</h4>
          <p>{channel}chann</p>
          <p>{views}89 * {timestamp}06/55/1922</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard