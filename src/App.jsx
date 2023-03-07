import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/About';

import './styles/styleConfig.css';

function App() {
  return (
    <Router>
      <Routes>

        <Route 
        path="/" 
        element= { <Home /> } 

        />

        <Route 
        path="/about" 
        element= { <Sobre /> } 

        />

      </Routes>
    </Router>

  )
}

export default App;
