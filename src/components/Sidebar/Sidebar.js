import React from 'react'
import './sidebar.scss'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home'
import TrendingIcon from '@mui/icons-material/Whatshot'
import SubIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbsupVideosIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ShowMoreIcon from '@mui/icons-material/ExpandMoreOutlined'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected={true} title="Home" Icon={HomeIcon}/>
      <SidebarRow title="Trending" Icon={TrendingIcon}/>
      <SidebarRow title="Subscription" Icon={SubIcon}/>
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon}/>
      <SidebarRow title="History" Icon={HistoryIcon}/>
      <SidebarRow title="Your videos" Icon={OndemandVideoIcon}/>
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon}/>
      <SidebarRow title="Liked Videos" Icon={ThumbsupVideosIcon}/>
      <SidebarRow title="Show more" Icon={ShowMoreIcon}/>
      <hr />
    </div>
  )
}

export default Sidebar