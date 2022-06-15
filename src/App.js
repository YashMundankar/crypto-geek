
import React from 'react';
import {useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import NotFound from './Pages/NotFound';
// import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [coinsList, setcoinsList] = useState([0]);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      return res.json();
    }).then(data=>{
          setcoinsList(data);
          setloading(false)

    })
    }, [])

  
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
          <Route index element={<HomePage data={coinsList} loading={loading}/>}/>
          <Route path=':id' element={<CoinPage/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
