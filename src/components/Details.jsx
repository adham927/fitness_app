import React, {useState, useEffect} from 'react'
import { Typography, Box, Stack } from '@mui/material';
const Details = ({exerciseDetail}) => {
  const {target,bodyPart,equipment,gifUrl,name} = useState({});
  return (
    <Box >
      <Stack>
     <Typography>
     {exerciseDetail.name}
      </Typography> 
      <Typography>
      {exerciseDetail.bodyPart}
      {exerciseDetail.target}
      </Typography> 
      
      </Stack>
    </Box>
  )
}

export default Details