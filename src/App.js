import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home/HomeScreen";
import Navbar from "./Pages/Home/Navbar";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
