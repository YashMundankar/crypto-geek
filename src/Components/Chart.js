import React from 'react'
import {useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Chart as ChartJS } from "chart.js/auto";
import {Line} from 'react-chartjs-2'
import { Button } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux';
import { updateHistoricalData,updateDays} from '../Redux/action/index';
const Chart = (props) => {
  const currency=useSelector((state)=>state.CurrencyReducer)
  const historicalData=useSelector((state)=>state.HistoricalDataReducer)
  const days=useSelector((state)=>state.DayReducer)
  const dispatch=useDispatch()

    const handleDay=(day)=>{
          dispatch(updateDays(day))
    }

    useEffect(() => {
       fetch(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=${currency}&days=${days}`)
       .then(res=>res.json())
       .then(data=>{dispatch(updateHistoricalData(data.prices))});
    }, [days])
    
  return (
    
      <div style={{widht:"50vh",backgroundColor:'rgb(0, 0, 0)'}}>
          {
          !historicalData?<CircularProgress style={{'color': '#41e156'}}></CircularProgress>:
          (
            <div style={{width:'80%',margin:'auto',padding:'20px'}}>
               <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#41e156",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 0.5,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button onClick={()=>handleDay(1)} color= "success" sx={{color:'#41e156',fontFamily:'Anton'}} variant='outlined'>1 Day</Button>
              <Button onClick={()=>handleDay(7)} color= "success" sx={{color:'#41e156',fontFamily:'Anton'}} variant='outlined'>1 Week</Button>
              <Button onClick={()=>handleDay(30)} color= "success" sx={{color:'#41e156',fontFamily:'Anton'}} variant='outlined'>1 Month</Button>
              <Button onClick={()=>handleDay(365)} color= "success" sx={{color:'#41e156',fontFamily:'Anton'}}variant='outlined'>1 Year</Button>
            </div>
            </div>
          )
          
          }</div>
  )
}

export default Chart