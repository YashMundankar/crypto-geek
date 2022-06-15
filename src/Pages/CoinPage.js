import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Paper from '@mui/material/Paper';
// import axios from 'axios';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactHtmlParser from 'react-html-parser';
import CircularProgress from '@mui/material/CircularProgress';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CoinPage = () => {
  let {id}=useParams(); 
  
  const [coinData, setcoinData]=useState('')
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(res=>{
      return res.json();
    }).then(data=>{
      // let nd=JSON.parse(data)
      setcoinData(data);
      // console.log(nd)
      // console.log(nd)
      console.log(data)
          // setloading(false)

    })
    }, [])

  let description=coinData["description"];
  let image=coinData["image"];
  let {en}={...description};
  let {large}={...image}
  // en=en.split(". ")[0]
  return (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign='center'
        height="100vh"
        
    >   
    <ThemeProvider theme={darkTheme}>
        
      <Paper sx={{width:'100%',height:'100%',borderRadius:'0px',backgroundColor:'black'}}>
       {!coinData?<CircularProgress style={{'color': '#41e156'}}></CircularProgress>:
      <div className='CoinInfo'>
       <img style ={{margin:'20px',width:"15rem"}} src={large} alt="" />
       <p style={{fontFamily:'Anton', fontSize:'40px'}}>
          {coinData.name} 
       </p>
       <p style={{width:'75%' ,margin:'auto',border:'2px solid grey' ,padding:'10px'}}>
            {ReactHtmlParser(en.split(". ").slice(0,2))}.
       </p>
      </div>

} 
</Paper>

    </ThemeProvider>
    </Box>
  )
}

export default CoinPage
