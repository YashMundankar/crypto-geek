
import React from 'react';
import {useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

function App() {
  const [coinsList, setcoinsList] = useState([0]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      return res.json();
    }).then(data=>{
          setcoinsList(data);

    })
    }, [])

  
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
          <Route index element={<HomePage data={coinsList}/>}/>
          <Route path='coins' element={<CoinPage/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
