import React from 'react'
import ".././App.css"
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});





const Header = () => {
  return (
   <ThemeProvider theme={darkTheme}>
       
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{height:'60px'}} variant='elevation' position="static">
      <Toolbar>
        <Link to="/">
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 , color: '#41e156', fontWeight:'bolder' ,fontFamily:'Anton',textShadow:'5px 5px black'}}>
          Crypto-Pirate
        </Typography>
        </Link>
    {/* <Select sx={{height: '30px'}}>
        <MenuItem value={"INR"}>INR</MenuItem>
        <MenuItem value={"USD"}>USD</MenuItem>
  </Select> */}
      </Toolbar>
    </AppBar>
  </Box>
   </ThemeProvider>
  )
}

export default Header