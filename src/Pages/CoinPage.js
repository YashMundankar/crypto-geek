import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Paper from '@mui/material/Paper';
// import axios from 'axios';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactHtmlParser from 'react-html-parser';
import CircularProgress from '@mui/material/CircularProgress';
import { numberWithCommas } from '../Pages/HomePage';
import Chart from '../Components/Chart';

// import { UserData } from "../Components/Data";
// import LineChart from "../Components/LineChart";




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CoinPage = (props) => {
  let {id}=useParams(); 


  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  
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
      // console.log(data)
          // setloading(false)
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
  // let curr="inr";
  // console.log(current_price)
  let {inr,usd,aud}={...current_price}
  // en=en.split(". ")[0]

  const getCurrentPrice=()=>{
    if(props.currency==="INR") return inr;
    else if(props.currency==="USD") return usd;
    else if(props.currency==="AUD") return aud;
  }

  const getCurrencySymbol=()=>{
    if(props.currency==="INR") return "₹";
    else if(props.currency==="USD") return "$";
    else if(props.currency==="AUD") return "A$";
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
        {/* <h2>Market Cap :</h2> */}
       </div>
       <p style={{width:'75%' ,margin:'auto',marginTop:'30px' ,padding:'10px' ,fontFamily:'Montserrat',fontSize:'20px'}}>
            {ReactHtmlParser(en.split(". ").slice(0,2))}.
       </p>
      </div>

} 
{/* <LineChart chartData={userData} /> */}
 <Chart id={id} currency={props.currency}></Chart>
</Paper>

    </Box>
    </ThemeProvider>
  )
}

export default CoinPage
