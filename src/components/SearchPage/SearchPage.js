import React from 'react'
import {useParams} from 'react-router-dom'
import "./search.scss"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import ChannelRow from '../Videos/ChannelRow'
import VideoRow from "../Videos/VideoRow"
const SearchPage = () => {
    const params = useParams()
    console.log(params)
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneOutlinedIcon />
            <h2> FILTER </h2> 
        </div>
        <hr />
        <ChannelRow  
          image={require("../assets/images/profile.png")}
          channel="StickMan"
          verified 
          subs="554k"
          noOfVideos={655}
          description="You can find me Here!!"/>
        <hr />
        <VideoRow   image={require("../assets/images/profile.png")}
          channel="StickMan"
          verified 
          title="Cook it properly"
          subs="554k"
          noOfVideos={655}
          timestamp="48 seconds ago"
          description="You can find me Here!!"/>
    </div>
  )
}

export default SearchPage