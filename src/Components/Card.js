import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { numberWithCommas } from '../Pages/HomePage';

export default function ActionAreaCard(props) {
    return (
    
    <Card variant='outlined' sx={{height:'300px' , width:'300px',borderRadius:'30px' ,textAlign:'center'}}>
      <CardActionArea>
        <CardContent>

        <img style={{width:'90px'}} src={props.coin.image} alt="" />
        </CardContent>
        
        <CardContent>
          <Typography sx={{fontFamily:'Anton'}} gutterBottom variant="h5" component="div">
            {props.coin.name}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{fontFamily:'Montserrat'}}>
            Market Cap Rank : {props.coin.market_cap_rank}
            <br />
            Current Price : <span style={{fontWeight:'bold'}}>{props.getCurrencySymbol()}{ numberWithCommas( props.coin.current_price)}</span>
            <br />
            Highest Past 24 Hrs. : <span style={{color:'#41e156'}}> {props.getCurrencySymbol()}{numberWithCommas(props.coin.high_24h)}</span>
            <br />
            Lowest Past 24 Hrs. :  <span style={{color:'red'}}>{props.getCurrencySymbol()}{numberWithCommas(props.coin.low_24h)}</span>
            <br />
            Market Cap : {numberWithCommas(props.coin.market_cap)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}