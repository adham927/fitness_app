import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from "./Loader";
const SimillarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography>
       Exercises that target the same muscle group
      </Typography>
      <Stack>
      {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}
      </Stack>
      <Typography>
       Exercises that use the same equipment
      </Typography>
      <Stack>
      {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>}
      </Stack>
    </Box>
   
  )
}

export default SimillarExercises