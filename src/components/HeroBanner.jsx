import React from "react";
import {Box, Stack, Typography, Button} from "@mui/material";
import HeroBannerImage from "../assets/images/sportImag.jpg";

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: "212px", xs: "70px"}, ml: {sm: "50px" }}} position="relative" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: {lg: "44px", xs: "40px"}}} mb="23px">
            No more execuses <br /> get your goal 
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="20px" mt="30px">
            let's check these powerful exercises
        </Typography>
        <Button variant="contained" color="error" href="#exersices" sx={{backgroundColor:"ff2625", padding: "10px"}}>
         Explore exersices   
        </Button>
        <Typography fontWeight={600}
        className="rotate"
        color="ff2625"
        sx={{opacity: 0.1, display: {lg: "block", xs: "none"}}}
       fontSize="200px"

       >
          Exersice
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" /> 
    </Box>
  )
}

export default HeroBanner;