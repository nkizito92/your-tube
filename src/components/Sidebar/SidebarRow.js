import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebarRow.scss"
const SidebarRow = ({selected, Icon, title }) => {
  let links = ""
  title === 'Home' ? links = '/' : links = title
  if(title === 'Home') links ="/"
  return (
    <div className={`sidebarRow ${selected && "selected"}`}> 
        <Icon className="sidebarRow__icon" />
        <Link to={`${links.toLowerCase()}`}>   
          <h2 className='sidebarRow__title'>{title}</h2>
        </Link>
    </div>
  )
}

export default SidebarRow