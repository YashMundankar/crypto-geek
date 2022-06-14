import React from 'react'
import Banner from "../Components/Banner"
import Card from "../Components/Card"

const HomePage = (props) => {
  return (
    <div style={{backgroundColor:'#1e1f1e'}}>
        <Banner/>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
        }}>
            {
                props.data.map(coin=>(
                    <div style={{margin:'10px'}}>
                            <Card coin={coin}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomePage