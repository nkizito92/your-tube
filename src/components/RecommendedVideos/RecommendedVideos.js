import React from 'react'
import "./recommendedvideos.scss"
import VideoCard from '../Videos/VideoCard'
const RecommendedVideos = ({}) => {
  return (
    <div className="rmdvideos">
      <h2>Recommended</h2>
      <div className='rmdvideos__videos'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  )
}

export default RecommendedVideos