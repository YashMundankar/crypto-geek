import React from 'react'
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
function Banner() {
  return (
    <div className='banner' style={{
         textAlign:'center',
        //  marginTop:"10px",
         }}>
        <Box style={{height:'200px'}}>
            <h1 style={{color:'white',fontWeight:'bolder' , fontSize :'4rem',fontFamily:'Anton',textShadow:'5px 5px black'}}>
                Crypto-Pirate
            </h1>
            <p style={{color:'white',fontFamily:'Anton', fontSize:'25px', marginTop:"10px" ,textShadow:'2px 2px black'}}>In the search of modern day treasure.</p>
        </Box>
        {/* <h3 style ={{color:'red'}}>List :
            CoinPage
            Trending coins
        </h3> */}
    </div>
  )
}

export default Banner