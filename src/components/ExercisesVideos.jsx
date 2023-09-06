import React from 'react'
import { Typography, Box, Stack } from '@mui/material';

const ExercisesVideos = ({exerciseVideos, name}) => {

  return (
    <Typography>
      watch <span>{name}</span> 
      {exerciseVideos?.slice(0,3).map((item,index) => (
        <a
        key={index}
        className='exercise-video'
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target="_blank"
        rel="noreferrer"
        >
        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
      <Typography>
      {item.video.title}
      </Typography>
      <Typography>
      {item.video.channelName}
        </Typography>
       
       

        </a>
      )) }
    </Typography>
  )
}

export default ExercisesVideos