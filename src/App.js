import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './Components/Home/HomePage';
import LoginPage from './Components/Login/LoginPage';

function App() {
  return (
    <>

    <BrowserRouter basename='/'>
      <Routes>

        
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
