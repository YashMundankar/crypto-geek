import React from 'react'
import ".././App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrency } from '../Redux/action/index';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});





const Header = () => {

  const currency=useSelector((state)=>state.CurrencyReducer)
  const dispatch=useDispatch();
  console.log(currency)
  const handleChange = (event) => {
    dispatch(updateCurrency(event.target.value))
  };
  return (
   <ThemeProvider theme={darkTheme}>
       
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{height:'60px'}} variant='elevation' position="static">
      <Toolbar>
        <Link to="/" style={{flexGrow: 1 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 , color: '#41e156', fontWeight:'bolder' ,fontFamily:'Anton',textShadow:'5px 5px black'}}>
          Crypto-Geek
        </Typography>
        </Link>
    <Select color ='success' sx={{height: '30px',color:'#41e156',fontFamily:'Montserrat'}} onChange={handleChange} >
        <MenuItem value={"INR"}>INR</MenuItem>
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"AUD"}>AUD</MenuItem>
  </Select>
      </Toolbar>
    </AppBar>
  </Box>
   </ThemeProvider>
  )
}

export default Header