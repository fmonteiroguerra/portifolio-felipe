import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  

  return (
    <>
    <BrowserRouter>
     <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
    <Footer />

    </>
  )
}

export default App
