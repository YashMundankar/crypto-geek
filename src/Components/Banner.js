import React from 'react'
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';
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
            <p style={{color:'#41e156',fontFamily:'Anton', fontSize:'25px', marginTop:"10px" ,textShadow:'2px 2px black'}}>
                <Typewriter
                    options={{
                    strings: ['“Not all treasure is silver and gold, mate.”','"In the search of modern day treasure."','“When a pirate grows rich enough, they make him a prince.”',`“Life’s pretty good, and why wouldn’t it be? I’m a pirate, after all.”`],
                    autoStart: true,
                    loop: true,
                   }}
                />
              
              </p>
        </Box>
        {/* <h3 style ={{color:'red'}}>List :
            CoinPage
            Trending coins
        </h3> */}
        
    </div>
  )
}

export default Banner