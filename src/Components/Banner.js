import React from 'react'
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
function Banner() {
  return (
    <div className='banner' style={{
         textAlign:'center',
        //  marginTop:"10px",
         }}>
        <Box style={{height:'300px'}}>
            <h1 style={{color:'white',fontWeight:'bolder' , fontSize :'50px',fontFamily:'Anton',textShadow:'5px 5px black'}}>
                Crypto Pirate
            </h1>
            <p style={{color:'white',fontFamily:'Anton', fontSize:'15px', marginTop:"10px" ,textShadow:'2px 2px black'}}>In the search of modern day treasure.</p>
        </Box>
        <h3 style ={{color:'red'}}>List :
            Loading
            Pagination
            Search
            CoinPage
            Routes
            Trending coins
        </h3>
    </div>
  )
}

export default Banner