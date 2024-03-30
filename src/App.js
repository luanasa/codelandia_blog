import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/header';
import Cards from '../src/components/Cards/cards';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
    <Cards />
  </Router>
  );
}

export default App;
