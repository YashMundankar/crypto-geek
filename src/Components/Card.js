import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard(props) {
    return (

    // <Card sx={{ maxWidth: 250 }}>
    
    <Card variant='outlined' sx={{height:'300px' , width:'300px',borderRadius:'30px' ,textAlign:'center'}}>
      <CardActionArea>
        <CardContent>

        <img style={{width:'90px'}} src={props.coin.image} alt="" />
        </CardContent>
        
        <CardContent>
          <Typography sx={{fontFamily:'Anton'}} gutterBottom variant="h5" component="div">
            {props.coin.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Market Cap Rank : {props.coin.market_cap_rank}
            <br />
            Current Price : {props.coin.current_price}
            <br />
            Highest Past 24 Hrs. : {props.coin.high_24h}
            <br />
            Lowest Past 24 Hrs. : {props.coin.low_24h}
            <br />
            Market Cap : {props.coin.market_cap}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}