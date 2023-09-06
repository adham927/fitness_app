import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import Details from '../components/Details';
import ExercisesVideos from '../components/ExercisesVideos';
import SimillarExercises from '../components/SimillarExercises';
import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscles, setTargetMuscles] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =  'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData =  await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      
       const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
       setTargetMuscles(targetMuscleExerciseData);
       const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
       setEquipment(equipmentExerciseData);
    }
    fetchExercisesData();
   }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimillarExercises targetMuscleExercises={targetMuscles} equipmentExercises={equipment}/>
    </Box>
    
  )
}

export default ExerciseDetail