import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Aspects from './pages/aspectScores/AspectScores';
import Benchmark from './pages/benchmark/Benchmark';

function App() {
  return (
    <div className="app">
      
      <Navbar/>
      <div className="content-container">
        <Routes>
          <Route path="/" element={ <Aspects/> }/>
          <Route path="/aspectscores" element={ <Aspects/> }/>
          <Route path="/benchmark" element={ <Benchmark/> }/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
