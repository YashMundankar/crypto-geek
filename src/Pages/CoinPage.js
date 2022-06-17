import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactHtmlParser from 'react-html-parser';
import CircularProgress from '@mui/material/CircularProgress';
import { numberWithCommas } from '../Pages/HomePage';
import Chart from '../Components/Chart';
import { useSelector , useDispatch} from 'react-redux';
import { updateSingleCoinData } from '../Redux/action';




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CoinPage = () => {
  let {id}=useParams(); 
  const currency=useSelector((state)=>state.CurrencyReducer)
  const coinData=useSelector((state)=>state.SingleCoinDataReducer)
  const dispatch=useDispatch();

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(res=>{
      return res.json();
    }).then(data=>{
      dispatch(updateSingleCoinData(data));
          window.scroll({top: 0,
            left: 100,
            behavior: 'smooth'});

    })
    }, [])

  let description=coinData["description"];
  let {en}={...description};
  let image=coinData["image"];
  let {large}={...image}
  let marketData=coinData["market_data"];
  let {current_price}={...marketData}
  let {inr,usd,aud}={...current_price}

  const getCurrentPrice=()=>{
    if(currency==="INR") return inr;
    else if(currency==="USD") return usd;
    else if(currency==="AUD") return aud;
  }

  const getCurrencySymbol=()=>{
    if(currency==="INR") return "₹";
    else if(currency==="USD") return "$";
    else if(currency==="AUD") return "A$";
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign='center'
        height="100vh"
        
    >   
        
      <Paper sx={{width:'100%',height:'100%',borderRadius:'0px',backgroundColor:'black'}}>
       {!coinData?<CircularProgress style={{'color': '#41e156'}}></CircularProgress>:
      <div className='CoinInfo' style={{width:'100%'}}>
       <img style ={{margin:'20px',width:"10%"}} src={large} alt="" />
       <p style={{fontFamily:'Anton', fontSize:'30px'}}>
          {coinData.name} 
       </p>
       <div style={{marginTop:'10px' , fontFamily:'Montserrat',color:'#41e156',fontSize:'20px'}}>
        <p>Rank : {coinData.market_cap_rank}</p>
        <p>Current Price: {getCurrencySymbol()} {numberWithCommas( getCurrentPrice())}</p>
       </div>
       <p style={{width:'75%' ,margin:'auto',marginTop:'30px' ,padding:'10px' ,fontFamily:'Montserrat',fontSize:'20px'}}>
            {ReactHtmlParser(en.split(". ").slice(0,2))}.
       </p>
      </div>

} 
 <Chart id={id} currency={currency}></Chart>
</Paper>

    </Box>
    </ThemeProvider>
  )
}

export default CoinPage
