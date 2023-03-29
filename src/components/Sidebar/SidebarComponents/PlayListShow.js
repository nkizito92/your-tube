import React from 'react'
import { useParams } from 'react-router-dom'
const PlayListShow = ({createdPlaylist}) => {
    // Createdplaylist prop is from the parent component App.js
    const param = useParams()
    let selectedPlaylist = createdPlaylist
        .find(list => list.toLowerCase()
        .split(" ")
        .join('') === param.title)
    return (
    <div>{selectedPlaylist}</div>
  )
  
}

export default PlayListShow