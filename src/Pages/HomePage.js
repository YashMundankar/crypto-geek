import React from 'react'
import {useState,useEffect} from 'react'
import Banner from "../Components/Banner"
import Card from "../Components/Card"
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';



import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const HomePage = (props) => {
    const [search, setsearch] = useState('')
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    const [coins, setcoins] = useState([])
    const getCurrencySymbol=()=>{
      if(props.currency==="INR") return "₹";
      else if(props.currency==="USD") return "$";
      else if(props.currency==="AUD") return "A$";
    }

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(res=>{
          return res.json();
        }).then(data=>{
              setcoins(data);
              setloading(false)
    
        })
        }, [props.currency])

    const Search = () => {
        return coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
      }
 

  return (
    <ThemeProvider theme={darkTheme}>

    <div style={{backgroundColor:'#1e1f1e'}}>
    <Banner/>
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
    >   
        <TextField color='success' label="Search Crypto Currency..." variant="outlined" sx={{width:'70%'}}
        onChange={(e)=>{setsearch(e.target.value);console.log(search)}}></TextField>
    </Box>
       
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
        }}>
        {loading?(  <div style={{height:'100vh'}}>
            <CircularProgress  style={{'color': '#41e156'}} />
            </div>
            ):(
                
                Search().slice((page - 1) * 10, (page - 1) * 10 + 12).map(coin=>(
                    <Link to={coin.id} key={coin.id}>
                    <div  style={{margin:'10px'}}>
                            <Card coin={coin} getCurrencySymbol={getCurrencySymbol}/>
                    </div>
                    </Link>
                ))
                
                )}

        </div>
        {/* </Paper> */}
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
        height='20vh'
        >   
        
        <Pagination color="success" count={(Search().length / 10).toFixed(0)}  onChange={(_, value) => {
            setpage(value);
            window.scroll({top: 35,
                left: 100,
                behavior: 'smooth'});
          }} />
    </Box>
    {!Search().length&&<div style={{backgroundColor:'rgba(255, 255, 255, 0.001)',height:"40vh"}}></div>}
    </div>
                </ThemeProvider>
  )
}

export default HomePage