import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home/HomeScreen";
import Navbar from "./Pages/Home/Navbar";
import React from "react";
import { StrictMode } from 'react';

function App() {
  return (
    <div className="App">

        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home /> } ></Route>
              <Route path="*" element={<div> 404 Not Found</div>} ></Route>

              </Routes>

          </div>
        </Router>

    </div>
  );
}

export default App;
