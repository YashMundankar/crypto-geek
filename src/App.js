
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
          <Route index element={<HomePage  />}/>
          <Route path=':id' element={<CoinPage />}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
